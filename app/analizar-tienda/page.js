import { redirect } from "next/navigation";
import SiteChrome from "../../components/SiteChrome";
import StoreAnalyzer from "../../components/StoreAnalyzer";
import { getSessionAndPlan } from "../../lib/getSessionAndPlan";
import { getRemainingAnalysesToday } from "../../lib/getAnalyzerQuota";

export const metadata = { title: "Analizar tienda Shopify — Barmaja" };

export default async function AnalizarTiendaPage() {
  const { user, plan } = await getSessionAndPlan();

  if (!user) {
    redirect("/login?next=/analizar-tienda");
  }

  const isPremium = plan === "premium";
  const remainingToday = isPremium ? 2 : await getRemainingAnalysesToday(user.id);

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
