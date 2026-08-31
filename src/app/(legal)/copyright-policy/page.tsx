import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copyright Policy — TadkaTV",
  description: "How TadkaTV protects intellectual property and handles infringement notices.",
};

export default function CopyrightPolicyPage() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">
          <span className="dot"></span> Legal
        </span>
        <h1 className="page-title">Copyright Policy</h1>
        <p className="page-updated">Last updated: June 22, 2026</p>
      </div>

      <div className="legal-grid">
        <nav className="toc">
          <h5>On this page</h5>
          <ol>
            <li><a href="#commitment">Our Commitment to IP Rights</a></li>
            <li><a href="#ownership">Ownership of Content</a></li>
            <li><a href="#permitted-use">Permitted Use</a></li>
            <li><a href="#notices">Copyright Infringement Notices</a></li>
            <li><a href="#counter">Counter-Notification</a></li>
            <li><a href="#repeat">Repeat Infringers</a></li>
            <li><a href="#agent">Contact / Designated Agent</a></li>
          </ol>
        </nav>

        <article className="content-card">
          <section id="commitment">
            <h2><span className="num">01</span> Ownership</h2>
            <p>
              All movies, series, artwork, and branding available on TadkaTV are owned by TadkaTV, its content partners, or their respective licensors and are protected by copyright law.
            </p>
          </section>

          <section id="ownership">
            <h2><span className="num">02</span> Permitted Use</h2>
            <p>
              Your subscription gives you a license to stream content within the app for personal, non-commercial viewing only. No other rights are granted.
            </p>
          </section>

          <section id="permitted-use">
            <h2><span className="num">03</span> Prohibited Use</h2>
            <p>
             You may not record, download (outside in-app offline downloads, where offered), copy, distribute, publicly display, or create derivative works from TadkaTV content.
            </p>
          </section>

          <section id="notices">
            <h2><span className="num">04</span>Reporting Infringement</h2>
            <p>
             If you believe your copyrighted work has been used on TadkaTV without authorization, email support@dharvix.com with details of the content and your ownership claim.
            </p>
          </section>

          <section id="counter">
            <h2><span className="num">05</span> Repeat Infringement</h2>
            <p>
              Accounts found repeatedly violating this policy may be suspended or terminated.
            </p>
          </section>

          <section id="repeat">
            <h2><span className="num">06</span> Repeat Infringers</h2>
            <p>
              Accounts found to be repeat infringers — whether through
              unauthorised redistribution of content or repeated unfounded claims
              — may be suspended or terminated at our discretion.
            </p>
          </section>

          <section id="agent">
            <h2><span className="num">07</span> Contact / Designated Agent</h2>
            <p>Send copyright notices and counter-notifications to our designated agent:</p>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="t">Email</div>
                <div className="v">
                  <a href="mailto:support@dharvix.com">support@dharvix.com</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="t">Postal Address</div>
                <div className="v placeholder">
                  [Vibeads Digital Private Limited — registered office address]
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}