import SiteChrome from "../../components/SiteChrome";
import HeroWithModal from "../../components/HeroWithModal";
import ProductGrid from "../../components/ProductGrid";
import ContactForm from "../../components/ContactForm";
import { getSessionAndPlan } from "../../lib/getSessionAndPlan";

export const metadata = {
  title: "Barmaja — Weekly winning TikTok products for ecommerce",
  description:
    "Every week we analyze TikTok and the English-speaking market to find the products that are actually selling, with direct links to suppliers on AliExpress and Alibaba.",
};

export default async function HomePageEn() {
  const { plan } = await getSessionAndPlan();

  return (
    <SiteChrome lang="en" altHref="/">
      <HeroWithModal lang="en" productsHref="#products" />

      <section id="how-it-works" className="alt">
        <div className="section-inner">
          <div className="section-heading">
            <h2>How it works</h2>
            <p>A simple process, repeated every week.</p>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M4 5h16v10H8l-4 4V5z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 9h8M8 12h5" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <h3>1. We monitor</h3>
              <p>We check TikTok Creative Center and English-speaking market trends (US, UK) every week.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M9 12l2 2 4-4" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#4f46e5" strokeWidth="1.8" />
              </svg>
              <h3>2. We filter</h3>
              <p>Only products with real traction signals make the cut: views, confirmed sales, or fast creator adoption.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M8 6L2.5 12L8 18M16 6L21.5 12L16 18" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3>3. We connect you</h3>
              <p>Every product comes with direct links to AliExpress and Alibaba so you can reach suppliers without wasting time.</p>
            </article>
          </div>
        </div>
      </section>

      <ProductGrid lang="en" plan={plan} />

      <section id="about" className="alt">
        <div className="section-inner about">
          <h2>Who we are</h2>
          <p>
            Barmaja is a project run by a team of university programming students. Every week we track TikTok trends
            in the English-speaking market to save you hours of scrolling, and connect you to suppliers directly, with
            no middlemen.
          </p>
        </div>
      </section>

      <ContactForm lang="en" />
    </SiteChrome>
  );
}
