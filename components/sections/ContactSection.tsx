'use client';
import { useState } from 'react';
import styles from './ContactSection.module.css';

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product: string;
  message: string;
};

const PRODUCT_OPTIONS = [
  'PCC Panel',
  'MCC Panel',
  'VFD Panel',
  'APFC Panel',
  'PLC Panel',
  'Feeder Pillar',
  'AMF Panel',
  'PDB Panel',
  'Fire Panel',
  'Multiple Products',
  'General Enquiry',
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: POST to API route / email service
    setSubmitted(true);
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteOpen(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>Contact Us</span>
        </div>
        <h2 className={styles.title}>
          Let&apos;s Build <span className={styles.titleAccent}>Together</span>
        </h2>
        <p className={styles.sub}>
          Reach out with your requirements and our engineering team will respond within 24 hours.
        </p>
      </div>

      <div className={styles.container}>
        {/* Left — Contact info */}
        <div className={styles.infoCol}>
          <h3 className={styles.infoTitle}>Get In Touch</h3>

          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Address</p>
                <p className={styles.infoValue}>Plot-J/3, M.I.D.C, Industrial Estate,<br/>Palghar, Maharashtra 401506</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C9.61 21 3 14.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Phone</p>
                <a href="tel:+917385655992" className={styles.infoLink}>+91 73856 55992</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Email</p>
                <a href="mailto:support@pratikshatechnologies.com" className={styles.infoLink}>
                  support@pratikshatechnologies.com
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className={styles.infoLabel}>Working Hours</p>
                <p className={styles.infoValue}>Mon – Sat: 9:00 AM – 6:30 PM</p>
              </div>
            </div>
          </div>

          {/* Get Quote CTA */}
          <button
            className={styles.quoteCta}
            onClick={() => setQuoteOpen(true)}
            id="open-quote-modal"
          >
            Request a Quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Right — Contact form */}
        <div className={styles.formCol}>
          {submitted ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <svg viewBox="0 0 48 48" fill="none" aria-hidden>
                  <circle cx="24" cy="24" r="20" stroke="var(--color-accent)" strokeWidth="2"/>
                  <path d="M16 24l6 6 10-12" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.successTitle}>Message Sent!</h3>
              <p className={styles.successText}>
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button className={styles.successReset} onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={styles.input}
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="contact-company">Company</label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className={styles.input}
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={styles.input}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 73856 55992"
                    className={styles.input}
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="contact-product">Product Interest</label>
                <select
                  id="contact-product"
                  name="product"
                  className={styles.select}
                  value={form.product}
                  onChange={handleChange}
                >
                  <option value="">Select a product</option>
                  {PRODUCT_OPTIONS.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your requirements…"
                  className={styles.textarea}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitBtn} id="contact-submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Get Quote Modal ── */}
      {quoteOpen && (
        <div className={styles.modal} onClick={() => setQuoteOpen(false)} role="dialog" aria-modal aria-label="Get Quote">
          <div className={styles.modalInner} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Request a Quote</h3>
              <button className={styles.modalClose} onClick={() => setQuoteOpen(false)} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <p className={styles.modalSub}>
              Fill in your requirements and we&apos;ll send you a detailed quote within 48 hours.
            </p>
            <form className={styles.form} onSubmit={handleQuoteSubmit} noValidate>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="quote-name">Full Name *</label>
                  <input id="quote-name" name="name" type="text" required placeholder="Your name" className={styles.input} value={form.name} onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="quote-company">Company *</label>
                  <input id="quote-company" name="company" type="text" required placeholder="Company name" className={styles.input} value={form.company} onChange={handleChange}/>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="quote-email">Email *</label>
                  <input id="quote-email" name="email" type="email" required placeholder="your@email.com" className={styles.input} value={form.email} onChange={handleChange}/>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="quote-phone">Phone *</label>
                  <input id="quote-phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className={styles.input} value={form.phone} onChange={handleChange}/>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="quote-product">Product Required *</label>
                <select id="quote-product" name="product" required className={styles.select} value={form.product} onChange={handleChange}>
                  <option value="">Select a product</option>
                  {PRODUCT_OPTIONS.map((p) => (<option key={p} value={p}>{p}</option>))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="quote-message">Specifications / Requirements</label>
                <textarea id="quote-message" name="message" rows={4} placeholder="Voltage, current rating, number of feeders, site location…" className={styles.textarea} value={form.message} onChange={handleChange}/>
              </div>
              <button type="submit" className={styles.submitBtn} id="quote-submit">
                Submit Quote Request
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <span className={styles.footerLogoAccent}>P</span>RATIKSHA TECHNOLOGIES
          </div>
          <p className={styles.footerTagline}>Engineering Reliability. Delivering Excellence.</p>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} Pratiksha Technologies. All rights reserved.
          </p>
          <div className={styles.footerCerts}>
            <span>ISO 9001:2015</span>
            <span>IEC 61439 Compliant</span>
            <span>Made in India</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
