import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — TadkaTV",
  description: "Learn how TadkaTV uses cookies and how to manage your preferences.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">
          <span className="dot"></span> Legal
        </span>
        <h1 className="page-title">Cookie Policy</h1>
        <p className="page-updated">Last updated: June 22, 2026</p>
      </div>

      <div className="legal-grid">
        <nav className="toc">
          <h5>On this page</h5>
          <ol>
            <li><a href="#what">What Are Cookies</a></li>
            <li><a href="#how">How We Use Cookies</a></li>
            <li><a href="#types">Types of Cookies We Use</a></li>
            <li><a href="#third-party">Third-Party Cookies</a></li>
            <li><a href="#manage">Managing Your Cookie Preferences</a></li>
            <li><a href="#changes">Changes to This Policy</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ol>
        </nav>

        <article className="content-card">
          <section id="what">
            <h2><span className="num">01</span> What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a
              website or use an app. They help the Service remember who you are,
              keep you signed in, and understand how the app is used.
            </p>
          </section>

          <section id="how">
            <h2><span className="num">02</span> How We Use Cookies</h2>
            <p>
              We use cookies and similar technologies (such as local storage and
              SDK identifiers in our mobile apps) to run core features of the
              Service, remember your preferences, measure performance, and — where
              you&apos;ve consented — personalise content and measure marketing
              effectiveness.
            </p>
          </section>

          <section id="types">
            <h2><span className="num">03</span> Types of Cookies We Use</h2>
            <p>We group cookies into the following categories:</p>
            <ul>
              <li>
                <strong>Essential</strong> — required for sign-in, security and
                basic playback. The Service won&apos;t work properly without
                these, so they can&apos;t be turned off.
              </li>
              <li>
                <strong>Performance &amp; analytics</strong> — help us understand
                how people use the Service (pages visited, errors encountered) so
                we can improve it.
              </li>
              <li>
                <strong>Functional</strong> — remember preferences like language,
                subtitle settings and playback position.
              </li>
              <li>
                <strong>Advertising/marketing</strong> — used, where applicable, to
                measure campaign performance and avoid showing you irrelevant
                promotions.
              </li>
            </ul>
          </section>

          <section id="third-party">
            <h2><span className="num">04</span> Third-Party Cookies</h2>
            <p>
              Some cookies are set by trusted third parties who provide analytics,
              crash reporting or payment services on our behalf. These providers
              only use the information for the purposes we&apos;ve agreed with
              them.
            </p>
          </section>

          <section id="manage">
            <h2><span className="num">05</span> Managing Your Cookie Preferences</h2>
            <p>
              You can usually control or delete cookies through your browser
              settings, and manage analytics/advertising identifiers through your
              device&apos;s privacy settings (for example, &quot;Limit Ad
              Tracking&quot; or &quot;Opt out of Ads Personalization&quot;).
              Blocking essential cookies may prevent parts of the Service — like
              staying signed in — from working.
            </p>
          </section>

          <section id="changes">
            <h2><span className="num">06</span> Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy as our use of cookies changes.
              Check back here for the latest version; the date at the top of the
              page reflects the most recent update.
            </p>
          </section>

          <section id="contact">
            <h2><span className="num">07</span> Contact Us</h2>
            <p>
              Questions about cookies? Email{" "}
              <a href="mailto:support@dharvix.com">support@dharvix.com</a> or
              visit <a href="/contact">Contact Us</a>.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}