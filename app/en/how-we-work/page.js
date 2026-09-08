import SiteChrome from "../../../components/SiteChrome";

export const metadata = {
  title: "How It Works — Barmaja",
  description: "How we find the winning TikTok products every week: where the signals come from and how we get you to suppliers.",
};

export default function HowWeWorkPage() {
  return (
    <SiteChrome lang="en" altHref="/como-trabajamos">
      <section className="hero">
        <h1>How we find the winning products</h1>
        <p>No magic, no crystal ball: we follow a simple, repeatable weekly process based on real signals from the English-speaking market.</p>
      </section>

      <section className="alt">
        <div className="section-inner">
          <div className="section-heading">
            <h2>The process, step by step</h2>
            <p>How we pick each week's products.</p>
          </div>
          <div className="process">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <div className="process-step-content">
                <h3>We monitor TikTok Creative Center</h3>
                <p>We check TikTok Ads' public trends section: products, hashtags, and ads with the most traction, filtered by US and UK.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <div className="process-step-content">
                <h3>We cross-check market signals</h3>
                <p>We compare against TikTok Shop, ecommerce trade press, and trend-tracking tools to confirm the interest is real and not a one-off spike.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <div className="process-step-content">
                <h3>We filter for real potential</h3>
                <p>We prioritize products that are easy to source on AliExpress or Alibaba, have good margin, and are easy to demo on video.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step-number">4</div>
              <div className="process-step-content">
                <h3>We publish and link suppliers</h3>
                <p>Every week we refresh the list with the winning products and direct supplier search links, no middlemen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-inner">
          <div className="section-heading">
            <h2>What you can expect</h2>
            <p>Three things we don't compromise on for any product we publish.</p>
          </div>
          <div className="services-grid">
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="#4f46e5" strokeWidth="1.8" />
              </svg>
              <h3>Honesty</h3>
              <p>We don't make up precise view or sales figures: when a number isn't confirmed, we present it as a signal, not a fact.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path
                  d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
                  stroke="#4f46e5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="4.2" stroke="#4f46e5" strokeWidth="1.8" />
              </svg>
              <h3>Weekly refresh</h3>
              <p>The product list is reviewed and refreshed every week; what you see today may change next week.</p>
            </article>
            <article className="service-card">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M4 5h16v10H8l-4 4V5z" stroke="#4f46e5" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              <h3>Zero direct selling</h3>
              <p>We don't sell products or handle shipping: we only connect you to the data and to suppliers. You make the purchase yourself, directly.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="section-inner">
          <div className="cta-band">
            <h2>Have a specific niche in mind?</h2>
            <p>Write to us and we'll help you find tailored options.</p>
            <a className="button" href="/en#contact">
              Tell us your case
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
