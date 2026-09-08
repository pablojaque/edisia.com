import SiteChrome from "../components/SiteChrome";
import HeroWithModal from "../components/HeroWithModal";
import ProductGrid from "../components/ProductGrid";
import ContactForm from "../components/ContactForm";
import { getSessionAndPlan } from "../lib/getSessionAndPlan";

export const metadata = {
  title: "Barmaja — Productos ganadores de TikTok para ecommerce, cada semana",
  description:
    "Cada semana analizamos TikTok y el mercado en inglés para encontrar los productos que más están vendiendo, con enlaces directos a proveedores en AliExpress y Alibaba.",
};

export default async function HomePage() {
  const { plan } = await getSessionAndPlan();

  return (
    <SiteChrome lang="es" altHref="/en">
      <HeroWithModal lang="es" productsHref="#productos" />

      <section id="como-funciona" className="alt">
        <div className="section-inner">
          <div className="section-heading">
            <h2>Cómo funciona</h2>
            <p>Un proceso simple, repetido cada semana.</p>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M4 5h16v10H8l-4 4V5z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 9h8M8 12h5" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <h3>1. Monitorizamos</h3>
              <p>Revisamos TikTok Creative Center y las tendencias del mercado en inglés (EE.UU., Reino Unido) cada semana.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M9 12l2 2 4-4" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#4f46e5" strokeWidth="1.8" />
              </svg>
              <h3>2. Filtramos</h3>
              <p>Solo pasan los productos con señales reales de tracción: vistas, ventas confirmadas o adopción rápida de creadores.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M8 6L2.5 12L8 18M16 6L21.5 12L16 18" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>3. Te conectamos</h3>
              <p>Cada producto lleva enlaces directos a AliExpress y Alibaba para que contactes con proveedores sin perder tiempo.</p>
            </article>
          </div>
        </div>
      </section>

      <ProductGrid lang="es" plan={plan} />

      <section id="sobre-nosotros" className="alt">
        <div className="section-inner about">
          <h2>Quiénes somos</h2>
          <p>
            Barmaja es un proyecto llevado adelante por un grupo de estudiantes universitarios de programación. Cada
            semana revisamos las tendencias de TikTok en el mercado angloparlante para ahorrarte horas de scroll, y te
            acercamos a los proveedores sin intermediarios.
          </p>
        </div>
      </section>

      <ContactForm lang="es" />
    </SiteChrome>
  );
}
