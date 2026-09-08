import SiteChrome from "../../components/SiteChrome";
import PricingCTA from "../../components/PricingCTA";
import { getSessionAndPlan } from "../../lib/getSessionAndPlan";

export const metadata = {
  title: "Precios — Barmaja",
  description: "Compara el plan gratuito y el plan premium de Barmaja.",
};

export default async function PreciosPage() {
  const { user, plan } = await getSessionAndPlan();

  return (
    <SiteChrome lang="es" altHref="/precios">
      <section className="hero" style={{ minHeight: "auto", paddingBottom: 40 }}>
        <h1>Planes</h1>
        <p>Empieza gratis. Hazte premium cuando quieras ver la lista completa cada semana.</p>
      </section>
      <section>
        <div className="section-inner">
          <div className="services-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
            <article className="service-card">
              <h3>Gratis</h3>
              <p className="pricing-price">
                0€ <span>/mes</span>
              </p>
              <ul className="pricing-features">
                <li>3 productos ganadores por semana</li>
                <li>Enlaces a proveedores en AliExpress y Alibaba</li>
                <li>Cuenta para guardar tu acceso</li>
              </ul>
            </article>
            <article className="pricing-card">
              <span className="plan-badge premium">Premium</span>
              <p className="pricing-price">
                9€ <span>/mes</span>
              </p>
              <ul className="pricing-features">
                <li>Los 8 productos ganadores completos cada semana</li>
                <li>Enlaces a proveedores en AliExpress y Alibaba</li>
                <li>Cancela cuando quieras, sin permanencia</li>
              </ul>
              <PricingCTA user={user} plan={plan} />
            </article>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
