import { createClient } from "./supabase/server";

// Returns { user, plan } for the current request. plan is "free" when
// there's no logged-in user, no profile row yet, or the subscription
// isn't active.
export async function getSessionAndPlan() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { user: null, plan: "free" };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("plan")
    .eq("id", user.id)
    .single();

  return { user, plan: profile?.plan === "premium" ? "premium" : "free" };
}
