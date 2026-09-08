import { NextResponse } from "next/server";
import { getStripe } from "../../../../lib/stripe";
import { createAdminClient } from "../../../../lib/supabase/server";

// Stripe needs the raw, unparsed request body to verify the signature.
export async function POST(request) {
  const stripe = getStripe();
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return NextResponse.json({ error: `Webhook signature verification failed: ${err.message}` }, { status: 400 });
  }

  const admin = createAdminClient();

  async function setPlanByCustomer(customerId, plan, subscriptionId) {
    await admin
      .from("profiles")
      .update({ plan, stripe_subscription_id: subscriptionId ?? null, updated_at: new Date().toISOString() })
      .eq("stripe_customer_id", customerId);
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const userId = session.client_reference_id || session.metadata?.supabase_user_id;
      if (userId) {
        await admin
          .from("profiles")
          .update({
            plan: "premium",
            stripe_customer_id: session.customer,
            stripe_subscription_id: session.subscription,
            updated_at: new Date().toISOString(),
          })
          .eq("id", userId);
      }
      break;
    }
    case "customer.subscription.updated": {
      const subscription = event.data.object;
      const active = ["active", "trialing"].includes(subscription.status);
      await setPlanByCustomer(subscription.customer, active ? "premium" : "free", subscription.id);
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      await setPlanByCustomer(subscription.customer, "free", null);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
