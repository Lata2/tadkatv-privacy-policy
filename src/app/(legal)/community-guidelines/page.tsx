import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Guidelines — TadkaTV',
  description:
    "The standards that keep TadkaTV's community welcoming for everyone.",
};

export default function CommunityGuidelinesPage() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">
          <span className="dot"></span> Community
        </span>
        <h1 className="page-title">Community Guidelines</h1>
        <p className="page-updated">Last updated: June 22, 2026</p>
      </div>

      <div className="legal-grid">
        <nav className="toc">
          <h5>On this page</h5>
          <ol>
            <li>
              <a href="#spirit">Our Community Spirit</a>
            </li>
            <li>
              <a href="#respect">Respect &amp; Conduct</a>
            </li>
            <li>
              <a href="#reviews">Reviews, Comments &amp; Ratings</a>
            </li>
            <li>
              <a href="#prohibited">Prohibited Content</a>
            </li>
            <li>
              <a href="#account-sharing">Account Sharing &amp; Security</a>
            </li>
            <li>
              <a href="#reporting">Reporting Violations</a>
            </li>
            <li>
              <a href="#enforcement">Enforcement &amp; Consequences</a>
            </li>
            <li>
              <a href="#updates">Updates to These Guidelines</a>
            </li>
          </ol>
        </nav>

        <article className="content-card">
          <section id="spirit">
            <h2>
              <span className="num">01</span> Purpose
            </h2>
            <p>
              These guidelines describe acceptable use of TadkaTV so the service
              stays safe and reliable for everyone.
            </p>
          </section>

          <section id="respect">
            <h2>
              <span className="num">02</span> Account & Profile Use
            </h2>
            <p>
              Accounts and profiles are meant for personal and household use
              within your plan’s screen limit. Please don’t share your login
              publicly or use it to circumvent subscription limits.
            </p>
          </section>

          <section id="reviews">
            <h2>
              <span className="num">03</span>Kids Mode
            </h2>
            <p>
              Kids profiles should only be used to access age-appropriate
              content. Parents and guardians are responsible for what’s set up
              under a Kids profile.
            </p>
          </section>

          <section id="prohibited">
            <h2>
              <span className="num">04</span> Prohibited Content
            </h2>
            <p>
              Don’t attempt to hack, scrape, reverse-engineer, or interfere with
              the app or its content protection, and don’t use the service for
              any unlawful purpose
            </p>
          </section>

          <section id="account-sharing">
            <h2>
              <span className="num">05</span> Reporting Issues
            </h2>
            <p>
              If you notice a bug, suspicious account activity, or content that
              seems out of place, let us know at support@dharvix.com.
            </p>
          </section>

          <section id="reporting">
            <h2>
              <span className="num">06</span> Enforcement
            </h2>
            <p>
              We may restrict or terminate access for accounts that violate
              these guidelines or our Terms & Conditions.
            </p>
          </section>

          <section id="enforcement">
            <h2>
              <span className="num">07</span> Enforcement &amp; Consequences
            </h2>
            <p>
              Depending on the severity and frequency of a violation, we may
              remove content, issue a warning, temporarily restrict community
              features, or suspend or terminate an account. We aim to be fair
              and consistent, and serious or repeated violations will result in
              stronger action.
            </p>
          </section>

          <section id="updates">
            <h2>
              <span className="num">08</span> Updates to These Guidelines
            </h2>
            <p>
              We may update these guidelines as our community features evolve.
              The date at the top of this page reflects the latest version —
              please check back occasionally.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
