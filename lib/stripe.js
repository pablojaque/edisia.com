import Stripe from "stripe";

let stripeInstance = null;

// Lazy singleton: avoids crashing the build when STRIPE_SECRET_KEY isn't
// set yet (e.g. before Stripe keys are configured in Vercel).
export function getStripe() {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    });
  }
  return stripeInstance;
}
