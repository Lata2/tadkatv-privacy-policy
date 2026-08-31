'use client';

import { useState, type FormEvent } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!name.trim() || !emailOk || !message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">
          <span className="dot"></span> We&apos;d love to hear from you
        </span>
        <h1 className="page-title">Contact Us</h1>
        <p className="page-updated">
          Support, billing, press &amp; partnerships — one place to reach the
          TadkaTV team.
        </p>
      </div>

      <div className="legal-grid">
        <nav className="toc">
          <h5>On this page</h5>
          <ol>
            <li>
              <a href="#reach">Ways to reach us</a>
            </li>
            <li>
              <a href="#form">Send a message</a>
            </li>
            <li>
              <a href="#hours">Response times</a>
            </li>
          </ol>
        </nav>

        <article className="content-card">
          <section id="reach">
            <h2>
              <span className="num">01</span> Ways to Reach Us
            </h2>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="t">General Support</div>
                <div className="v">
                  <a href="mailto:support@dharvix.com">
                    support@dharvix.com
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="t">Billing &amp; Refunds</div>
                <div className="v">
                  <a href="mailto:noreply@dharvix.com">
                    noreply@dharvix.com
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="t">Press &amp; Partnerships</div>
                <div className="v">
                  <a href="mailto:noreply@dharvix.com">
                    noreply@dharvix.com
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="t">Privacy &amp; Data Requests</div>
                <div className="v">
                  <a href="mailto:noreply@dharvix.com">
                    noreply@dharvix.com
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <div className="t">Phone</div>
                <div className="v placeholder">+91-7566634500</div>
              </div>
              <div className="contact-card">
                <div className="t">Registered Address</div>
                <div className="v placeholder">
                  At- Managobindpur, Near Govt Hospital, Daleiput, Khurda,
                  Odisha – 752056, India.
                </div>
              </div>
            </div>
          </section>

          <section id="form">
            <h2>
              <span className="num">02</span> Send a Message
            </h2>
            <p>
              Fill in the form and our team will get back to you at the email
              address you provide.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-row stack">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                  rows={5}
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
            {status !== 'idle' && (
              <div
                className="msg show"
                style={{ color: status === 'error' ? '#ff4d6d' : '#ffb03a' }}
              >
                {status === 'error'
                  ? '⚠️ Please fill in your name, a valid email, and a message.'
                  : "🎉 Thanks! We've received your message and will reply soon."}
              </div>
            )}
          </section>

          <section id="hours">
            <h2>
              <span className="num">03</span> Response Times
            </h2>
            <p>
              Our support team typically replies within{' '}
              <strong>24–48 hours</strong> on business days. Billing and
              account-access issues are prioritised — please include your
              account email so we can find you faster.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
