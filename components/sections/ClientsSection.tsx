'use client';
import { useEffect, useRef } from 'react';
import styles from './ClientsSection.module.css';

const CLIENTS = [
  { name: 'Sukhras Machine Pvt Ltd',  sector: 'Machinery' },
  { name: 'Bajaj Healthcare Ltd',     sector: 'Pharma' },
  { name: 'Baramati Agro Ltd',        sector: 'Agriculture' },
  { name: 'Macleods Pharma',          sector: 'Pharma' },
  { name: 'DDecor',                   sector: 'Textiles' },
  { name: 'Samrudh Pharma',           sector: 'Pharma' },
  { name: 'Vasu Chemical LLP',        sector: 'Chemical' },
  { name: 'Bajaj Indef',              sector: 'Industrial' },
];

const TESTIMONIALS = [
  {
    quote: '"Pratiksha Technologies delivered 18 MCC panels for our new greenfield plant on time and within budget. The quality of components and wiring finish exceeded our expectations."',
    author: 'Rajesh Patil',
    role: 'Head of Projects, Sukhras Machine Pvt Ltd',
  },
  {
    quote: '"Their APFC panels reduced our monthly electricity bill by 14% in the first quarter alone. Excellent ROI and zero maintenance issues in 3 years of continuous operation."',
    author: 'Sneha Kulkarni',
    role: 'Electrical Manager, Bajaj Healthcare Ltd',
  },
  {
    quote: '"The VFD panels are perfectly integrated with our SCADA system. Pratiksha\'s technical team was responsive and professional throughout commissioning."',
    author: 'Vikram Deshmukh',
    role: 'Plant Automation Lead, Baramati Agro Ltd',
  },
];

// Sector color map
const SECTOR_COLORS: Record<string, string> = {
  Machinery:   '#0fbcaa',
  Pharma:      '#38c96b',
  Agriculture: '#22d3a0',
  Textiles:    '#0ea5e9',
  Chemical:    '#a78bfa',
  Industrial:  '#fb923c',
};

export default function ClientsSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Staggered reveal on scroll using IntersectionObserver
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('[data-client-card]');
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ?? '0';
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add(styles.cardVisible);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>Our Clients</span>
          <span className={styles.eyebrowLine} />
        </div>
        <h2 className={styles.title}>
          Trusted By <span className={styles.titleAccent}>Industry Leaders</span>
        </h2>
        <p className={styles.sub}>
          Powering operations across pharmaceuticals, chemicals, manufacturing, and agro-processing.
        </p>
      </div>

      {/* ── Client grid ── */}
      <div className={styles.clientGrid} ref={gridRef}>
        {CLIENTS.map((client, i) => {
          const color = SECTOR_COLORS[client.sector] ?? 'var(--color-accent)';
          return (
            <div
              key={client.name}
              className={styles.clientCard}
              data-client-card
              data-delay={i * 80}
              id={`client-${client.name.toLowerCase().replace(/\s/g, '-')}`}
              style={{ '--card-accent': color } as React.CSSProperties}
            >
              {/* Animated corner border */}
              <span className={styles.cardCornerTL} aria-hidden />
              <span className={styles.cardCornerBR} aria-hidden />

              {/* Index number */}
              <span className={styles.cardIndex}>{String(i + 1).padStart(2, '0')}</span>

              {/* Sector badge */}
              <span className={styles.cardSector} style={{ color }}>{client.sector}</span>

              {/* Client name */}
              <h3 className={styles.cardName}>{client.name}</h3>

              {/* Hover glow */}
              <div className={styles.cardGlow} aria-hidden />
            </div>
          );
        })}
      </div>

      {/* ── Testimonials ── */}
      <div className={styles.testimonialGrid}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className={styles.testimonialCard} id={`testimonial-${i}`}>
            <div className={styles.quoteIconWrap} aria-hidden>
              <svg viewBox="0 0 32 26" fill="none" width="32" height="26">
                <path d="M0 26V16.12C0 6.04 6.72 1.08 20.16 0L21.28 2.96C14.64 4.04 11.32 7.08 11.32 12v1.92H21.28V26H0ZM17.6 26V16.12C17.6 6.04 24.32 1.08 37.76 0L38.88 2.96C32.24 4.04 28.92 7.08 28.92 12v1.92H38.88V26H17.6Z" fill="currentColor" opacity="0.15"/>
              </svg>
            </div>
            <p className={styles.quoteText}>{t.quote}</p>
            <div className={styles.quoteMeta}>
              <span className={styles.quoteAuthor}>{t.author}</span>
              <span className={styles.quoteRole}>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
