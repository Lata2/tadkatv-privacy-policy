import Image from 'next/image';
import Link from 'next/link';

export default function LegalFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <span className="mark mark-img">
                <Image
                  src="/assets/logo.png"
                  alt="MaujiTV logo"
                  width={40}
                  height={40}
                />
              </span>
              MaujiTV
            </div>
            <p>
              Your next favourite OTT destination — shows, movies and originals
              built for binge, on Web, Android &amp; iOS.
            </p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/community-guidelines">Community Guidelines</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li>
                <Link href="/terms">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/refund-policy">
                  Refund &amp; Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/copyright-policy">Copyright Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="pwr">
            Powered by <b>Dharvix</b>
          </div>
          <div className="copy">© 2026 MaujiTV. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
