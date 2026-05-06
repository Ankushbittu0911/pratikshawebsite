'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { ProductData } from '@/lib/products';
import styles from './ProductDetailPage.module.css';

export default function ProductDetailPage({ product }: { product: ProductData }) {
  const [activeImg, setActiveImg] = useState(0);
  const [formSent, setFormSent] = useState(false);

  return (
    <main className={styles.page}>

      {/* ══════════════════════════════════════
          HERO — split layout: text left, image right
          ══════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />

        {/* Left — text */}
        <div className={styles.heroText}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.bcLink}>Home</Link>
            <span className={styles.bcSep} aria-hidden>/</span>
            <Link href="/#products" className={styles.bcLink}>Products</Link>
            <span className={styles.bcSep} aria-hidden>/</span>
            <span className={styles.bcCurrent}>{product.shortName}</span>
          </nav>

          <div className={styles.eyebrow}>
            <span className={styles.eyebrowBar} />
            {product.tagline}
          </div>

          <h1 className={styles.heroTitle}>{product.name}</h1>
          <p className={styles.heroDesc}>{product.description}</p>

          {/* Quick spec pills */}
          <div className={styles.specPills}>
            {product.specs.slice(0, 3).map(s => (
              <div key={s.label} className={styles.specPill}>
                <span className={styles.specPillLabel}>{s.label}</span>
                <span className={styles.specPillValue}>{s.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroCtas}>
            <a href="#enquire" className={styles.ctaPrimary} id={`cta-quote-${product.slug}`}>
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link href="/#products" className={styles.ctaBack}>
              ← All Products
            </Link>
          </div>
        </div>

        {/* Right — image viewer */}
        <div className={styles.heroImgCol}>
          {/* Main image */}
          <div className={styles.mainImgWrap}>
            <Image
              src={product.images[activeImg]}
              alt={`${product.name} — view ${activeImg + 1}`}
              fill
              className={styles.mainImg}
              sizes="(max-width: 900px) 100vw, 55vw"
              priority
            />
            {/* Glow */}
            <div className={styles.imgGlow} aria-hidden />
          </div>

          {/* Thumbnail strip */}
          <div className={styles.thumbStrip}>
            {product.images.map((src, i) => (
              <button
                key={src}
                className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ''}`}
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={src}
                  alt={`${product.shortName} view ${i + 1}`}
                  fill
                  className={styles.thumbImg}
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DETAILS — features, specs, applications
          ══════════════════════════════════════ */}
      <section className={styles.details}>
        <div className={styles.detailsGrid}>

          {/* Features */}
          <div className={styles.detailCard}>
            <div className={styles.detailCardHeader}>
              <span className={styles.detailNum}>01</span>
              <h2 className={styles.detailTitle}>Key Features</h2>
            </div>
            <ul className={styles.featureList}>
              {product.features.map((f, i) => (
                <li key={f} className={styles.featureItem}>
                  <span className={styles.featureCheck} aria-hidden>
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div className={styles.detailCard}>
            <div className={styles.detailCardHeader}>
              <span className={styles.detailNum}>02</span>
              <h2 className={styles.detailTitle}>Technical Specifications</h2>
            </div>
            <div className={styles.specsTable}>
              {product.specs.map((s, i) => (
                <div key={s.label} className={`${styles.specRow} ${i % 2 === 0 ? styles.specRowAlt : ''}`}>
                  <span className={styles.specLabel}>{s.label}</span>
                  <span className={styles.specValue}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className={styles.detailCard}>
            <div className={styles.detailCardHeader}>
              <span className={styles.detailNum}>03</span>
              <h2 className={styles.detailTitle}>Applications</h2>
            </div>
            <div className={styles.appGrid}>
              {product.applications.map((a, i) => (
                <div key={a} className={styles.appCard}>
                  <span className={styles.appNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.appText}>{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery mini strip — remaining images */}
          <div className={styles.detailCard}>
            <div className={styles.detailCardHeader}>
              <span className={styles.detailNum}>04</span>
              <h2 className={styles.detailTitle}>Product Views</h2>
            </div>
            <div className={styles.miniGallery}>
              {product.images.map((src, i) => (
                <button
                  key={src}
                  className={`${styles.miniGalleryItem} ${i === activeImg ? styles.miniGalleryItemActive : ''}`}
                  onClick={() => { setActiveImg(i); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${product.shortName} view ${i + 1}`}
                    fill
                    className={styles.miniGalleryImg}
                    sizes="250px"
                  />
                  <div className={styles.miniGalleryOverlay}>
                    <span>View {i + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          ENQUIRE SECTION
          ══════════════════════════════════════ */}
      <section className={styles.enquire} id="enquire">
        <div className={styles.enquireInner}>
          <div className={styles.enquireText}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowBar} />
              Get In Touch
            </div>
            <h2 className={styles.enquireTitle}>
              Interested in the <br />
              <span className={styles.enquireTitleAccent}>{product.shortName}?</span>
            </h2>
            <p className={styles.enquireDesc}>
              Tell us your requirements — voltage, current, number of feeders, installation site.
              Our engineers will design a custom solution and respond within 24 hours.
            </p>
            <div className={styles.enquireStats}>
              <div className={styles.enquireStat}>
                <span className={styles.enquireStatVal}>24h</span>
                <span className={styles.enquireStatLabel}>Response Time</span>
              </div>
              <div className={styles.enquireStat}>
                <span className={styles.enquireStatVal}>Free</span>
                <span className={styles.enquireStatLabel}>Engineering Quote</span>
              </div>
              <div className={styles.enquireStat}>
                <span className={styles.enquireStatVal}>100%</span>
                <span className={styles.enquireStatLabel}>Custom Design</span>
              </div>
            </div>
          </div>

          <div className={styles.enquireForm}>
            {formSent ? (
              <div className={styles.formSuccess}>
                <div className={styles.formSuccessIcon}>
                  <svg viewBox="0 0 48 48" fill="none" aria-hidden>
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Enquiry Sent!</h3>
                <p>We&apos;ll respond within 24 hours with a custom quote.</p>
                <button onClick={() => setFormSent(false)} className={styles.formResetBtn}>Send Another</button>
              </div>
            ) : (
              <form
                className={styles.form}
                onSubmit={e => { e.preventDefault(); setFormSent(true); }}
                noValidate
              >
                <h3 className={styles.formTitle}>Request a Quote</h3>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor={`pname-${product.slug}`}>Full Name *</label>
                    <input id={`pname-${product.slug}`} type="text" required placeholder="Your name" className={styles.input}/>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor={`pcompany-${product.slug}`}>Company</label>
                    <input id={`pcompany-${product.slug}`} type="text" placeholder="Company name" className={styles.input}/>
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor={`pemail-${product.slug}`}>Email *</label>
                    <input id={`pemail-${product.slug}`} type="email" required placeholder="your@email.com" className={styles.input}/>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor={`pphone-${product.slug}`}>Phone</label>
                    <input id={`pphone-${product.slug}`} type="tel" placeholder="+91 XXXXX XXXXX" className={styles.input}/>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor={`preq-${product.slug}`}>
                    Specifications for {product.shortName}
                  </label>
                  <textarea
                    id={`preq-${product.slug}`}
                    rows={4}
                    placeholder={`E.g. voltage, current rating, number of feeders, installation location…`}
                    className={styles.textarea}
                  />
                </div>
                <button type="submit" className={styles.submitBtn} id={`submit-enquiry-${product.slug}`}>
                  Send Enquiry
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Other products row */}
      <div className={styles.backRow}>
        <Link href="/#products" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          View All Products
        </Link>
        <span className={styles.backTagline}>Pratiksha Technologies — We Build Panels With Emotions</span>
      </div>
    </main>
  );
}
