'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import styles from './GallerySection.module.css';

interface GalleryItem {
  src: string;
  caption: string;
  category: string;
}

// 12 items = perfect 4×3 grid. All equal size, fully systematic.
const GALLERY: GalleryItem[] = [
  { src: '/panels/mcc-panel-1.png',    caption: 'MCC Panel — Full Assembly',            category: 'MCC Panel'    },
  { src: '/panels/pcc-panel-1.png',    caption: 'PCC Panel — Front View',               category: 'PCC Panel'    },
  { src: '/panels/vfd-panel-1.png',    caption: 'VFD Panel — Speed Control Unit',       category: 'VFD Panel'    },
  { src: '/panels/apfc-panel-1.png',   caption: 'APFC Panel — Power Factor Correction', category: 'APFC Panel'   },
  { src: '/panels/plc-panel-1.png',    caption: 'PLC Control Panel',                    category: 'PLC Panel'    },
  { src: '/panels/fire-panel-1.png',   caption: 'Fire Panel — Safety System',           category: 'Fire Panel'   },
  { src: '/panels/amf-panel-1.png',    caption: 'AMF Panel — Auto Changeover',          category: 'AMF Panel'    },
  { src: '/panels/feeder-panel-1.png', caption: 'Feeder Pillar — Distribution',         category: 'Feeder Pillar'},
  { src: '/panels/pdb-panel-1.png',    caption: 'PDB Panel — Power Distribution',       category: 'PDB Panel'    },
  { src: '/panels/mcc-panel-2.png',    caption: 'MCC Panel — Side Profile',             category: 'MCC Panel'    },
  { src: '/panels/pcc-panel-2.png',    caption: 'PCC Panel — Cabinet Detail',           category: 'PCC Panel'    },
  { src: '/panels/apfc-panel-2.png',   caption: 'APFC Panel — Capacitor Banks',         category: 'APFC Panel'   },
];

const CATEGORIES = ['All', 'MCC Panel', 'PCC Panel', 'VFD Panel', 'APFC Panel', 'PLC Panel', 'Fire Panel', 'AMF Panel'];

export default function GallerySection() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === 'All' ? GALLERY : GALLERY.filter(g => g.category === active);

  const openLightbox = useCallback((item: GalleryItem) => setLightbox(item), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <section id="gallery" className={styles.section}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrow}>Our Work</span>
          <span className={styles.eyebrowLine} />
        </div>
        <h2 className={styles.title}>
          Product <span className={styles.titleAccent}>Gallery</span>
        </h2>
        <p className={styles.sub}>
          Every panel engineered with precision. Every project delivered with pride.
        </p>
      </div>

      {/* ── Filter pills ── */}
      <div className={styles.filters} role="group" aria-label="Filter by product type">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`${styles.pill} ${active === cat ? styles.pillActive : ''}`}
            id={`gallery-cat-${cat.replace(/\s/g, '-').toLowerCase()}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Uniform grid — all equal cells ── */}
      <div className={styles.grid}>
        {filtered.map((item, i) => (
          <button
            key={`${item.src}-${i}`}
            className={styles.cell}
            onClick={() => openLightbox(item)}
            aria-label={`View: ${item.caption}`}
          >
            {/* Category chip */}
            <span className={styles.cellTag}>{item.category}</span>

            {/* Image */}
            <div className={styles.imgFrame}>
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className={styles.img}
                sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 25vw"
              />
            </div>

            {/* Overlay */}
            <div className={styles.overlay}>
              <p className={styles.overlayCaption}>{item.caption}</p>
              <div className={styles.overlayZoom}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 12l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M6 8h4M8 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className={styles.lightbox}
          onClick={closeLightbox}
          role="dialog"
          aria-modal
          aria-label="Image viewer"
        >
          <button className={styles.lbClose} onClick={closeLightbox} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className={styles.lbContent} onClick={e => e.stopPropagation()}>
            <div className={styles.lbImgWrap}>
              <Image
                src={lightbox.src}
                alt={lightbox.caption}
                fill
                className={styles.lbImg}
                sizes="90vw"
                priority
              />
            </div>
            <div className={styles.lbMeta}>
              <span className={styles.lbCategory}>{lightbox.category}</span>
              <p className={styles.lbCaption}>{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
