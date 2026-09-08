import SiteChrome from "../../../components/SiteChrome";

export const metadata = {
  title: "Affiliate & External Suppliers Disclosure — Barmaja",
  description: "What relationship Barmaja has with TikTok, AliExpress, Alibaba, and the suppliers linked on this site.",
};

export default function RefundPage() {
  return (
    <SiteChrome lang="en" altHref="/reembolsos">
      <div className="legal-content">
        <h1>Affiliate &amp; External Suppliers Disclosure</h1>
        <p className="updated">Last updated: September 8, 2026</p>

        <p>
          Barmaja doesn't sell products or handle payments, orders, or shipping for third parties (the only
          transaction we process is your own premium subscription, through Stripe). This page clearly explains what
          relationship we have with TikTok, AliExpress, Alibaba, and the suppliers linked from this week's products.
        </p>

        <h2>1. We are not TikTok, AliExpress, or Alibaba</h2>
        <p>
          Barmaja is not affiliated with, sponsored by, or endorsed by TikTok, ByteDance, AliExpress, Alibaba Group, or
          any supplier that may appear in those platforms' search results. All mentioned brands belong to their
          respective owners.
        </p>

        <h2>2. What the &quot;View on AliExpress / Alibaba&quot; links are</h2>
        <p>
          Each supplier button opens a keyword search on the corresponding platform, not the page of a specific
          supplier vetted by us. We do not audit, inspect, or guarantee any supplier appearing in those results.
        </p>

        <h2>3. How we choose the weekly products</h2>
        <p>
          Selection is based on public trend signals (TikTok Creative Center, TikTok Shop, and ecommerce trade press),
          described in more detail on our <a href="/en/how-we-work">How It Works</a> page. It's informational: it's
          not a guarantee that a product will sell in your store or that any given supplier is reliable.
        </p>

        <h2>4. Your responsibility when buying</h2>
        <p>
          Before contacting or paying any supplier found through these links, verify their reputation, terms, shipping
          times, and quality policies. Any purchase agreement, payment, or dispute is strictly between you and that
          supplier; Barmaja does not intervene or mediate in those transactions.
        </p>

        <h2>5. Possible affiliate links</h2>
        <p>
          If any of these links become affiliate links in the future (meaning we'd earn a commission on purchases made
          through them), we'll disclose that clearly next to the link and update this page with the date of the
          change.
        </p>

        <h2>6. Contact</h2>
        <p>
          Any questions about this disclosure, write to <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>

        <div className="legal-disclaimer">
          <p>This text is a base template and should be adapted with a legal professional according to applicable law, especially if paid affiliate links are added in the future.</p>
        </div>
      </div>
    </SiteChrome>
  );
}
