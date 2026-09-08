import SiteChrome from "../../../components/SiteChrome";

export const metadata = {
  title: "Privacy Policy — Barmaja",
  description: "How Barmaja collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <SiteChrome lang="en" altHref="/privacidad">
      <div className="legal-content">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: September 8, 2026</p>

        <p>
          At Barmaja we take the privacy of visitors, people who browse the weekly products, create an account, or
          contact us seriously. This policy explains what data we collect, what we use it for, and what rights you
          have over it.
        </p>

        <h2>1. Data controller</h2>
        <p>
          Barmaja is responsible for the data collected through this site. Contact:{" "}
          <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>

        <h2>2. What data we collect</h2>
        <p>
          We collect the data you voluntarily give us: through the contact form (name, email, and message), and when
          you create an account (email and password). If you subscribe to the premium plan, Stripe processes the
          payment and tells us your subscription status (active, cancelled); we never see or store your card number.
        </p>

        <h2>3. What we use your data for</h2>
        <p>
          We use your email and password to manage access to your account, and your subscription status to know what
          content to show you. We use contact form data solely to answer your inquiry. We don't use your data for
          advertising or sell it to third parties.
        </p>

        <h2>4. Legal basis</h2>
        <p>
          We process your data based on contract performance (giving you access to your account and to content
          according to your plan) and your explicit consent on the contact form.
        </p>

        <h2>5. Cookies and local storage</h2>
        <p>
          This site doesn't use tracking or advertising cookies. We use strictly necessary technical cookies to keep
          you signed in (managed by Supabase, our authentication provider), and browser local storage to remember your
          light/dark mode preference.
        </p>

        <h2>6. Who we share your data with</h2>
        <p>We don't share your personal data with third parties for commercial purposes. We use these providers to run the service:</p>
        <ul>
          <li>
            <strong>Supabase</strong> (authentication and database): stores your account and plan status.
          </li>
          <li>
            <strong>Stripe</strong> (payments): processes the premium subscription charge; see their policy at{" "}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener">
              stripe.com/privacy
            </a>
            .
          </li>
          <li>
            <strong>Vercel Analytics</strong>: measures visits in aggregate, anonymized form, without cookies. More at{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">
              vercel.com/legal/privacy-policy
            </a>
            .
          </li>
        </ul>
        <p>
          The products on this site include search links to AliExpress and Alibaba. Clicking them takes you away from
          our site to browse their platform, subject to their own privacy policy.
        </p>

        <h2>7. How long we keep your data</h2>
        <p>We keep your account data for as long as it exists, and contact data only for as long as necessary to handle your inquiry, unless we're legally required to keep it longer.</p>

        <h2>8. Your rights</h2>
        <p>
          You can ask us at any time to access, correct, or delete your data (including deleting your account), or
          object to its processing, by writing to <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>

        <h2>9. Security</h2>
        <p>We apply reasonable measures to protect your data against unauthorized access, loss, or misuse. Passwords are stored encrypted by Supabase; we never see them in plain text.</p>

        <h2>10. Changes to this policy</h2>
        <p>We may update this policy occasionally. Any changes will be posted on this same page along with the updated date.</p>

        <h2>11. Contact</h2>
        <p>
          For any questions about this policy, write to <a href="mailto:pablojaquevfx@gmail.com">pablojaquevfx@gmail.com</a>.
        </p>
      </div>
    </SiteChrome>
  );
}
