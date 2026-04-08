"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, FlaskConical, Leaf, Recycle, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   HANDWRITTEN NOTE COMPONENT
═══════════════════════════════════════════════════ */

function HandNote({ children, className = "", arrow, as: Tag = "span" }: { children: React.ReactNode; className?: string; arrow?: "down" | "up" | "left" | "right"; as?: "span" | "div" | "p" }) {
  const arrows: Record<string, string> = {
    down: "↓", up: "↑", left: "←", right: "→",
  };
  return (
    <Tag className={`font-[family-name:var(--font-caveat)] text-[#2D2D2D]/60 text-xl md:text-2xl ${Tag === "span" ? "inline-block" : "block"} ${className}`}>
      {children}
      {arrow && <span className="ml-1 inline-block">{arrows[arrow]}</span>}
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════
   MARQUEE TEXT BAND
═══════════════════════════════════════════════════ */

function Marquee({ texts, dark = false }: { texts: string[]; dark?: boolean }) {
  const items = Array(6).fill(texts).flat();
  return (
    <div className={`overflow-hidden py-5 md:py-6 ${dark ? "bg-[#2D2D2D]" : "bg-[#F2A922]"}`}>
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((t, i) => (
          <span
            key={i}
            className={`text-sm md:text-base font-extrabold uppercase tracking-[0.25em] shrink-0 flex items-center ${dark ? "text-white/80" : "text-[#2D2D2D]"}`}
          >
            <span className="mx-6">{t}</span>
            <span className="opacity-40">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   LINE-ART ICONS (SVG)
═══════════════════════════════════════════════════ */

function IconBrainFog({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M32 52V42" />
      <circle cx="32" cy="28" r="14" />
      <path d="M24 28c0-4.4 3.6-8 8-8" />
      <path d="M18 42h28" />
      <path d="M22 48h20" />
      <path d="M14 18c-2-4 0-10 6-12" />
      <path d="M50 18c2-4 0-10-6-12" />
      <path d="M26 16c2-6 10-6 12 0" />
    </svg>
  );
}

function IconBattery({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="8" y="18" width="42" height="28" rx="4" />
      <path d="M50 26v12h4a2 2 0 002-2V28a2 2 0 00-2-2h-4z" />
      <rect x="14" y="24" width="8" height="16" rx="1" />
      <path d="M28 30l4-6v12l4-6" />
    </svg>
  );
}

function IconStrength({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 32h6" />
      <path d="M50 32h6" />
      <rect x="14" y="22" width="6" height="20" rx="2" />
      <rect x="44" y="22" width="6" height="20" rx="2" />
      <rect x="20" y="26" width="6" height="12" rx="2" />
      <rect x="38" y="26" width="6" height="12" rx="2" />
      <path d="M26 32h12" />
    </svg>
  );
}

function IconFocus({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="12" />
      <circle cx="32" cy="32" r="4" />
      <path d="M32 8v4" />
      <path d="M32 52v4" />
      <path d="M8 32h4" />
      <path d="M52 32h4" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   DECORATIVE BLOBS — soft organic shapes
═══════════════════════════════════════════════════ */

function Blob({ className = "", variant = 1 }: { className?: string; variant?: 1 | 2 | 3 }) {
  const paths: Record<number, string> = {
    1: "M44.5,-76.3C56.3,-68.2,63.8,-52.7,71.2,-37.3C78.5,-21.9,85.7,-6.5,83.6,7.7C81.5,21.9,70.1,34.9,58.3,45.3C46.5,55.7,34.3,63.5,20.6,69.3C6.9,75.1,-8.3,78.9,-22.3,75.5C-36.3,72.1,-49.1,61.5,-58.7,48.7C-68.3,35.9,-74.7,20.9,-76.1,5.3C-77.5,-10.3,-73.9,-26.5,-65.3,-38.9C-56.7,-51.3,-43.1,-59.9,-29.5,-67.1C-15.9,-74.3,-2.3,-80.1,8.9,-77.5C20.1,-74.9,32.7,-84.4,44.5,-76.3Z",
    2: "M39.3,-65.5C50.1,-60.3,57.5,-47.5,64.3,-34.1C71.1,-20.7,77.3,-6.7,76.1,6.9C74.9,20.5,66.3,33.7,55.9,43.7C45.5,53.7,33.3,60.5,19.9,66.1C6.5,71.7,-8.1,76.1,-21.5,73.1C-34.9,70.1,-47.1,59.7,-56.5,47.5C-65.9,35.3,-72.5,21.3,-74.3,6.5C-76.1,-8.3,-73.1,-23.9,-65.1,-36.1C-57.1,-48.3,-44.1,-57.1,-31.1,-61.5C-18.1,-65.9,-5.1,-65.9,6.5,-63.3C18.1,-60.7,28.5,-70.7,39.3,-65.5Z",
    3: "M42.7,-73.7C54.5,-66.1,62.9,-53.1,68.7,-39.3C74.5,-25.5,77.7,-10.9,76.3,3.1C74.9,17.1,68.9,30.5,60.1,41.3C51.3,52.1,39.7,60.3,26.9,65.7C14.1,71.1,0.1,73.7,-14.3,72.3C-28.7,70.9,-43.5,65.5,-54.3,55.7C-65.1,45.9,-71.9,31.7,-74.5,16.7C-77.1,1.7,-75.5,-14.1,-69.1,-27.1C-62.7,-40.1,-51.5,-50.3,-39.1,-57.5C-26.7,-64.7,-13.3,-68.9,1.5,-71.5C16.3,-74.1,30.9,-81.3,42.7,-73.7Z",
  };
  return (
    <svg viewBox="-100 -100 200 200" className={`absolute pointer-events-none ${className}`}>
      <path d={paths[variant]} fill="currentColor" transform="translate(0,0)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   FLUID STAT ELEMENT — organic blob shape
═══════════════════════════════════════════════════ */

function StatBlob({ value, label, className = "", ...rest }: { value: string; label: string; className?: string; [key: string]: unknown }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} {...rest}>
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Organic background shape */}
        <svg viewBox="-60 -60 120 120" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <path
            d="M40,-30 C55,-10 50,20 30,40 C10,55 -25,50 -40,30 C-55,10 -50,-20 -30,-40 C-10,-55 25,-50 40,-30Z"
            fill="#FFFDF7"
            stroke="#2D2D2D"
            strokeWidth="0.5"
            strokeOpacity="0.06"
          />
        </svg>
        <span className="relative z-10 text-2xl md:text-3xl font-extrabold text-[#2D2D2D] tracking-tight leading-none">{value}</span>
        <span className="relative z-10 text-xs md:text-sm text-[#2D2D2D]/45 font-medium mt-1 text-center leading-tight">{label}</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   IMAGE PLACEHOLDER
═══════════════════════════════════════════════════ */

function ImgPlaceholder({ hint, className = "" }: { hint: string; className?: string }) {
  return (
    <div className={`bg-[#2D2D2D]/[0.04] flex items-center justify-center ${className}`}>
      <span className="text-[#2D2D2D]/20 text-[10px] text-center px-4 leading-relaxed">{hint}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════════ */

const faqs = [
  { q: "wait, what exactly is creatine?", a: "Creatine is a molecule your body produces naturally. It fuels your brain and muscles with energy — like a rechargeable battery for your cells. During perimenopause and menopause, your body produces significantly less of it, which is directly linked to the brain fog, fatigue, and muscle loss so many women experience." },
  { q: "how does creatine help with menopause?", a: "Many menopause symptoms — brain fog, fatigue, muscle loss, low energy — overlap with creatine deficiency. As estrogen drops, so does creatine synthesis. Supplementing creatine replenishes what menopause is draining: fuel for your brain, energy for your cells, and support for your muscles." },
  { q: "what does it taste like?", a: "A spicy ginger kick with warm turmeric and bright citrus. Lemon, pineapple, and orange. It's a proper cold-pressed shot. Not sweet. Not medicinal. Just sharp and bright." },
  { q: "is creatine safe during menopause?", a: "Over 500 peer-reviewed studies (ISSN position stand, Kreider et al., 2017). Consistently safe for healthy adults at recommended doses. It's been studied for decades across all age groups, including postmenopausal women specifically." },
  { q: "will creatine make me gain weight?", a: "Creatine draws water into your muscle cells, so you might see 1 to 2kg in the first week. That's intracellular water (inside the muscle, not bloating), not fat. It stabilises quickly. Many menopausal women find it actually helps maintain lean muscle mass." },
  { q: "how long until I feel something?", a: "At 10g/day, full creatine saturation takes about 2 weeks — faster than the 28 days needed at lower doses [Hultman et al., 1996]. Some women notice improved energy and less brain fog in the first week, others around 3 to 4 weeks. The 14-day starter is designed around this timeline." },
  { q: "how is this different from a tub of creatine?", a: "A tub gives you powder and a scoop. zesty gives you 10g sealed dry in the cap, a cold-pressed shot with piperine for absorption, and electrolytes for uptake. Plus ginger and turmeric that target menopause inflammation. No mixing, no measuring." },
  { q: "is 10g too much?", a: "~95% of your body's creatine is stored in muscle, so standard 3-5g doses mostly saturate muscle stores. Your brain holds the other ~5% — and that's what menopause is depleting. Researchers studying cognitive benefits in women use 10g+ to reach the brain [Dechent et al., 1999; Smith-Ryan et al., 2021]. Well within clinically studied safe ranges." },
  { q: "I'm in perimenopause — is it too early?", a: "Not at all — it's the perfect time. Creatine stores start declining before full menopause. Perimenopause typically starts in your mid-40s, and starting creatine then means you're getting ahead of the drop, not playing catch-up." },
  { q: "when should I drink it?", a: "Morning works best as a daily ritual. Twist, press, shake, drink — start your day. But any consistent time works." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#2D2D2D]/10">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-6 flex justify-between items-center gap-6 cursor-pointer group">
        <span className="font-bold text-[#2D2D2D] text-lg group-hover:text-[#F2A922] transition-colors">{q}</span>
        <span className={`text-[#F2A922] transition-transform duration-300 text-2xl shrink-0 leading-none ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-out ${open ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-[#2D2D2D]/65 leading-relaxed text-base">{a}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */

export default function Home() {
  const heroProductRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  /* GSAP animations — kept minimal: hero on load, empathy headline, pricing cards */
  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Hero — fade in on page load (not scroll-triggered) */
      gsap.from(".gsap-hero-intro", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.2,
      });

      /* Empathy headline — one strong scroll moment */
      const empathyHeadline = document.querySelector(".gsap-empathy-headline");
      if (empathyHeadline) {
        gsap.from(empathyHeadline, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: empathyHeadline,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      /* Pricing cards — final conversion push */
      gsap.utils.toArray<HTMLElement>(".gsap-pricing-card").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.15,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  /* Sticky CTA logic */
  useEffect(() => {
    const onScroll = () => {
      const pricing = document.getElementById("pricing");
      const y = window.scrollY;
      const heroH = window.innerHeight;
      const pTop = pricing?.offsetTop ?? Infinity;
      setShowSticky(y > heroH * 0.8 && y < pTop - 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-x-hidden bg-[#FFFDF7]">

      {/* Locale switcher */}
      <div className="fixed top-5 right-5 z-[60] flex items-center gap-1 bg-[#FFFDF7]/90 backdrop-blur-sm border border-[#2D2D2D]/10 rounded-full px-1 py-1 shadow-sm">
        <span className="px-3 py-1.5 text-sm font-bold text-[#FFFDF7] bg-[#2D2D2D] rounded-full">EN</span>
        <a href="/nl" className="px-3 py-1.5 text-sm font-bold text-[#2D2D2D]/40 hover:text-[#2D2D2D] transition-colors rounded-full">NL</a>
      </div>

      {/* ═══════════════════════════════════════════
          1. HERO — Full-bleed immersive
      ═══════════════════════════════════════════ */}
      <section className="min-h-[100dvh] relative flex flex-col items-center justify-center px-6 pt-20 md:pt-24 pb-16 overflow-hidden">

        {/* ── LAYER 0: Full-bleed background image ── */}
        <div className="absolute inset-0 z-0">
          <img src="/images/1-hero-background.jpeg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* ── LAYER 1: Gradient overlays for text readability ── */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#FFFDF7]/90 via-[#FFFDF7]/40 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#FFFDF7]/85 via-[#FFFDF7]/20 to-transparent" />

        {/* ── LAYER 2: All content ── */}

        {/* Oversized brand name + SEO H1 */}
        <div className="gsap-hero-intro text-center relative z-10 mb-6 md:mb-8">
          <p className="text-[#F2A922] text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-5">
            by zesty
          </p>
          <h1 className="text-[1.75rem] md:text-[2.75rem] lg:text-[3.5rem] font-extrabold text-[#2D2D2D] leading-[1.05] tracking-tight max-w-4xl mx-auto">
            the <span className="text-[#F2A922]">menopause</span> shot that fights
            <br className="hidden md:block" />
            {" "}the fog, the fatigue, and the fade.
          </h1>
          <p className="text-lg md:text-xl text-[#2D2D2D] font-bold mt-4 md:mt-5 tracking-tight">
            powered by <span className="text-[#F2A922]">10g creatine</span> — the supplement women wish they&rsquo;d started sooner.
          </p>
          <p className="text-sm md:text-base text-[#2D2D2D]/50 font-medium mt-2 md:mt-3 max-w-lg mx-auto leading-relaxed">
            cold-pressed ginger &amp; turmeric. one daily shot to fight the brain fog, fatigue, and muscle loss of menopause.
          </p>
        </div>

        {/* Product — large, centered */}
        <div className="gsap-hero-intro relative z-10 flex justify-center mb-2 md:mb-4">
          <div ref={heroProductRef} className="relative w-64 h-80 md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[30rem]">
            <img src="/images/2-hero-product-cutout.png" alt="zesty bottle" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
        </div>

        {/* Stat pills — horizontal below product */}
        <div className="gsap-hero-intro relative z-10 flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {[
            { val: "ginger", lbl: "+ turmeric" },
            { val: "10g", lbl: "creatine per shot" },
            { val: "electrolytes", lbl: "for uptake" },
            { val: "0g", lbl: "sugar" },
          ].map((s) => (
            <div key={s.lbl} className="flex items-baseline gap-1.5 backdrop-blur-sm border bg-[#FFFDF7]/85 border-[#2D2D2D]/[0.05] px-4 py-2.5 rounded-full shadow-sm">
              <span className="text-base md:text-lg font-extrabold text-[#2D2D2D] tracking-tight leading-none">{s.val}</span>
              <span className="text-sm text-[#2D2D2D]/40 font-medium">{s.lbl}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="gsap-hero-intro relative z-10 text-center">
          <a
            href="/waitlist?plan=30"
            className="inline-flex items-center gap-3 bg-[#2D2D2D] text-[#FFFDF7] font-bold text-base md:text-lg px-10 py-4 md:py-5 rounded-full transition-all hover:bg-[#2D2D2D]/85 hover:shadow-xl hover:scale-[1.02]"
          >
            <span className="w-6 h-6 rounded-full bg-[#F2A922] flex items-center justify-center text-[#2D2D2D] text-xs">↗</span>
            order now
          </a>
          <p className="text-[#2D2D2D]/50 text-sm mt-4 font-medium">from €2.63/shot · free shipping on 30-packs</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 animate-pulse">
          <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className="text-[#2D2D2D]/25">
            <path d="M2 2l10 10L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUST STRIP — icon + label badges
      ═══════════════════════════════════════════ */}
      <section className="bg-[#F5EDE0] py-8 md:py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {[
            { label: "cold-pressed", icon: <Droplets className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "backed by science", icon: <FlaskConical className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "no artificial anything", icon: <Leaf className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "recycled bottles", icon: <Recycle className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "no added sugar", icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} /> },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-2 text-center">
              <div className="text-[#2D2D2D]/50">{badge.icon}</div>
              <span className="text-xs md:text-sm text-[#2D2D2D]/55 font-bold uppercase tracking-[0.1em] leading-tight">{badge.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. EMPATHY — Big statement, symptom story
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 px-6 overflow-hidden">
        <Blob variant={3} className="text-[#F5EDE0]/50 w-[500px] md:w-[800px] -top-[10%] -left-[20%]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="gsap-empathy-headline text-center mb-16 md:mb-24">
            <p className="text-[#2D2D2D]/40 font-bold text-sm tracking-[0.25em] uppercase mb-4">perimenopause &amp; menopause</p>
            <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight max-w-4xl mx-auto">
              you used to
              <br />
              <span className="text-[#F2A922]/50">feel different.</span>
            </h2>
            <p className="text-[#2D2D2D]/45 text-base md:text-lg mt-5 max-w-lg mx-auto leading-relaxed">
              it started in your mid-40s. maybe earlier. the symptoms crept in quietly — and no one told you what was coming. it&rsquo;s not ageing. it&rsquo;s menopause.
            </p>
            <HandNote className="mt-5 block rotate-[-3deg]">
              why did no one tell me sooner?
            </HandNote>
          </div>

          {/* Symptom diagram — central image, symptoms in circle with connecting lines */}

          {/* Mobile: stacked list */}
          <div className="md:hidden space-y-6">
            {[
              { icon: <IconBrainFog className="w-8 h-8 text-[#F2A922]" />, title: "menopause brain fog", desc: <>the words are there, you just can&rsquo;t find them. estrogen drops, and so does your mental clarity.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[1]</a></> },
              { icon: <IconBattery className="w-8 h-8 text-[#F2A922]" />, title: "crushing fatigue", desc: <>8 hours of sleep and still dragging. hormonal shifts tank your cellular energy production.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[3]</a></> },
              { icon: <IconStrength className="w-8 h-8 text-[#F2A922]" />, title: "losing muscle & strength", desc: <>less muscle, more aches. declining estrogen accelerates muscle loss after 40.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[7]</a></> },
              { icon: <IconFocus className="w-8 h-8 text-[#F2A922]" />, title: "can\u2019t focus anymore", desc: <>reading the same email three times. cognitive decline is one of the most common menopause symptoms.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[1]</a></> },
            ].map((s) => (
              <div key={s.title} className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{s.icon}</div>
                <div>
                  <p className="font-extrabold text-[#2D2D2D] text-xl">{s.title}</p>
                  <p className="text-[#2D2D2D]/50 text-base">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: radial diagram */}
          <div className="hidden md:block">
            <div className="relative max-w-4xl mx-auto" style={{ height: "700px" }}>

              {/* SVG connecting lines from center to each symptom */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                {/* Lines from center (400, 300) to each corner */}
                <line x1="400" y1="300" x2="120" y2="80" stroke="#F2A922" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 4" />
                <line x1="400" y1="300" x2="680" y2="80" stroke="#F2A922" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 4" />
                <line x1="400" y1="300" x2="120" y2="520" stroke="#F2A922" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 4" />
                <line x1="400" y1="300" x2="680" y2="520" stroke="#F2A922" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 4" />
                {/* Small dots at endpoints */}
                <circle cx="120" cy="80" r="4" fill="#F2A922" fillOpacity="0.3" />
                <circle cx="680" cy="80" r="4" fill="#F2A922" fillOpacity="0.3" />
                <circle cx="120" cy="520" r="4" fill="#F2A922" fillOpacity="0.3" />
                <circle cx="680" cy="520" r="4" fill="#F2A922" fillOpacity="0.3" />
                {/* Center ring */}
                <circle cx="400" cy="300" r="100" fill="none" stroke="#F2A922" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="4 3" />
              </svg>

              {/* Center — branded circle with message */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-[#F2A922]/[0.08] via-[#F5EDE0] to-[#F2A922]/[0.05] border border-[#F2A922]/15 flex flex-col items-center justify-center px-8">
                  <p className="text-[#2D2D2D]/50 text-xl lg:text-2xl font-extrabold tracking-tight leading-snug text-center">you&rsquo;re not alone.</p>
                  <p className="text-[#F2A922] text-[2.5rem] lg:text-[3.5rem] font-extrabold tracking-tight leading-none mt-2">1.5B</p>
                  <p className="text-[#2D2D2D]/30 text-sm lg:text-base font-medium mt-1.5 text-center leading-snug">women in menopause<br />worldwide by 2030 <span className="text-[#F2A922]/60">[8]</span></p>
                </div>
                <HandNote as="div" className="text-center mt-4 rotate-[-2deg]">
                  sound familiar?
                </HandNote>
              </div>

              {/* Top-left: brain fog */}
              <div className="absolute left-0 top-0 max-w-[220px] z-10">
                <IconBrainFog className="w-10 h-10 text-[#F2A922] mb-2" />
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">menopause brain fog</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">the words are there, you just can&rsquo;t find them. estrogen drops, and so does clarity.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[1]</a></p>
              </div>

              {/* Top-right: can't focus */}
              <div className="absolute right-0 top-0 max-w-[220px] text-right z-10">
                <div className="flex justify-end"><IconFocus className="w-10 h-10 text-[#F2A922] mb-2" /></div>
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">cognitive decline</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">reading the same email three times. one of the most reported menopause symptoms.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[1]</a></p>
              </div>

              {/* Bottom-left: tired */}
              <div className="absolute left-0 bottom-0 max-w-[220px] z-10">
                <IconBattery className="w-10 h-10 text-[#F2A922] mb-2" />
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">crushing fatigue</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">hormonal shifts tank your cellular energy. 8 hours of sleep and still dragging.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[3]</a></p>
              </div>

              {/* Bottom-right: losing strength */}
              <div className="absolute right-0 bottom-0 max-w-[220px] text-right z-10">
                <div className="flex justify-end"><IconStrength className="w-10 h-10 text-[#F2A922] mb-2" /></div>
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">muscle &amp; strength loss</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">declining estrogen accelerates muscle loss. things you used to do easily get harder.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[7]</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE — "it's not just getting older"
      ═══════════════════════════════════════════ */}
      <Marquee texts={["the brain fog. the fatigue. the muscle loss. menopause drains your creatine — take it back."]} dark />

      {/* ═══════════════════════════════════════════
          3. THE CREATINE GAP — Conversational reveal
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 px-6 bg-[#F5EDE0] overflow-hidden">
        <Blob variant={1} className="text-[#F2A922]/[0.05] w-[600px] md:w-[900px] -bottom-[20%] -right-[25%]" />

        <div className="max-w-2xl mx-auto relative z-10">
          <p className="text-[#F2A922] font-bold text-sm tracking-[0.25em] uppercase mb-6 text-center">the menopause creatine gap</p>
          <h2 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight text-center mb-12 md:mb-16">
            there&rsquo;s a name for<br /><span className="text-[#2D2D2D]/25">what&rsquo;s missing.</span>
          </h2>

          {/* Beat 1 — what it is */}
          <p className="text-[#2D2D2D] text-xl md:text-2xl leading-relaxed font-medium mb-8 md:mb-10">
            Your body runs on creatine. It&rsquo;s the molecule that keeps your brain sharp, your muscles strong, and your energy steady. And menopause is draining it.
          </p>

          {/* Beat 2 — the gap */}
          <p className="text-[#2D2D2D]/60 text-lg md:text-xl leading-relaxed mb-8 md:mb-10">
            Women already carry up to <strong className="text-[#2D2D2D] font-bold">80% lower creatine stores</strong> than men.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[4]</a> Then perimenopause hits: estrogen drops, creatine synthesis slows, and the gap widens<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[3]</a> — right when your brain and muscles need it most.
          </p>

          {/* Beat 3 — the connection */}
          <p className="text-[#2D2D2D]/60 text-lg md:text-xl leading-relaxed mb-10 md:mb-14">
            That&rsquo;s why the symptoms — the brain fog, the fatigue, the muscle loss — overlap so closely with creatine deficiency. It&rsquo;s not a coincidence.
          </p>

          {/* The emotional bridge */}
          <div className="mb-10 md:mb-14">
            <HandNote className="block rotate-[1deg]">
              menopause takes your creatine. zesty gives it back.
            </HandNote>
          </div>

          {/* The turn — reframe + zesty payoff */}
          <div className="text-center py-8 border-t border-b border-[#2D2D2D]/10">
            <p className="text-[#2D2D2D] text-2xl md:text-3xl font-extrabold leading-snug">
              you don&rsquo;t need more willpower.<br />you need more creatine.
            </p>
            <p className="text-[#2D2D2D]/50 text-base md:text-lg mt-4">
              <strong className="text-[#F2A922] font-bold">zesty</strong> closes the menopause gap. 10g creatine, one shot, every morning.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. BENEFITS — Full-bleed, dark section
      ═══════════════════════════════════════════ */}
      <section className="bg-[#2D2D2D] relative py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[#F2A922] font-bold text-sm tracking-[0.25em] uppercase mb-4">menopause symptoms, meet creatine</p>
            <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold text-white leading-[0.95] tracking-tight">
              what changes when you
              <br />
              close the gap
            </h2>
          </div>

          {/* Benefit 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
            <img src="/images/4-benefit-1-clearer-thinking-no-bg.png" alt="Clearer thinking" className="rounded-xl h-80 md:h-[28rem] w-full object-contain" />
            <div>
              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.2em] mb-2">menopause symptom: brain fog</p>
              <p className="text-[#F2A922] text-5xl md:text-7xl font-extrabold tracking-tight mb-4">clearer thinking</p>
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                It&rsquo;s real — declining estrogen starves your brain of energy. Creatine replenishes that fuel directly.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[1]</a> Focus comes back. Words come back.
              </p>
              <a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1424972/full" target="_blank" rel="noopener noreferrer" className="text-white/25 text-sm mt-4 inline-block hover:text-white/40 transition-colors">Peer-reviewed · Xu et al., 2024 →</a>
              <a href="https://pubmed.ncbi.nlm.nih.gov/33800439/" target="_blank" rel="noopener noreferrer" className="text-white/25 text-sm mt-2 inline-block hover:text-white/40 transition-colors">Creatine &amp; women&rsquo;s health · Smith-Ryan et al., 2021 →</a>
            </div>
          </div>

          {/* Benefit 2 — flipped */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
            <div className="md:order-2">
              <img src="/images/5-benefit-2-real-energy-no-bg.png" alt="Real energy" className="rounded-xl h-80 md:h-[28rem] w-full object-contain" />
            </div>
            <div className="md:order-1">
              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.2em] mb-2">menopause symptom: fatigue</p>
              <p className="text-[#F2A922] text-5xl md:text-7xl font-extrabold tracking-tight mb-4">real energy</p>
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                It isn&rsquo;t laziness — your cells are producing less ATP. Creatine is the raw material for cellular energy.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[3]</a> Not a stimulant. Actual fuel that your body is running low on.
              </p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/33800439/" target="_blank" rel="noopener noreferrer" className="text-white/25 text-sm mt-4 inline-block hover:text-white/40 transition-colors">Peer-reviewed · Smith-Ryan et al., 2021 →</a>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <img src="/images/6-benefit-3-strength-no-bg.png" alt="Strength that stays" className="rounded-xl h-80 md:h-[28rem] w-full object-contain" />
            <div>
              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.2em] mb-2">menopause symptom: muscle loss</p>
              <p className="text-[#6B8F5E] text-5xl md:text-7xl font-extrabold tracking-tight mb-4">strength that stays</p>
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                Women lose up to 10% of muscle mass in the years around menopause.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[7]</a> Creatine helps your muscles hold on to the strength you already have<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[2]</a> — and rebuild what&rsquo;s slipping.
              </p>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10487398/" target="_blank" rel="noopener noreferrer" className="text-white/25 text-sm mt-4 inline-block hover:text-white/40 transition-colors">Peer-reviewed · Chilibeck et al., 2023 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE — "twist press shake"
      ═══════════════════════════════════════════ */}
      <Marquee texts={["twist", "press", "shake", "repeat"]} />

      {/* ═══════════════════════════════════════════
          5. SOCIAL PROOF — editorial, clean
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-[#2D2D2D]/40 font-bold text-sm tracking-[0.2em] uppercase mb-3">backed by science. recommended by doctors.</p>
            <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              don&rsquo;t take our
              <br />
              word for it.
            </h2>
          </div>

          {/* Expert quotes — clean bordered layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="border border-[#2D2D2D]/[0.08] rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <img src="/images/headshot-dr-stacy-sims.png" alt="Dr. Stacy Sims" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-[#2D2D2D]">Dr. Stacy Sims</p>
                  <p className="text-sm text-[#2D2D2D]/40">Exercise Physiologist</p>
                </div>
              </div>
              <p className="text-[#2D2D2D]/65 leading-relaxed text-base">
                &ldquo;Creatine is one of the supplements I take <strong className="text-[#2D2D2D]">every single day</strong>, especially important for women during menopause.&rdquo;
              </p>
              <a href="https://www.drstacysims.com/newsletters/articles/posts/Why_Active_Women_Need_Creatine" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold mt-5 inline-block hover:underline">source →</a>
            </div>

            {/* Card 2 */}
            <div className="border border-[#2D2D2D]/[0.08] rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <img src="/images/headshot-dr-andy-galpin.png" alt="Dr. Andy Galpin" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-[#2D2D2D]">Dr. Andy Galpin</p>
                  <p className="text-sm text-[#2D2D2D]/40">Exercise Physiologist · on Huberman Lab</p>
                </div>
              </div>
              <p className="text-[#2D2D2D]/65 leading-relaxed text-base">
                &ldquo;Creatine is <strong className="text-[#2D2D2D]">the Michael Jordan of supplements.</strong>{" "}It has decades of data behind it.&rdquo;
              </p>
              <a href="https://www.hubermanlab.com/episode/dr-andy-galpin-optimal-nutrition-and-supplementation-for-fitness" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold mt-5 inline-block hover:underline">source →</a>
            </div>

            {/* Card 3 — research */}
            <div className="border border-[#2D2D2D]/[0.08] rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#2D2D2D]/[0.06] flex items-center justify-center text-[#2D2D2D]/40 font-bold text-xs">📄</div>
                <div>
                  <p className="text-sm font-bold text-[#2D2D2D]">Xu et al., 2024</p>
                  <p className="text-sm text-[#2D2D2D]/40">Frontiers in Nutrition</p>
                </div>
              </div>
              <p className="text-[#2D2D2D]/65 leading-relaxed text-base">
                &ldquo;Creatine supplementation <strong className="text-[#2D2D2D]">improves cognitive performance</strong>, especially under conditions of stress and sleep deprivation.&rdquo;
              </p>
              <a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1424972/full" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold mt-5 inline-block hover:underline">source →</a>
            </div>
          </div>

          {/* Real women */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#2D2D2D] rounded-xl p-8">
              <p className="text-white/70 leading-relaxed mb-4">
                &ldquo;It&rsquo;s been amazing as a supplement entering perimenopause. <strong className="text-white">Ladies look into creatine for the big change.</strong>&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-sm text-white/30">X · @SpunkyAzCougar</p>
                <a href="https://x.com/SpunkyAzCougar/status/2038955331317817460" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold hover:underline">source →</a>
              </div>
            </div>
            <div className="bg-[#2D2D2D] rounded-xl p-8">
              <p className="text-white/70 leading-relaxed mb-4">
                &ldquo;The creatine has been helping my wife with her menopause symptoms. <strong className="text-white">We now buy the big container once a month.</strong>&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-sm text-white/30">X · @AdamWal89620299</p>
                <a href="https://x.com/AdamWal89620299/status/2036738702744109295" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold hover:underline">source →</a>
              </div>
            </div>
            <div className="bg-[#2D2D2D] rounded-xl p-8">
              <p className="text-white/70 leading-relaxed mb-4">
                &ldquo;Despite being post menopause, <strong className="text-white">I&rsquo;ve managed to increase muscle mass significantly.</strong>{" "}Hope it works as well for you as it does for me!&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-sm text-white/30">X · @RunchieC</p>
                <a href="https://x.com/RunchieC/status/2041405617928028301" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold hover:underline">source →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. MEET THE PRODUCT — centerstage
      ═══════════════════════════════════════════ */}
      <section id="how-it-works" className="relative py-24 md:py-36 px-6 bg-[#F5EDE0] overflow-hidden">
        <Blob variant={2} className="text-white/30 w-[500px] md:w-[700px] top-[5%] -right-[15%]" />
        <Blob variant={3} className="text-white/20 w-[400px] md:w-[600px] bottom-[10%] -left-[20%]" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Big product hero */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#F2A922] font-bold text-sm tracking-[0.25em] uppercase mb-4">the product</p>
            <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-extrabold text-[#2D2D2D] leading-[0.85] tracking-tight">
              meet <span className="text-[#F2A922]">zesty.</span>
            </h2>
          </div>

          {/* Product centerstage with annotation lines */}
          {/* Mobile: stacked layout */}
          <div className="md:hidden mb-16">
            <div className="relative w-64 h-80 mx-auto mb-8">
              <img src="/images/7-meet-zesty-bg.jpeg" alt="Meet zesty" className="w-full h-full rounded-xl object-cover" />
            </div>
            <div className="space-y-6 px-2">
              {[
                { label: "the cap", desc: "10g creatine sealed dry. Doesn\u2019t touch liquid until you twist.", color: "#F2A922" },
                { label: "the shot", desc: "Cold-pressed ginger + turmeric with piperine & electrolytes.", color: "#6B8F5E" },
                { label: "the ritual", desc: "Twist, press, shake, drink. 10 seconds.", color: "#2D2D2D" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                  <div>
                    <p className="font-extrabold text-[#2D2D2D] text-lg">{item.label}</p>
                    <p className="text-[#2D2D2D]/55 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: product with annotation lines extending outward */}
          <div className="hidden md:block mb-20 md:mb-28">
            <div className="relative max-w-5xl mx-auto" style={{ height: "600px" }}>

              {/* SVG annotation lines — dots on product, lines extending to labels */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
                {/* Cap: dot at top of product → line left to label */}
                <circle cx="480" cy="120" r="5" fill="#F2A922" />
                <circle cx="480" cy="120" r="9" fill="none" stroke="#F2A922" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="475" y1="120" x2="240" y2="120" stroke="#F2A922" strokeWidth="1" strokeOpacity="0.25" />

                {/* Shot: dot at middle of product → line right to label */}
                <circle cx="530" cy="340" r="5" fill="#6B8F5E" />
                <circle cx="530" cy="340" r="9" fill="none" stroke="#6B8F5E" strokeWidth="1" strokeOpacity="0.3" />
                <line x1="535" y1="340" x2="760" y2="340" stroke="#6B8F5E" strokeWidth="1" strokeOpacity="0.25" />

                {/* Ritual: dot at bottom → line left to label */}
                <circle cx="470" cy="490" r="5" fill="#2D2D2D" fillOpacity="0.4" />
                <circle cx="470" cy="490" r="9" fill="none" stroke="#2D2D2D" strokeWidth="1" strokeOpacity="0.15" />
                <line x1="465" y1="490" x2="240" y2="490" stroke="#2D2D2D" strokeWidth="1" strokeOpacity="0.1" />
              </svg>

              {/* Center product image */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[26rem] lg:w-96 lg:h-[30rem] z-10">
                <img src="/images/7-meet-zesty-bg.jpeg" alt="Meet zesty" className="w-full h-full rounded-2xl object-cover shadow-2xl" />
              </div>

              {/* Label: the cap — top-left, aligned with annotation line */}
              <div className="absolute left-0 lg:left-[2%] z-30" style={{ top: "80px" }}>
                <p className="font-extrabold text-[#2D2D2D] text-2xl tracking-tight">the cap</p>
                <p className="text-[#2D2D2D]/50 text-sm leading-relaxed mt-1 max-w-[14rem]">10g creatine sealed dry. Doesn&rsquo;t touch liquid until you twist.</p>
                <HandNote className="mt-3 block rotate-[-4deg]" arrow="right">
                  this is the innovation
                </HandNote>
              </div>

              {/* Label: the shot — right, aligned with annotation line */}
              <div className="absolute right-0 lg:right-[2%] z-30" style={{ top: "300px" }}>
                <p className="font-extrabold text-[#2D2D2D] text-2xl tracking-tight">the shot</p>
                <p className="text-[#2D2D2D]/50 text-sm leading-relaxed mt-1 max-w-[14rem]">Cold-pressed ginger + turmeric with piperine &amp; electrolytes.</p>
              </div>

              {/* Label: the ritual — bottom-left, aligned with annotation line */}
              <div className="absolute left-0 lg:left-[2%] z-30" style={{ top: "450px" }}>
                <p className="font-extrabold text-[#2D2D2D] text-2xl tracking-tight">the ritual</p>
                <p className="text-[#2D2D2D]/50 text-sm leading-relaxed mt-1 max-w-[14rem]">Twist, press, shake, drink. 10 seconds.</p>
                <HandNote className="mt-3 block rotate-[2deg]">
                  before coffee, before breakfast
                </HandNote>
              </div>
            </div>
          </div>

          {/* How it works — 3 steps */}
          <div>
            <h3 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] text-center mb-4 tracking-tight">
              twist. press. <span className="text-[#F2A922]">shake.</span>
            </h3>
            <HandNote as="div" className="text-center mt-2 mb-14 md:mb-20 rotate-[-2deg]">your entire routine in 10 seconds.</HandNote>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { num: "01", name: "twist", desc: "break the seal. the creatine has been sealed dry, fresh and full-strength until this moment.", img: "/images/8-step-twist.jpeg" },
                { num: "02", name: "press", desc: "creatine drops through into the ginger shot. 10g, exactly, every time. no measuring.", img: "/images/9-step-press.jpeg" },
                { num: "03", name: "shake + drink", desc: "one shot. done before your coffee's ready. brain fuel, muscle fuel, anti-inflammatory. 10 seconds.", img: "/images/10-step-drink.jpeg" },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <p className="text-[#F2A922] text-6xl md:text-7xl font-extrabold tracking-tight mb-3">{step.num}</p>
                  <p className="font-extrabold text-[#2D2D2D] text-xl mb-3">{step.name}</p>
                  <p className="text-[#2D2D2D]/55 text-base leading-relaxed mb-6">{step.desc}</p>
                  <img src={step.img} alt={step.name} className="rounded-xl h-52 md:h-64 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. COMPARISON TABLE — fair coloring, + gummies
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              more for you.
              <br />
              <span className="text-[#F2A922]">see the difference.</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            {/* Table header */}
            <div className="grid grid-cols-[1fr_4.5rem_4.5rem_4.5rem_4.5rem] md:grid-cols-[1fr_7rem_7rem_7rem_7rem] gap-2 mb-4 items-end min-w-[480px]">
              <div />
              <div className="text-center">
                <p className="text-[#F2A922] font-extrabold text-sm md:text-base">zesty</p>
              </div>
              <div className="text-center">
                <p className="text-[#2D2D2D]/50 font-bold text-sm">powder</p>
              </div>
              <div className="text-center">
                <p className="text-[#2D2D2D]/50 font-bold text-sm">pills</p>
              </div>
              <div className="text-center">
                <p className="text-[#2D2D2D]/50 font-bold text-sm">gummies</p>
              </div>
            </div>

            {/* Table rows */}
            {[
              { feature: "Clinical 10g dose", zesty: true, powder: true, pills: false, gummies: false },
              { feature: "No measuring needed", zesty: true, powder: false, pills: true, gummies: true },
              { feature: "Stays fresh until use", zesty: true, powder: false, pills: false, gummies: false },
              { feature: "Added ginger + turmeric", zesty: true, powder: false, pills: false, gummies: false },
              { feature: "Electrolytes for absorption", zesty: true, powder: false, pills: false, gummies: false },
              { feature: "Actually tastes good", zesty: true, powder: false, pills: false, gummies: true },
              { feature: "10-second daily ritual", zesty: true, powder: false, pills: true, gummies: true },
              { feature: "No shaker bottle", zesty: true, powder: false, pills: true, gummies: true },
            ].map((row) => (
              <div key={row.feature} className="grid grid-cols-[1fr_4.5rem_4.5rem_4.5rem_4.5rem] md:grid-cols-[1fr_7rem_7rem_7rem_7rem] gap-2 py-4 border-b border-[#2D2D2D]/[0.06] items-center min-w-[480px]">
                <p className="text-sm md:text-base font-medium text-[#2D2D2D]">{row.feature}</p>
                {[row.zesty, row.powder, row.pills, row.gummies].map((val, i) => (
                  <div key={i} className="flex justify-center">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-sm font-bold ${
                      val
                        ? i === 0
                          ? "bg-[#F2A922]/15 text-[#F2A922]"
                          : "bg-[#6B8F5E]/10 text-[#6B8F5E]"
                        : "bg-[#2D2D2D]/[0.03] text-[#2D2D2D]/15"
                    }`}>
                      {val ? "✓" : "—"}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <HandNote className="mt-8 block text-center rotate-[-2deg]">
            no mixing, no mess, no excuses
          </HandNote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. INGREDIENTS — editorial, less card-heavy
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6 bg-[#F5EDE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              every ingredient
              <br />
              <span className="text-[#F2A922]">targets a symptom.</span>
            </h2>
            <p className="text-[#2D2D2D]/55 mt-4 text-sm md:text-base">not random supplements. a system designed for menopause.</p>
          </div>

          {/* Ingredient grid — image + text + symptom tags */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-16">
            {[
              { name: "Cold-pressed ginger", why: <>A natural anti-inflammatory that helps with the joint pain and digestive issues many women experience during menopause. Also supports immune function when your body is under hormonal stress.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[5]</a></>, symptoms: ["joint pain", "bloating", "nausea"], img: "/images/11-ginger.jpeg" },
              { name: "Turmeric + piperine", why: <>Curcumin fights the chronic inflammation that spikes during menopause — linked to joint stiffness, mood swings, and brain fog.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[5]</a> Piperine boosts turmeric absorption by 2,000%.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[6]</a></>, symptoms: ["inflammation", "joint stiffness", "mood"], img: "/images/12-turmeric.jpeg" },
              { name: "Lemon, pineapple, orange", why: <>Women lose up to 30% of skin collagen in the first 5 years after menopause. Vitamin C is essential for collagen synthesis — fighting the skin thinning estrogen leaves behind.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[10]</a> Bromelain from pineapple is a proven anti-inflammatory for the joint stiffness that spikes during menopause.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[5]</a> No added sugar.</>, symptoms: ["skin thinning", "joint pain", "inflammation"], img: "/images/13-citrus.jpeg" },
              { name: "Electrolytes", why: <>Sodium, potassium, magnesium. Estrogen decline directly disrupts electrolyte balance — magnesium deficiency in postmenopausal women is linked to fatigue, muscle cramps, mood changes, and even heart rhythm issues.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[11]</a> Electrolytes also improve creatine uptake into your muscles.</>, symptoms: ["fatigue", "muscle cramps", "hot flashes"], img: "/images/14-electrolytes.jpeg" },
            ].map((item) => (
              <div key={item.name}>
                <img src={item.img} alt={item.name} className="h-48 md:h-56 rounded-xl mb-5 w-full object-cover" />
                <p className="font-extrabold text-[#2D2D2D] text-xl mb-2">{item.name}</p>
                <p className="text-[#2D2D2D]/55 leading-relaxed mb-3 text-base">{item.why}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.symptoms.map((s) => (
                    <span key={s} className="text-sm font-bold uppercase tracking-[0.08em] text-[#C96B20] bg-[#C96B20]/[0.1] px-2.5 py-1 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* The Cap — hero section */}
          <div className="bg-[#2D2D2D] rounded-2xl overflow-hidden relative" style={{ minHeight: "440px" }}>
            {/* Curved cream split — a large circle whose left arc creates the dividing curve */}
            <svg className="absolute inset-0 w-full h-full z-[1]" preserveAspectRatio="none" viewBox="0 0 1000 440">
              <clipPath id="card-clip">
                <rect x="0" y="0" width="1000" height="440" />
              </clipPath>
              {/* Large circle positioned so only its left arc is visible inside the card */}
              <circle cx="900" cy="220" r="340" fill="#FFFDF7" fillOpacity="0.12" clipPath="url(#card-clip)" />
            </svg>

            {/* Text content — larger, takes up more horizontal space */}
            <div className="relative z-10 p-10 md:p-14 lg:p-16 max-w-lg lg:max-w-xl">
              <p className="text-[#F2A922] font-bold text-sm tracking-[0.2em] uppercase mb-5">the cap</p>
              <p className="text-[5.5rem] md:text-[8rem] font-extrabold text-[#F2A922] leading-none tracking-tighter mb-3">10g</p>
              <p className="text-white font-extrabold text-2xl md:text-3xl mb-3">creatine monohydrate</p>
              <p className="text-white/35 text-sm mb-5">(the most studied form — targets brain fog, fatigue &amp; muscle loss)</p>
              <p className="text-white/50 leading-relaxed text-base md:text-lg">
                Sealed dry. Zero fillers. Zero degradation. Doesn&rsquo;t touch liquid until you twist. One of the most studied supplements for the symptoms menopause causes — and you&rsquo;re probably not taking it yet.
              </p>
              <HandNote className="mt-6 text-white/40 rotate-[-3deg] block">
                freshness is everything
              </HandNote>
            </div>
            {/* Cap image — positioned bottom-right, large and prominent */}
            <div className="absolute -bottom-4 right-0 w-[55%] md:w-[45%] h-[85%] md:h-[105%] z-[2]">
              <img src="/images/15-cap-detail-no-bg.png" alt="Dosing cap with creatine" className="w-full h-full object-contain object-bottom drop-shadow-2xl" />
            </div>
          </div>

          <p className="text-sm text-[#2D2D2D]/40 mt-8 text-center">
            no added sugar · no preservatives · recyclable PET bottle + PP cap · designed in belgium
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. THE SCIENCE
      ═══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Blob variant={2} className="text-[#F5EDE0]/40 w-[600px] md:w-[800px] top-[15%] -left-[20%]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold text-[#F2A922] leading-none tracking-tighter">
              500+
            </p>
            <p className="text-xl md:text-2xl font-extrabold text-[#2D2D2D] mt-2">peer-reviewed studies on creatine</p>
            <p className="text-[#2D2D2D]/40 text-sm mt-2">more studied than vitamin D. more studied than fish oil.</p>
            <HandNote className="mt-4 block rotate-[2deg]">
              this isn&rsquo;t new science, it&rsquo;s settled science
            </HandNote>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D2D2D] mb-5 leading-snug">
                the most studied supplement in <span className="text-[#F2A922]">nutrition science</span>
              </h3>
              <p className="text-[#2D2D2D]/65 leading-relaxed mb-4">
                Creatine isn&rsquo;t new. Researchers have studied it for decades: brain health, muscle strength, bone density, and energy — including studies specifically on postmenopausal women.
              </p>
              <p className="text-[#2D2D2D]/65 leading-relaxed">
                The challenge has always been the format: powders that taste terrible, gummies that under-deliver, and pills you forget to take. None of them were built for menopause. zesty was.
              </p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/28615996/" target="_blank" rel="noopener noreferrer" className="text-[#F2A922] font-bold text-sm mt-6 inline-block hover:underline">
                ISSN position stand on creatine →
              </a>
            </div>

            {/* Dose chart — lighter container */}
            <div className="bg-[#F5EDE0] rounded-xl p-8 md:p-10">
              <h4 className="font-extrabold text-[#2D2D2D] text-lg mb-6">why 10g, not 3 or 5</h4>
              {[
                { dose: "3g", label: "EU minimum for performance claims", pct: "30%" },
                { dose: "5g", label: "standard maintenance (muscle)", pct: "50%" },
                { dose: "10g", label: "menopause support · brain clarity · results in 2 weeks", pct: "100%", active: true },
              ].map((d) => (
                <div key={d.dose} className="mb-7 last:mb-0">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className={`text-base font-bold ${d.active ? "text-[#F2A922]" : "text-[#2D2D2D]/50"}`}>{d.dose}/day</span>
                    <span className={`text-sm text-right max-w-[65%] ${d.active ? "text-[#F2A922] font-semibold" : "text-[#2D2D2D]/45"}`}>{d.label}</span>
                  </div>
                  <div className="bg-white rounded-full h-3 overflow-hidden">
                    <div className={`h-full rounded-full ${d.active ? "bg-[#F2A922]" : "bg-[#2D2D2D]/25"}`} style={{ width: d.pct }} />
                  </div>
                </div>
              ))}
              <p className="text-sm text-[#2D2D2D]/25 mt-6">
                <a href="https://pubmed.ncbi.nlm.nih.gov/30086660/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D2D2D]/40 transition-colors">Dolan et al., 2019</a> · <a href="https://pubmed.ncbi.nlm.nih.gov/33800439/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D2D2D]/40 transition-colors">Smith-Ryan et al., 2021</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. PRICING
      ═══════════════════════════════════════════ */}
      <section id="pricing" className="relative py-24 md:py-36 px-6 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              try it for <span className="text-[#F2A922]">two weeks.</span>
            </h2>
            <p className="text-[#2D2D2D]/55 mt-4 text-sm md:text-base max-w-md mx-auto">
              that&rsquo;s how long it takes for creatine to build up in your system.<a href="#sources" className="text-[#F2A922] font-bold text-xs ml-0.5 no-underline hover:underline">[9]</a> most women feel the fog lift and energy return within 14 days.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Starter */}
            <div className="gsap-pricing-card bg-[#FFFDF7] rounded-2xl overflow-hidden border border-[#2D2D2D]/[0.06] flex flex-col">
              <div className="flex items-center justify-center h-64 md:h-72 relative overflow-hidden">
                <img src="/images/17-pricing-starter-packaging.jpeg" alt="14-day starter" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <p className="text-sm text-[#2D2D2D]/60 font-bold mb-1">14-day starter</p>
                <p className="text-5xl md:text-6xl font-extrabold text-[#2D2D2D] tracking-tight mb-2">€42</p>
                <p className="text-sm text-[#2D2D2D]/60 mb-1">€3.00/shot</p>
                <p className="text-sm text-[#2D2D2D]/40 mb-8">+ €4.95 shipping</p>
                <a href="/waitlist?plan=14" className="w-full bg-[#2D2D2D] text-[#FFFDF7] font-bold py-4 rounded-full text-center block mt-auto transition-all hover:bg-[#2D2D2D]/85 hover:shadow-lg">
                  get starter
                </a>
                <p className="text-sm text-[#2D2D2D]/35 text-center mt-3 font-medium tracking-wide uppercase">ships within 3 days</p>
                <HandNote className="mt-2 text-center block text-base">
                  give it 2 weeks to feel it
                </HandNote>
              </div>
            </div>

            {/* Monthly — featured */}
            <div className="gsap-pricing-card bg-[#2D2D2D] rounded-2xl overflow-hidden shadow-xl relative flex flex-col">
              <span className="absolute top-5 right-5 bg-[#F2A922] text-[#2D2D2D] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider z-10">
                best value
              </span>
              <div className="flex items-center justify-center h-64 md:h-72 relative border-b border-white/[0.08] overflow-hidden">
                <img src="/images/17-pricing-monthly-packaging.jpeg" alt="30-day supply" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <p className="text-sm text-white/50 font-bold mb-1">30-day supply</p>
                <p className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">€79</p>
                <p className="text-sm text-white/50 mb-1">€2.63/shot</p>
                <p className="text-sm text-white/30 mb-8">free shipping</p>
                <a href="/waitlist?plan=30" className="w-full bg-[#F2A922] text-[#2D2D2D] font-bold py-4 rounded-full text-center block mt-auto transition-all hover:bg-[#D4921E] hover:shadow-lg">
                  get monthly
                </a>
                <p className="text-sm text-white/25 text-center mt-3 font-medium tracking-wide uppercase">ships within 3 days</p>
                <HandNote className="mt-2 text-center block text-base text-white/40">
                  the daily dose for lasting results
                </HandNote>
              </div>
            </div>
          </div>

          {/* Price objection — inline, no card */}
          <div className="mt-12 text-center">
            <p className="text-lg font-extrabold text-[#2D2D2D] mb-2">&ldquo;€3 a day for a drink?&rdquo;</p>
            <p className="text-[#2D2D2D]/55 leading-relaxed max-w-lg mx-auto">
              Less than your afternoon coffee. Except this one actually fixes the reason you need that coffee.
            </p>
          </div>

          <p className="text-center text-sm text-[#2D2D2D]/30 mt-8 font-medium">
            free shipping on 30-packs · cancel anytime · designed for menopause
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          11. FAQ
      ═══════════════════════════════════════════ */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mb-10 tracking-tight">
            frequently asked questions
          </h2>
          {faqs.map((faq) => <FaqItem key={faq.q} q={faq.q} a={faq.a} />)}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER — larger, with CTA, oversized brand below
      ═══════════════════════════════════════════ */}
      <footer className="bg-[#2D2D2D] px-6 overflow-hidden relative">
        {/* Main footer content */}
        <div className="max-w-5xl mx-auto pt-20 md:pt-28 pb-16 relative z-10">
          {/* CTA card with lifestyle background */}
          <div className="mb-16 md:mb-20 rounded-2xl overflow-hidden relative" style={{ minHeight: "420px" }}>
            {/* Background image */}
            <img src="/images/18-footer-lifestyle.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#2D2D2D]/75" />
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 md:py-20">
              <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold text-white leading-[0.95] tracking-tight mb-4">
                menopause took something.<br />take it back.
              </h2>
              <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-8">
                join thousands of women choosing zesty. the functional menopause wellness shot with creatine.
              </p>
              <a
                href="/waitlist?plan=30"
                className="inline-flex items-center gap-3 bg-[#F2A922] text-[#2D2D2D] font-bold text-base md:text-lg px-10 py-4 md:py-5 rounded-full transition-all hover:bg-[#D4921E] hover:shadow-xl hover:scale-[1.02]"
              >
                order now
              </a>
              <p className="text-white/30 text-sm mt-4">from €2.63/shot · free shipping on 30-day plans</p>
            </div>
          </div>

          {/* Footer links + info */}
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
              <div>
                <p className="text-2xl font-extrabold text-[#F2A922] tracking-tight mb-2">zesty</p>
                <p className="text-white/30 text-sm">the functional menopause wellness shot · 10g creatine</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-white/35">
                <a href="#" className="hover:text-white/60 transition-colors">privacy policy</a>
                <a href="#" className="hover:text-white/60 transition-colors">terms</a>
                <a href="#" className="hover:text-white/60 transition-colors">contact</a>
                <a href="#" className="hover:text-white/60 transition-colors">instagram</a>
              </div>
            </div>
            {/* AG1-style disclaimer + study references — centered, full width */}
            <div className="text-white/40 text-sm leading-relaxed space-y-4 text-center max-w-5xl mx-auto">
              <p id="sources" className="text-white/50 text-sm font-bold uppercase tracking-[0.15em] mb-3 scroll-mt-8">sources &amp; disclaimers</p>
              <p>
                zesty is a food supplement. these statements describe published research findings and are not intended as health claims.
                this product is not intended to diagnose, treat, cure, or prevent any disease. food supplements should not be used as a substitute
                for a varied and balanced diet and a healthy lifestyle. consult a healthcare professional before use if you are pregnant,
                breastfeeding, or taking medication.
              </p>
              <div className="space-y-2 text-left">
                <p><span className="text-white/55 font-bold">[1]</span> Creatine supplementation improves cognitive performance, especially under stress and sleep deprivation — Xu et al., <em>Frontiers in Nutrition</em>, 2024.</p>
                <p><span className="text-white/55 font-bold">[2]</span> Creatine supplementation and lean tissue mass in women — Chilibeck et al., <em>Nutrients</em>, 2023.</p>
                <p><span className="text-white/55 font-bold">[3]</span> Effects of creatine on exercise performance and body composition in females — Smith-Ryan et al., <em>Nutrients</em>, 2021.</p>
                <p><span className="text-white/55 font-bold">[4]</span> Women produce 70–80% less endogenous creatine than men — Brosnan &amp; Brosnan, <em>Amino Acids</em>, 2016.</p>
                <p><span className="text-white/55 font-bold">[5]</span> Curcumin has anti-inflammatory properties and may support joint health — Hewlings &amp; Kalman, <em>Foods</em>, 2017.</p>
                <p><span className="text-white/55 font-bold">[6]</span> Piperine enhances curcumin bioavailability by 2,000% — Shoba et al., <em>Planta Medica</em>, 1998.</p>
                <p><span className="text-white/55 font-bold">[7]</span> Women lose significant muscle mass during the menopausal transition — Maltais et al., <em>Maturitas</em>, 2009.</p>
                <p><span className="text-white/55 font-bold">[8]</span> An estimated 1.5 billion women worldwide will be postmenopausal by 2030 — World Health Organization.</p>
                <p><span className="text-white/55 font-bold">[9]</span> Muscle creatine saturation at 10g/day occurs within approximately 10–14 days, compared to 5–7 days at 20g/day or ~28 days at 3g/day — Hultman et al., <em>Journal of Applied Physiology</em>, 1996; Kreider et al., <em>JISSN</em>, 2017.</p>
                <p><span className="text-white/55 font-bold">[10]</span> Skin collagen declines rapidly after menopause, with ~30% lost in the first 5 years; vitamin C is essential for collagen biosynthesis — Brincat et al., <em>British Journal of Obstetrics and Gynaecology</em>, 1987; Pullar et al., <em>Nutrients</em>, 2017.</p>
                <p><span className="text-white/55 font-bold">[11]</span> Magnesium deficiency in postmenopausal women linked to heart rhythm changes, impaired glucose tolerance, and neuroinflammation — Nielsen et al., <em>Journal of the American College of Nutrition</em>, 2007; Park et al., <em>Journal of Neuroinflammation</em>, 2021.</p>
              </div>
              <p>
                creatine is the most studied sports nutrition supplement in history, with over 4,000 peer-reviewed publications.
                the european food safety authority (EFSA) recognises creatine&rsquo;s role in supporting physical performance during
                short-term, high-intensity exercise.
              </p>
            </div>
            <p className="text-white/25 text-sm mt-8 text-center">designed in belgium · recyclable packaging · drinkzesty.be</p>
          </div>
        </div>

        {/* Oversized brand mark — sits below all content, standalone */}
        <div className="relative z-0 text-center pb-4 -mt-8">
          <p className="text-[10rem] md:text-[16rem] lg:text-[22rem] font-extrabold text-white/[0.03] leading-none tracking-tighter select-none pointer-events-none">
            zesty
          </p>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════
          STICKY CTA BAR
      ═══════════════════════════════════════════ */}
      <div className={`fixed bottom-0 left-0 right-0 bg-[#FFFDF7]/95 backdrop-blur-md border-t border-[#2D2D2D]/10 transition-all duration-300 z-50 ${showSticky ? "translate-y-0" : "translate-y-full pointer-events-none"}`}>
        <div className="max-w-4xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-[#2D2D2D]">try it for 2 weeks · from €2.63/shot</p>
            <p className="text-sm text-[#2D2D2D]/40 hidden sm:block">free shipping on 30-packs</p>
          </div>
          <a href="/waitlist?plan=30" className="bg-[#2D2D2D] text-[#FFFDF7] font-bold text-sm px-7 py-3 rounded-full transition-all hover:bg-[#2D2D2D]/85 hover:shadow-md shrink-0">
            order now
          </a>
        </div>
      </div>
    </main>
  );
}
