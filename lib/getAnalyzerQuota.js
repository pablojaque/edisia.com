import { createAdminClient } from "./supabase/server";

const FREE_DAILY_LIMIT = 2;

// Returns how many free store analyses a user has left today.
// Premium users always get FREE_DAILY_LIMIT back (the UI ignores it for them).
export async function getRemainingAnalysesToday(userId) {
  const admin = createAdminClient();
  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);
  const { count } = await admin
    .from("store_analyses")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .gte("created_at", startOfDay.toISOString());
  return Math.max(0, FREE_DAILY_LIMIT - (count || 0));
}
