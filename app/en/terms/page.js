import SiteChrome from "../../../components/SiteChrome";

export const metadata = {
  title: "Terms & Conditions — Barmaja",
  description: "Terms and conditions for using Barmaja's website and premium subscription.",
};

export default function TermsPage() {
  return (
    <SiteChrome lang="en" altHref="/terminos">
      <div className="legal-content">
        <h1>Terms &amp; Conditions</h1>
        <p className="updated">Last updated: September 8, 2026</p>

        <p>By using this site, creating an account, or subscribing to the premium plan, you agree to the following terms.</p>

        <h2>1. Who we are</h2>
        <p>
          Barmaja publishes a weekly, informational selection of products gaining traction on TikTok and in the
          English-speaking market, along with search links to suppliers on external platforms such as AliExpress and
          Alibaba. With a free account you can see 3 of the week's products; with the premium subscription, all 8.
        </p>

        <h2>2. Service description</h2>
        <p>
          We don't sell products, handle orders, or ship anything, and we're not a party to any transaction between a
          user and a supplier. The weekly selection is based on public trend signals and is provided for informational
          purposes: we don't guarantee that a listed product will sell well in your specific case.
        </p>

        <h2>3. User accounts</h2>
        <p>
          Accessing products and the subscription requires creating an account with email and password. You're
          responsible for keeping your password confidential and for all activity under your account. You can ask us
          to delete your account at any time.
        </p>

        <h2>4. Premium subscription</h2>
        <p>
          The premium plan costs €9/month and renews automatically each month until you cancel. Payment is processed
          through Stripe; we never store your card details. You can cancel anytime from your account page: you'll keep
          premium access until the end of the period already paid for, with no further renewals. As this isn't a
          physical product or an immediately, irreversibly performed service, we don't refund periods already started,
          unless applicable law requires otherwise.
        </p>

        <h2>5. Use of the site</h2>
        <p>This site is informational and serves as a contact channel. It must not be used for illegal purposes or to attempt to compromise its security or functioning.</p>

        <h2>6. Links to external suppliers</h2>
        <p>
          The &quot;View on AliExpress&quot; and &quot;View on Alibaba&quot; buttons lead to a search on those
          platforms, not to a specific supplier vetted by us. We have no commercial relationship, contract, or
          affiliation with TikTok, AliExpress, Alibaba, or any supplier appearing in those results. You decide which
          supplier to contact and are responsible for verifying their reliability, pricing, and terms before buying.
        </p>

        <h2>7. Requests and suggestions</h2>
        <p>
          If you write to us asking for help with a specific niche or product, we reply with options for informational
          purposes only. No sales contract is formed between you and Barmaja: any commercial agreement is directly
          between you and the supplier you choose.
        </p>

        <h2>8. Limitation of liability</h2>
        <p>
          To the extent permitted by law, Barmaja will not be liable for damages arising from purchasing, sourcing, or
          business decisions you make based on information published on this site, nor for the content, quality, or
          compliance of the external suppliers linked here.
        </p>

        <h2>9. Other third-party services</h2>
        <p>
          This site uses Supabase (accounts and database), Stripe (payments), and Vercel Analytics (aggregate,
          anonymized visits, no cookies). Aside from the supplier links described in section 6, it does not include
          any other third-party embedded content.
        </p>

        <h2>10. Changes</h2>
        <p>We may update these terms from time to time. The date of the last update appears at the top of this page.</p>

        <h2>11. Governing law</h2>
        <p>These terms are governed by the laws of Spain.</p>

        <h2>12. Contact</h2>
        <p>
          For questions about these terms, write to <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>
      </div>
    </SiteChrome>
  );
}
