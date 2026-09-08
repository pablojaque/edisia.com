const COPY = {
  es: {
    title: "Los productos que arrasan en TikTok, cada semana.",
    subtitle:
      "Analizamos TikTok Creative Center y las tendencias del mercado angloparlante (EE.UU. y Reino Unido) para encontrar los productos con tracción real, y te damos el enlace directo para contactar con sus proveedores.",
    seeProducts: "Ver productos de esta semana",
    howWeDoIt: "Cómo lo hacemos",
    howHref: "/como-trabajamos",
  },
  en: {
    title: "The products taking over TikTok, every week.",
    subtitle:
      "We analyze TikTok Creative Center and English-speaking market trends (US and UK) to find products with real traction, and give you a direct link to contact their suppliers.",
    seeProducts: "See this week's products",
    howWeDoIt: "How we do it",
    howHref: "/en/how-we-work",
  },
};

export default function HeroWithModal({ lang, productsHref }) {
  const t = COPY[lang];

  return (
    <section className="hero">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <div className="hero-cta-row">
        <a className="button" href={productsHref}>
          {t.seeProducts}
        </a>
        <a className="button secondary" href={t.howHref}>
          {t.howWeDoIt}
        </a>
      </div>
    </section>
  );
}
