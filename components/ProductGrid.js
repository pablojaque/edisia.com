import Link from "next/link";
import { products, weekLabel } from "../data/products";

const COPY = {
  es: {
    heading: "Productos ganadores de esta semana",
    sub: "Seleccionados a partir de tendencias reales en TikTok y en el mercado angloparlante. Se actualiza cada semana.",
    aliexpress: "Ver en AliExpress",
    alibaba: "Ver en Alibaba",
    disclaimer:
      'Los enlaces de proveedores llevan a búsquedas externas en AliExpress y Alibaba. No tenemos relación comercial con estas plataformas ni con los proveedores listados, y no participamos en las compras: verifica siempre la calidad y reputación del proveedor antes de comprar. Más detalle en el ',
    disclaimerLinkLabel: "aviso de afiliación y proveedores externos",
    disclaimerHref: "/reembolsos",
    placeholderText: "Vuelve la semana que viene por más productos ganadores.",
    freeNote: "Los 3 primeros productos son gratis. Hazte premium por 9€/mes para ver los 8 completos cada semana.",
    lockedCta: "Desbloquear con premium",
  },
  en: {
    heading: "This week's winning products",
    sub: "Picked from real TikTok and English-speaking market trends. Updated every week.",
    aliexpress: "View on AliExpress",
    alibaba: "View on Alibaba",
    disclaimer:
      "Supplier links go to external searches on AliExpress and Alibaba. We have no commercial relationship with these platforms or the suppliers listed, and we are not involved in any purchase: always verify a supplier's quality and reputation before buying. See our ",
    disclaimerLinkLabel: "affiliate & external suppliers disclosure",
    disclaimerHref: "/en/refund",
    placeholderText: "Check back next week for more winning products.",
    freeNote: "The first 3 products are free. Go premium for €9/month to see all 8 every week.",
    lockedCta: "Unlock with premium",
  },
};

function ProductIcon() {
  return (
    <span className="product-icon" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M3 17l6-6 4 4 8-8" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h6v6" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function ProductGrid({ lang, plan }) {
  const t = COPY[lang];
  const isPremium = plan === "premium";
  const unlockedProducts = isPremium ? products : products.slice(0, 3);
  const blockedProducts = isPremium ? [] : products.slice(3);
  const aliexpressBase = "https://www.aliexpress.com/wholesale?SearchText=";
  const alibabaBase = "https://www.alibaba.com/trade/search?SearchText=";

  return (
    <section id={lang === "es" ? "productos" : "products"}>
      <div className="section-inner">
        <div className="section-heading">
          <span className="week-pill">{weekLabel[lang]}</span>
          <h2>{t.heading}</h2>
          <p>{t.sub}</p>
          {!isPremium && <p className="products-free-note">{t.freeNote}</p>}
        </div>
        <div className="products-grid">
          {unlockedProducts.map((product) => {
            const terms = product.query.split(" ").join("+");
            return (
              <article className="product-card" key={product.id}>
                <div className="product-card-top">
                  <ProductIcon />
                  <span className="product-tag">{product.tag[lang]}</span>
                </div>
                <h3>{product.name[lang]}</h3>
                <p className="product-signal">{product.signal[lang]}</p>
                <p>{product.reason[lang]}</p>
                <div className="product-actions">
                  <a className="button button-sm" href={`${aliexpressBase}${terms}`} target="_blank" rel="noopener">
                    {t.aliexpress}
                  </a>
                  <a className="button button-sm secondary" href={`${alibabaBase}${terms}`} target="_blank" rel="noopener">
                    {t.alibaba}
                  </a>
                </div>
              </article>
            );
          })}

          {blockedProducts.map((product) => (
            <article className="product-card product-card-blocked" key={product.id}>
              <div className="product-card-blur">
                <div className="product-card-top">
                  <ProductIcon />
                  <span className="product-tag">{product.tag[lang]}</span>
                </div>
                <h3>{product.name[lang]}</h3>
                <p className="product-signal">{product.signal[lang]}</p>
                <p>{product.reason[lang]}</p>
                <div className="product-actions">
                  <span className="button button-sm">{t.aliexpress}</span>
                  <span className="button button-sm secondary">{t.alibaba}</span>
                </div>
              </div>
              <div className="product-card-blocked-overlay">
                <span className="product-card-blocked-lock" aria-hidden="true">
                  🔒
                </span>
                <Link className="button button-sm" href="/precios">
                  {t.lockedCta}
                </Link>
              </div>
            </article>
          ))}

          {isPremium && (
            <article className="product-card product-card-placeholder">
              <span className="product-placeholder-icon" aria-hidden="true">
                👀
              </span>
              <p>{t.placeholderText}</p>
            </article>
          )}
        </div>
        <div className="legal-disclaimer">
          <p>
            {t.disclaimer}
            <Link href={t.disclaimerHref}>{t.disclaimerLinkLabel}</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
