'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Products', href: '/#products' },
  { label: 'About', href: '/#about' },
  { label: 'Clients', href: '/#clients' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${scrolled || !transparent ? styles.navbarSolid : ''}`}
      id="navbar"
    >
      {/* Logo */}
      <Link href="/" className={styles.logoLink} aria-label="Pratiksha Technologies Home">
        <Image
          src="/logo.png"
          alt="Pratiksha Technologies — We Build Panels With Emotions"
          width={120}
          height={52}
          priority
          className={styles.logoImg}
          style={{ objectFit: 'contain' }}
        />
      </Link>

      {/* Desktop nav links */}
      <ul className={styles.navLinks}>
        {NAV_LINKS.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/#contact" className={styles.navCta} id="nav-get-quote">
            Get Quote
          </Link>
        </li>
      </ul>

      {/* ISO badge — right side of navbar (not overlapping) */}
      <div className={styles.isoBadge} aria-label="ISO 9001:2015 Certified">
        <span className={styles.isoDot} />
        <span>ISO 9001:2015</span>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/#contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Get Quote
        </Link>
      </div>
    </nav>
  );
}
