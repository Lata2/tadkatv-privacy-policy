import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions — MaujiTV',
  description:
    "Read the Terms & Conditions for using MaujiTV's streaming service.",
};

export default function TermsPage() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">
          <span className="dot"></span> Legal
        </span>
        <h1 className="page-title">Terms &amp; Conditions</h1>
        <p className="page-updated">Last updated: June 22, 2026</p>
      </div>

      <div className="legal-grid">
        <nav className="toc">
          <h5>On this page</h5>
          <ol>
            <li>
              <a href="#acceptance">Acceptance of These Terms</a>
            </li>
            <li>
              <a href="#about">About  MaujiTV</a>
            </li>
            <li>
              <a href="#eligibility">Eligibility &amp; Your Account</a>
            </li>
            <li>
              <a href="#billing">Subscriptions, Billing &amp; Free Trials</a>
            </li>
            <li>
              <a href="#acceptable-use">Acceptable Use</a>
            </li>
            <li>
              <a href="#ip">Content &amp; Intellectual Property</a>
            </li>
            <li>
              <a href="#availability">Devices &amp; Availability</a>
            </li>
            <li>
              <a href="#third-party">Third-Party Services &amp; Links</a>
            </li>
            <li>
              <a href="#liability">Disclaimers &amp; Limitation of Liability</a>
            </li>
            <li>
              <a href="#termination">Termination &amp; Suspension</a>
            </li>
            <li>
              <a href="#changes">Changes to These Terms</a>
            </li>
            <li>
              <a href="#law">Governing Law &amp; Disputes</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ol>
        </nav>

        <article className="content-card">
          <section id="acceptance">
            <h2>
              <span className="num">01</span> Acceptance of These Terms
            </h2>
            <p>
              By creating an account or using MaujiTV, you agree to these Terms
              & Conditions. If you do not agree, please do not use the app
            </p>
          </section>

          <section id="about">
            <h2>
              <span className="num">02</span> The Service
            </h2>
            <p>
              MaujiTV is a subscription video streaming service offering movies
              and series across multiple profiles, including a Kids Mode with
              age-appropriate content.
            </p>
          </section>

          <section id="eligibility">
            <h2>
              <span className="num">03</span> Subscriptions & Billing
            </h2>
            <p>
              Paid plans renew automatically at the end of each billing cycle
              unless cancelled beforehand. Prices, plan features, and supported
              devices are shown in-app before you subscribe.
            </p>
            <p>
              You&apos;re responsible for keeping your account credentials
              confidential and for all activity that happens under your account.
              Let us know right away at{' '}
              <a href="mailto:support@dharvix.com">support@dharvix.com</a> if
              you suspect unauthorised use.
            </p>
          </section>

          <section id="billing">
            <h2>
              <span className="num">04</span> Accounts & Profiles
            </h2>
            <p>
              You are responsible for keeping your login credentials and any
              profiles created under your account secure. Content shown under a
              Kids profile is restricted to age-appropriate titles.
            </p>
          </section>

          <section id="acceptable-use">
            <h2>
              <span className="num">05</span> Content & Usage Rights
            </h2>
            <p>
              A subscription grants you a personal, non-transferable license to
              stream content within the app for your own viewing. Downloading,
              copying, or redistributing content outside the app is not
              permitted.
            </p>
          </section>

          <section id="ip">
            <h2>
              <span className="num">06</span> Acceptable Use
            </h2>
            <p>
              You agree not to misuse the service — including attempting to
              bypass content protection, share login credentials beyond your
              plan&apos;s screen limit, or access the service through
              unauthorized means
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable
              licence to access and stream content for personal entertainment,
              subject to these Terms. No other rights are granted. See our{' '}
              <a href="/copyright-policy">Copyright Policy</a> for how we handle
              infringement claims.
            </p>
          </section>

          <section id="availability">
            <h2>
              <span className="num">07</span> Termination
            </h2>
            <p>
              We may suspend or terminate accounts that violate these terms. You
              may stop using the service and cancel your subscription at any
              time from the app.
            </p>
          </section>

          <section id="third-party">
            <h2>
              <span className="num">08</span> Limitation of Liability
            </h2>
            <p>
              The service is provided as it is. To the extent permitted by law,
              MaujiTV is not liable for indirect or incidental damages arising
              from use of the app.
            </p>
          </section>

          <section id="liability">
            <h2>
              <span className="num">09</span> Governing Law
            </h2>
            <p>These terms are governed by the laws of India.</p>
            <p>
              Nothing in these Terms limits liability that cannot be excluded
              under applicable law, such as liability for fraud or gross
              negligence.
            </p>
          </section>

          <section id="termination">
            <h2>
              <span className="num">10</span> Contact
            </h2>
            <p>
              Questions about these terms can be sent to support@dharvix.com.
            </p>
          </section>

          <section id="changes">
            <h2>
              <span className="num">11</span> Changes to These Terms
            </h2>
            <p>
              We may update these Terms occasionally to reflect changes to the
              Service or legal requirements. We&apos;ll post the revised Terms
              here with an updated &quot;Last updated&quot; date, and where
              changes are material, we&apos;ll let you know in advance through
              the app or by email.
            </p>
          </section>

          <section id="law">
            <h2>
              <span className="num">12</span> Governing Law &amp; Disputes
            </h2>
            <p>
              These Terms are governed by the laws of{' '}
              <strong>[your governing jurisdiction]</strong>, without regard to
              conflict-of-law principles. Any disputes will be subject to the
              courts of <strong>[your jurisdiction/city]</strong>, unless
              applicable consumer-protection law gives you the right to bring a
              claim elsewhere.
            </p>
          </section>

          <section id="contact">
            <h2>
              <span className="num">13</span> Contact Us
            </h2>
            <p>
              Questions about these Terms? Reach us at{' '}
              <a href="mailto:support@dharvix.com">support@dharvix.com</a> or
              visit our <a href="/contact">Contact Us</a> page.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
