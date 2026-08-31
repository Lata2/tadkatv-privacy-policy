import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy — MaujiTV",
  description: "Understand how billing, cancellations and refunds work on MaujiTV.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">
          <span className="dot"></span> Legal
        </span>
        <h1 className="page-title">Refund &amp; Cancellation Policy</h1>
        <p className="page-updated">Last updated: June 22, 2026</p>
      </div>

      <div className="legal-grid">
        <nav className="toc">
          <h5>On this page</h5>
          <ol>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#billing-cycle">Subscription Plans &amp; Billing Cycle</a></li>
            <li><a href="#trials">Free Trials</a></li>
            <li><a href="#cancel">Cancelling Your Subscription</a></li>
            <li><a href="#eligibility">Refund Eligibility</a></li>
            <li><a href="#process">How Refunds Are Processed</a></li>
            <li><a href="#failed-payments">Failed Payments &amp; Auto-Renewal</a></li>
            <li><a href="#price-changes">Changes to Plans &amp; Pricing</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ol>
        </nav>

        <article className="content-card">
          <section id="overview">
            <h2><span className="num">01</span> Cancelling Your Subscription</h2>
            <p>
              You can cancel auto-renewal at any time from Manage Subscription. Cancelling stops future billing — you keep access to your current plan until the end of the billing period you already paid for.
            </p>
          </section>

          <section id="billing-cycle">
            <h2><span className="num">02</span> Refund Eligibility</h2>
            <p>
              Subscription fees are generally non-refundable once a billing period has started, except where required by law or at MaujiTV’s discretion for genuine billing errors.
            </p>
          </section>

          <section id="trials">
            <h2><span className="num">03</span> Failed or Duplicate Payments</h2>
            <p>
              If you were charged due to a duplicate transaction or a verified technical error, the duplicate amount will be refunded to your original payment method.
            </p>
          </section>

          <section id="cancel">
            <h2><span className="num">04</span> Trials</h2>
            <p>
              If a plan includes a trial period, billing for the paid plan begins automatically when the trial ends unless you cancel before then.
            </p>
          </section>

          <section id="eligibility">
            <h2><span className="num">05</span>  How to Request a Refund</h2>
            <p>
             Email support@dharvix.com with your registered email/phone and payment details. We aim to respond within a few business days.
            </p>
          </section>

          <section id="process">
            <h2><span className="num">06</span> How Refunds Are Processed</h2>
            <p>
              To request a refund, contact{" "}
              <a href="mailto:support@dharvix.com">support@dharvix.com</a> with
              your account email and the reason for the request. Approved refunds
              are returned to your original payment method and may take a few
              business days to appear, depending on your bank or payment provider.
            </p>
          </section>

          <section id="failed-payments">
            <h2><span className="num">07</span> Failed Payments &amp; Auto-Renewal</h2>
            <p>
              If a renewal payment fails, we&apos;ll retry it and may temporarily
              restrict access until payment succeeds. If payment continues to fail
              after a reasonable number of attempts, your subscription may be
              paused or cancelled automatically.
            </p>
          </section>

          <section id="price-changes">
            <h2><span className="num">08</span> Changes to Plans &amp; Pricing</h2>
            <p>
              We may change plan pricing or features over time. If a change
              affects your current plan, we&apos;ll notify you in advance so you
              can decide whether to continue, switch plans, or cancel before the
              new price applies.
            </p>
          </section>

          <section id="contact">
            <h2><span className="num">09</span> Contact Us</h2>
            <p>
              Billing questions? Email{" "}
              <a href="mailto:support@dharvix.com">support@dharvix.com</a> or
              visit <a href="/contact">Contact Us</a>.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}