'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="ftv-page">
      <div className="glow one"></div>
      <div className="glow two"></div>
      <div className="glow three"></div>
      <div className="grain"></div>

      <div className="shell">
        <header>
          <div className="brand">
            <span className="mark mark-img">
              <Image
                src="/assets/logo.png"
                alt="TadkaTV logo"
                width={32}
                height={32}
                priority
              />
            </span>
            TadkaTV
          </div>
          <span className="pill">OTT Streaming</span>
        </header>

        <main>
          {/* LEFT: copy */}
          <section className="copy-col">
            <span className="eyebrow">
              <span className="dot"></span> DOWNLOAD NOW
            </span>

            <h1>
              <span className="line">
                <span>Your everyday</span>
              </span>
              <span className="line">
                <span className="accent">Mood, on screen.</span>
              </span>
            </h1>

            <p className="lead">
              TadkaTV is an all-new <strong>OTT streaming platform</strong>{" — "}
              shows, movies and originals built for binge. Watch on the big
              screen or in your pocket. We&apos;re putting the final touches on
              something worth the wait.
            </p>

            <div className="platforms">
              <div className="plat">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#6c5ce7"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2.5" />
                  <path d="M11 18h2" />
                </svg>
                <div className="txt">
                  <div className="t">Android</div>
                  <div className="s">Play Store</div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT: device showcase */}
          <section className="showcase">
            <div className="floor"></div>

            {/* Laptop */}
            <div className="laptop">
              <div className="laptop-screen">
                <div className="app">
                  <div className="app-nav">
                    <span className="logo">
                      Vibe<b>Play</b>
                    </span>
                    <span className="links">
                      <i></i>
                      <i></i>
                      <i></i>
                    </span>
                    <span className="av"></span>
                  </div>
                  <div className="feature">
                    <div className="ftxt">
                      <div className="tag">TadkaTV Original</div>
                      <div className="title">Midnight City</div>
                      <div className="btns">
                        <span className="play">Play</span>
                        <span className="add">+</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <h4>Trending Now</h4>
                    <div className="posters">
                      <div className="poster p1"></div>
                      <div className="poster p2"></div>
                      <div className="poster p3"></div>
                      <div className="poster p4"></div>
                      <div className="poster p5"></div>
                      <div className="poster p6"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="laptop-base"></div>
            </div>

            {/* Phone */}
            <div className="phone">
              <div className="phone-body">
                <div className="phone-screen">
                  <div className="notch"></div>
                  <div className="app">
                    <div className="app-nav">
                      <span className="logo">
                        Vibe<b>Play</b>
                      </span>
                      <span
                        className="av"
                        style={{ marginLeft: 'auto' }}
                      ></span>
                    </div>
                    <div className="feature">
                      <div className="ftxt">
                        <div className="tag">TadkaTV Original</div>
                        <div className="title">Neon Nights</div>
                        <div className="btns">
                          <span className="play">Play</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <h4>For You</h4>
                      <div className="posters">
                        <div className="poster p3"></div>
                        <div className="poster p5"></div>
                        <div className="poster p6"></div>
                      </div>
                    </div>
                    <div className="row">
                      <h4>Movies</h4>
                      <div className="posters">
                        <div className="poster p2"></div>
                        <div className="poster p1"></div>
                        <div className="poster p4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <div className="ticker">
        <div className="track">
          <span>Stream Anywhere</span>
          <span>Shows &amp; Movies</span>
          <span>Originals</span>
          <span>Web · Android · iOS</span>
          <span>Coming Soon</span>
          <span>Stream Anywhere</span>
          <span>Shows &amp; Movies</span>
          <span>Originals</span>
          <span>Web · Android · iOS</span>
          <span>Coming Soon</span>
        </div>
      </div>

      <footer>
        <div className="footer-top">
          {/* LEFT: Brand */}
          <div className="footer-brand">
            <div className="brand-row">
              <span className="mark mark-img">
                <Image
                  src="/assets/logo.png"
                  alt="TadkaTV logo"
                  width={28}
                  height={28}
                />
              </span>
              TadkaTV
            </div>
            <p className="tagline">
              Your everyday entertainment, anytime anywhere — on Android{' '}
            </p>
            <span className="badge">
              <span className="dot"></span> DOWNLOAD NOW
            </span>
          </div>

          {/* RIGHT: Contact cards */}
          <div className="footer-contact">
            <div className="fc-card">
              <span className="fc-label">Email</span>
              <span className="fc-value">
                <a href="mailto:support@dharvix.com">support@dharvix.com</a>
              </span>
            </div>
          </div>
        </div>

        <nav className="footer-links">
          <a href="/terms">Terms &amp; Conditions</a>
          <span className="sep">|</span>
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="sep">|</span>
          <a href="/cookie-policy">Cookie Policy</a>
          <span className="sep">|</span>
          <a href="/refund-policy">Refund &amp; Cancellation Policy</a>
          <span className="sep">|</span>
          <a href="/copyright-policy">Copyright Policy</a>
          <span className="sep">|</span>
          <a href="/community-guidelines">Community Guidelines</a>
          <span className="sep">|</span>
          <a href="/delete-account">Delete Account</a>
          <span className="sep">|</span>
          <a href="/contact">Contact Us</a>
        </nav>
        <div className="pwr">
          Powered by <b>Dharvix</b>
        </div>
        <div className="copy">© 2026 TadkaTV. All rights reserved.</div>
      </footer>
    </div>
  );
}
