import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Your Account — TadkaTV',
  description:
    'How to request deletion of your TadkaTV account and associated personal data.',
};

export default function DeleteAccountPage() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">
          <span className="dot"></span> Account
        </span>
        <h1 className="page-title">Delete Your Account</h1>
        <p className="page-updated">Last updated: June 22, 2026</p>
      </div>

      <div className="legal-grid">
        <nav className="toc">
          <h5>On this page</h5>
          <ol>
            <li>
              <a href="#request">How to Request Deletion</a>
            </li>
            <li>
              <a href="#include">Information to Include</a>
            </li>
            <li>
              <a href="#process">What Happens Next</a>
            </li>
            <li>
              <a href="#retention">Data Retention</a>
            </li>
          </ol>
        </nav>

        <article className="content-card">
          <section id="request">
            <h2>
              <span className="num">01</span> How to Request Deletion
            </h2>
            <p>
              To request deletion of your TV account and associated personal
              data, send an email to{' '}
              <a href="mailto:support@dharvix.com?subject=Account%20Deletion%20Request">
                support@dharvix.com
              </a>{' '}
              with the subject line{' '}
              <strong>&quot;Account Deletion Request&quot;</strong>.
            </p>
          </section>

          <section id="include">
            <h2>
              <span className="num">02</span> Information to Include
            </h2>
            <p>
              Please include the following in your email so we can verify your
              identity:
            </p>
            <ul>
              <li>Registered mobile number</li>
              <li>Registered email address (if any)</li>
            </ul>
          </section>

          <section id="process">
            <h2>
              <span className="num">03</span> What Happens Next
            </h2>
            <p>After verification, we will:</p>
            <ol className="plain">
              <li>Delete your account.</li>
              <li>
                Delete your personal information associated with the account.
              </li>
              <li>Complete the deletion within 7 working days.</li>
            </ol>
          </section>

          <section id="retention">
            <h2>
              <span className="num">04</span> Data Retention
            </h2>
            <p>
              Some information, such as transaction records, may be retained for
              the period required by applicable laws.
            </p>

            <div className="contact-grid">
              <div className="contact-card">
                <div className="t">Email</div>
                <div className="v">
                  <a href="mailto:support@dharvix.com?subject=Account%20Deletion%20Request">
                    support@dharvix.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
