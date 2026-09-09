import { NextResponse } from "next/server";
import { createClient, createAdminClient } from "../../../lib/supabase/server";
import { analyzeStore } from "../../../lib/storeAnalyzer";
import { getRemainingAnalysesToday } from "../../../lib/getAnalyzerQuota";

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
    const remaining = await getRemainingAnalysesToday(user.id);
    if (remaining <= 0) {
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
