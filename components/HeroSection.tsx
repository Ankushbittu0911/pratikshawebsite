'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroSection.module.css';

gsap.registerPlugin(ScrollTrigger);

// ─── Text timeline configuration ────────────────────────────────────────────
const TEXT_SEGMENTS = [
  {
    startFrame: 1,
    endFrame: 20,
    headline: 'Intelligent MCC Panels',
    subline: 'Engineered For Industrial Reliability',
    position: 'center',
  },
  {
    startFrame: 21,
    endFrame: 50,
    headline: 'Precision Built\nInternal Architecture',
    subline: 'Optimized Cable Management & Safety',
    position: 'bottom-left',
  },
  {
    startFrame: 51,
    endFrame: 85,
    headline: 'Industrial Grade\nComponents',
    subline: 'Reliable Power Distribution Systems',
    position: 'top-right',
  },
  {
    startFrame: 86,
    endFrame: 120,
    headline: 'Designed For\nMaximum Uptime',
    subline: 'Built By Pratiksha Technologies',
    position: 'center',
  },
] as const;

const TOTAL_FRAMES = 120;

// Pad number to 3 digits → "001", "002", …
const frameUrl = (n: number) =>
  `/sequence/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

// ─── Main component ──────────────────────────────────────────────────────────
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const activeSegmentRef = useRef(0);
  const loadedCountRef = useRef(0);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSegment, setActiveSegment] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayFrame, setDisplayFrame] = useState(1);

  // ── Draw a specific frame to canvas ─────────────────────────────────────
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !ctx || !img || !img.complete) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover scaling
    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const sx = (cw - sw) / 2;
    const sy = (ch - sh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);

    // Subtle cinematic vignette
    const gradient = ctx.createRadialGradient(
      cw / 2, ch / 2, ch * 0.2,
      cw / 2, ch / 2, ch * 0.85
    );
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(0.7, 'rgba(0,0,0,0.15)');
    gradient.addColorStop(1, 'rgba(0,0,0,0.72)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, cw, ch);

    // Bottom dark fade for text legibility
    const bottomGrad = ctx.createLinearGradient(0, ch * 0.55, 0, ch);
    bottomGrad.addColorStop(0, 'rgba(0,0,0,0)');
    bottomGrad.addColorStop(1, 'rgba(0,0,0,0.85)');
    ctx.fillStyle = bottomGrad;
    ctx.fillRect(0, 0, cw, ch);
  }, []);

  // ── Resize canvas ────────────────────────────────────────────────────────
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctxRef.current = canvas.getContext('2d');
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // ── Smooth frame interpolation via RAF ──────────────────────────────────
  const targetFrameRef = useRef(0);
  const renderLoop = useCallback(() => {
    const diff = targetFrameRef.current - currentFrameRef.current;
    if (Math.abs(diff) > 0.4) {
      currentFrameRef.current += diff * 0.18; // ease factor
      drawFrame(Math.round(currentFrameRef.current));
    } else if (Math.abs(diff) > 0.01) {
      currentFrameRef.current = targetFrameRef.current;
      drawFrame(Math.round(currentFrameRef.current));
    }
    rafRef.current = requestAnimationFrame(renderLoop);
  }, [drawFrame]);

  // ── Preload all frames ───────────────────────────────────────────────────
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = frameUrl(i);
      img.onload = () => {
        loaded++;
        loadedCountRef.current = loaded;
        const pct = Math.round((loaded / TOTAL_FRAMES) * 100);
        setLoadProgress(pct);
        if (loaded === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        // Still increment on error so loading never stalls
        loaded++;
        setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
        if (loaded === TOTAL_FRAMES) setIsLoaded(true);
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      images.forEach((img) => { img.onload = null; img.onerror = null; });
    };
  }, []);

  // ── Setup canvas + resize listener ──────────────────────────────────────
  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  // ── Start render loop once loaded ────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded) return;
    drawFrame(0);
    rafRef.current = requestAnimationFrame(renderLoop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame, renderLoop]);

  // ── GSAP ScrollTrigger setup ─────────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded) return;

    const container = containerRef.current;
    if (!container) return;

    const proxy = { frame: 0 };

    const tl = gsap.to(proxy, {
      frame: TOTAL_FRAMES - 1,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${window.innerHeight * 6}`,
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const rawFrame = progress * (TOTAL_FRAMES - 1);
          targetFrameRef.current = rawFrame;

          // Determine active text segment
          const frameNum = Math.round(rawFrame) + 1;
          setDisplayFrame(frameNum);

          let seg = 0;
          for (let i = 0; i < TEXT_SEGMENTS.length; i++) {
            if (frameNum >= TEXT_SEGMENTS[i].startFrame && frameNum <= TEXT_SEGMENTS[i].endFrame) {
              seg = i;
              break;
            }
          }
          if (seg !== activeSegmentRef.current) {
            activeSegmentRef.current = seg;
            setActiveSegment(seg);
          }

          setIsAnimating(progress > 0.01 && progress < 0.99);
        },
        onEnter: () => setIsAnimating(true),
        onLeave: () => setIsAnimating(false),
        onEnterBack: () => setIsAnimating(true),
        onLeaveBack: () => setIsAnimating(false),
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [isLoaded]);

  // ── Text fade orchestration ──────────────────────────────────────────────
  useEffect(() => {
    setTextVisible(false);
    const t = setTimeout(() => setTextVisible(true), 80);
    return () => clearTimeout(t);
  }, [activeSegment]);

  const seg = TEXT_SEGMENTS[activeSegment];

  return (
    <>
      {/* ── Loading screen ── */}
      <div className={`${styles.loader} ${isLoaded ? styles.loaderHide : ''}`}>
        <div className={styles.loaderInner}>
          <div className={styles.loaderLogo}>
            <span className={styles.loaderLogoAccent}>P</span>TECH
          </div>
          <div className={styles.loaderBar}>
            <div
              className={styles.loaderFill}
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <div className={styles.loaderPercent}>{loadProgress}%</div>
          <p className={styles.loaderSub}>Loading cinematic experience…</p>
        </div>
      </div>

      {/* ── Hero scroll container ── */}
      <div ref={containerRef} className={styles.heroContainer} id="hero-container">
        {/* Canvas — full viewport */}
        <canvas ref={canvasRef} className={styles.heroCanvas} id="panel-canvas" />

        {/* Cinematic ambient layers */}
        <div className={styles.ambientTopGlow} aria-hidden />
        <div className={styles.ambientBottomGlow} aria-hidden />
        <div className={styles.scanline} aria-hidden />


        {/* ── Hero text overlay ── */}
        <div
          className={`${styles.textOverlay} ${styles[`pos_${seg.position.replace('-', '_')}`]} ${textVisible ? styles.textIn : styles.textOut}`}
          aria-live="polite"
        >
          {/* Segment number indicator */}
          <div className={styles.segmentIndicator}>
            {TEXT_SEGMENTS.map((_, i) => (
              <span
                key={i}
                className={`${styles.segmentDot} ${i === activeSegment ? styles.segmentDotActive : ''}`}
              />
            ))}
          </div>

          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>
              {activeSegment === 0 && 'Motor Control Center'}
              {activeSegment === 1 && 'Engineering Excellence'}
              {activeSegment === 2 && 'Component Quality'}
              {activeSegment === 3 && 'Our Promise'}
            </span>
          </div>

          <h1 className={styles.headline}>
            {seg.headline.split('\n').map((line, i) => (
              <span key={i} className={styles.headlineLine}>{line}</span>
            ))}
          </h1>

          <p className={styles.subline}>{seg.subline}</p>

          {/* CTA only on last segment */}
          {activeSegment === 3 && (
            <div className={styles.ctaRow}>
              <a href="#products" className={styles.ctaPrimary} id="cta-explore">
                Explore Our Range
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className={styles.ctaSecondary} id="cta-contact">
                Get In Touch
              </a>
            </div>
          )}
        </div>

        {/* Scroll hint */}
        <div className={`${styles.scrollHint} ${isAnimating ? styles.scrollHintHide : ''}`} aria-hidden>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span className={styles.scrollLabel}>Scroll to explore</span>
        </div>


      </div>
    </>
  );
}
