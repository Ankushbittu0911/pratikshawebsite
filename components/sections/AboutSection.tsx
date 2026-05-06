'use client';
import styles from './AboutSection.module.css';

const STATS = [
  { value: '7+',   label: 'Years of Experience' },
  { value: '500+', label: 'Panels Delivered' },
  { value: '50+',  label: 'Satisfied Clients' },
  { value: '9',    label: 'Panel Product Lines' },
];

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Quality First',
    desc: 'Every panel is manufactured under strict quality protocols aligned with IEC 61439 and IS 8623.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <rect x="8" y="8" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 20h12M20 14v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Custom Engineering',
    desc: 'We design to your exact specifications — no off-the-shelf compromises.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <path d="M20 6 L34 14 v12 L20 34 L6 26 V14 Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 6 v28M6 14 l14 8 14-8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'On-time Delivery',
    desc: 'Our production scheduling and supply-chain management ensure deadlines are always met.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" aria-hidden>
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 12 v8 l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Post-sale Support',
    desc: '24/7 technical support, site commissioning, and AMC services for every installation.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      {/* Background grid texture */}
      <div className={styles.bgGrid} aria-hidden />

      <div className={styles.container}>
        {/* Left column — text */}
        <div className={styles.textCol}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>About Us</span>
          </div>

          <h2 className={styles.title}>
            Powering Industry <br />
            <span className={styles.titleAccent}>Since 2018</span>
          </h2>

          <p className={styles.body}>
            Pratiksha Technologies is a leading manufacturer of industrial electrical panels based in
            Palghar, Maharashtra. Founded in 2018, we have grown into a full-fledged engineering company
            with in-house design, manufacturing, testing, and commissioning capabilities.
          </p>
          <p className={styles.body}>
            Our ISO 9001:2015 certified facility is equipped with state-of-the-art manufacturing and
            testing infrastructure. With 50+ satisfied clients and 500+ panels delivered, we serve sectors
            ranging from pharmaceuticals and water treatment to chemicals and manufacturing.
          </p>

          {/* Certifications */}
          <div className={styles.certRow}>
            {['ISO 9001:2015', 'IEC 61439', 'IS 8623', 'BIS Compliant'].map((c) => (
              <span key={c} className={styles.certBadge}>{c}</span>
            ))}
          </div>
        </div>

        {/* Right column — stats */}
        <div className={styles.rightCol}>
          <div className={styles.statsGrid}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values row */}
      <div className={styles.valuesContainer}>
        <h3 className={styles.valuesTitle}>Why Choose Pratiksha</h3>
        <div className={styles.valuesGrid}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h4 className={styles.valueTitle}>{v.title}</h4>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
