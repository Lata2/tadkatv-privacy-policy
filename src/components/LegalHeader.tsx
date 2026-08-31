import Image from 'next/image';
import Link from 'next/link';

export default function LegalHeader() {
  return (
    <header className="site-header">
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="brand">
          <span className="mark mark-img">
            <Image src="/assets/logo.png" alt="MaujiTV logo" width={40} height={40} priority />
          </span>
          <span style={{ color: 'var(--ink)' }}>
            MaujiTV
          </span>
        </div>
      </Link>
      <Link href="/" className="back-pill">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Back to home</span>
      </Link>
    </header>
  );
}