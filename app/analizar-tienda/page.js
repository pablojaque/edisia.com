import { redirect } from "next/navigation";
import SiteChrome from "../../components/SiteChrome";
import StoreAnalyzer from "../../components/StoreAnalyzer";
import { getSessionAndPlan } from "../../lib/getSessionAndPlan";
import { createAdminClient } from "../../lib/supabase/server";

export const metadata = { title: "Analizar tienda Shopify — Barmaja" };

const FREE_DAILY_LIMIT = 2;

export default async function AnalizarTiendaPage() {
  const { user, plan } = await getSessionAndPlan();

  if (!user) {
    redirect("/login?next=/analizar-tienda");
  }

  const isPremium = plan === "premium";
  let remainingToday = FREE_DAILY_LIMIT;

  if (!isPremium) {
    const admin = createAdminClient();
    const startOfDay = new Date();
    startOfDay.setUTCHours(0, 0, 0, 0);
    const { count } = await admin
      .from("store_analyses")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .gte("created_at", startOfDay.toISOString());
    remainingToday = Math.max(0, FREE_DAILY_LIMIT - (count || 0));
  }

  return (
    <SiteChrome lang="es" altHref="/analizar-tienda">
      <section className="hero" style={{ minHeight: "auto", paddingBottom: 40 }}>
        <h1>Analiza cualquier tienda Shopify</h1>
        <p>
          Pega el link de una tienda de la competencia y te sacamos su catálogo, precios, apps y más — todo con
          información pública, sin necesidad de acceso a su cuenta.
        </p>
      </section>
      <section>
        <div className="section-inner" style={{ maxWidth: 640 }}>
          <StoreAnalyzer isPremium={isPremium} remainingToday={remainingToday} />
        </div>
      </section>
    </SiteChrome>
  );
}
