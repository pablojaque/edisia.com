import { NextResponse } from "next/server";
import { createClient, createAdminClient } from "../../../lib/supabase/server";
import { analyzeStore } from "../../../lib/storeAnalyzer";

const FREE_DAILY_LIMIT = 2;

export async function POST(request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "not_authenticated" }, { status: 401 });
  }

  const { url } = await request.json();
  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "invalid_url" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data: profile } = await admin.from("profiles").select("plan").eq("id", user.id).single();
  const isPremium = profile?.plan === "premium";

  if (!isPremium) {
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    const { count } = await admin
      .from("store_analyses")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", startOfDay.toISOString());

    if ((count || 0) >= FREE_DAILY_LIMIT) {
      return NextResponse.json({ error: "limit_reached" }, { status: 403 });
    }
  }

  const result = await analyzeStore(url);
  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 422 });
  }

  await admin.from("store_analyses").insert({ user_id: user.id, url: result.origin });

  return NextResponse.json({ result });
}
