'use client';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import styles from './ProductsSection.module.css';

export default function ProductsSection() {
  return (
    <section id="products" className={styles.section}>
      {/* Section header */}
      <div className={styles.sectionHeader}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>Our Products</span>
          <span className={styles.eyebrowLine} />
        </div>
        <h2 className={styles.sectionTitle}>
          Industrial Panel <span className={styles.titleAccent}>Solutions</span>
        </h2>
        <p className={styles.sectionSub}>
          Nine specialized panel types — each precision-engineered for a specific industrial challenge.
        </p>
      </div>

      {/* Product grid — image cards */}
      <div className={styles.grid}>
        {PRODUCTS.map((product, i) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className={styles.card}
            id={`product-card-${product.slug}`}
          >
            {/* Panel image */}
            <div className={styles.cardImgWrap}>
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                className={styles.cardImg}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.cardImgOverlay} />
            </div>

            {/* Content */}
            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span className={styles.cardShortName}>{product.shortName}</span>
                <div className={styles.cardArrow} aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardName}>{product.name}</h3>
              <p className={styles.cardTagline}>{product.tagline}</p>
            </div>

            {/* Hover glow */}
            <div className={styles.cardGlow} aria-hidden />
          </Link>
        ))}
      </div>
    </section>
  );
}
