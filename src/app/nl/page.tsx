"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Droplets, FlaskConical, Leaf, Recycle, ShieldCheck } from "lucide-react";
import { SourceRef } from "@/components/SourceRef";
import posthog from "posthog-js";

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
  { q: "wacht, wat is creatine eigenlijk?", a: "Creatine is een stof die je lichaam van nature aanmaakt. Je brein en spieren hebben het nodig voor energie. Tijdens perimenopauze en menopauze maakt je lichaam er veel minder van, en dat hangt rechtstreeks samen met de brain fog, vermoeidheid en het spierverlies waar zoveel vrouwen last van hebben." },
  { q: "hoe helpt creatine bij menopauze?", a: "Veel menopauze-klachten (brain fog, vermoeidheid, spierverlies, weinig energie) lijken verdacht veel op creatine-tekort. Als je oestrogeen daalt, maakt je lichaam ook minder creatine aan. Door creatine aan te vullen geef je terug wat menopauze afpakt: energie voor je brein, kracht voor je spieren." },
  { q: "is creatine veilig tijdens menopauze?", a: "Meer dan 500 peer-reviewed studies (ISSN position stand, Kreider et al., 2017). Consistent veilig bevonden voor gezonde volwassenen bij de aanbevolen dosering. Het wordt al tientallen jaren onderzocht bij alle leeftijdsgroepen, inclusief postmenopauzale vrouwen." },
  { q: "word ik zwaarder van creatine?", a: "Creatine trekt water naar je spieren, dus je ziet misschien 1 tot 2 kg erbij in de eerste week. Dat is water ín de spier (niet opgeblazen), geen vet. Het stabiliseert snel. Veel vrouwen in de menopauze merken juist dat het hun spiermassa helpt behouden." },
  { q: "hoe smaakt het?", a: "Een pittige gembershot met warme kurkuma en frisse citrus. Citroen, ananas en sinaasappel. Het is echt een koudgeperste shot. Niet zoet. Niet medicinaal. Gewoon scherp en fris." },
  { q: "hoe verschilt dit van een pot creatine?", a: "Een pot geeft je poeder en een maatlepel. zesty geeft je 10g droog verzegeld in de dop, een koudgeperste shot met zwarte peper-extract voor opname en elektrolyten voor transport. Plus gember en kurkuma tegen menopauze-ontsteking. Geen mengen, geen afmeten." },
  { q: "hoe lang duurt het voor ik iets merk?", a: "Bij 10g/dag zit je creatine na zo'n 2 weken op peil. Dat is sneller dan de 28 dagen die je nodig hebt bij een lagere dosis [Hultman et al., 1996]. Sommige vrouwen merken meer energie en minder brain fog al in de eerste week, anderen rond week 3-4. De 14-daagse starter is precies om die reden zo ontworpen." },
  { q: "is 10g niet te veel?", a: "~95% van je lichaamscreatine zit in je spieren, dus standaard 3-5g verzadigt vooral je spiermassa. Je brein bevat de overige ~5%, en dat is precies wat menopauze uitput. Onderzoekers die cognitieve voordelen bij vrouwen bestuderen, gebruiken 10g+ om het brein te bereiken [Dechent et al., 1999; Smith-Ryan et al., 2021]. Ruim binnen de onderzochte veilige marges." },
  { q: "helpt creatine ook voor het brein op lange termijn?", a: "Onderzoekers bestuderen creatine actief als beschermende factor voor het brein bij veroudering. Een pilotstudie bij Alzheimerpatiënten (Smith et al., 2025) toonde meetbare verbetering in cognitie na creatinesuppletie. Het onderzoek is nog vroeg, maar de richting is hoopgevend, vooral omdat creatine al bewezen veilig is op lange termijn." },
];

function FaqItem({ q, a, last = false }: { q: string; a: string; last?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={last ? "" : "border-b border-[#2D2D2D]/10"}>
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

  /* ── PostHog: section scroll tracking ── */
  useEffect(() => {
    const seen = new Set<string>();
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const name = (entry.target as HTMLElement).dataset.section!;
          if (entry.isIntersecting && !seen.has(name)) {
            seen.add(name);
            posthog.capture("section_viewed", { section: name, locale: "nl" });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const trackCta = (location: string, plan: string) => {
    posthog.capture("cta_clicked", { location, plan, locale: "nl" });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "zesty",
    url: "https://drinkzesty.be",
    logo: "https://drinkzesty.be/icon.svg",
    description: "De dagelijkse creatine shot voor vrouwen in de menopauze. 10g creatine, koudgeperst met gember, kurkuma en elektrolyten.",
    sameAs: [],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "zesty creatine shot",
    description: "10g creatine monohydraat in een koudgeperste gember & kurkuma shot. Voor vrouwen in de menopauze.",
    brand: { "@type": "Brand", name: "zesty" },
    url: "https://drinkzesty.be/nl",
    image: "https://drinkzesty.be/images/2-hero-product-cutout.png",
    offers: [
      {
        "@type": "Offer",
        name: "14-daagse starter",
        price: "42.00",
        priceCurrency: "EUR",
        availability: "https://schema.org/PreOrder",
        url: "https://drinkzesty.be/waitlist?plan=14",
      },
      {
        "@type": "Offer",
        name: "30-daagse maandelijks",
        price: "79.00",
        priceCurrency: "EUR",
        availability: "https://schema.org/PreOrder",
        url: "https://drinkzesty.be/waitlist?plan=30",
      },
    ],
    category: "Voedingssupplementen",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Creatine monohydraat", value: "10g" },
      { "@type": "PropertyValue", name: "Formaat", value: "Koudgeperste shot" },
      { "@type": "PropertyValue", name: "Doelgroep", value: "Vrouwen in de menopauze" },
    ],
    about: [
      { "@type": "Thing", name: "Creatine", sameAs: "https://www.wikidata.org/wiki/Q186037" },
      { "@type": "Thing", name: "Menopause", sameAs: "https://www.wikidata.org/wiki/Q131149" },
    ],
    mentions: [
      { "@type": "Thing", name: "Curcumin", sameAs: "https://www.wikidata.org/wiki/Q312266" },
      { "@type": "Thing", name: "Ginger", sameAs: "https://www.wikidata.org/wiki/Q35625" },
      { "@type": "Thing", name: "Estrogen", sameAs: "https://www.wikidata.org/wiki/Q277954" },
    ],
  };

  return (
    <main className="overflow-x-hidden bg-[#FFFDF7]">
      {/* JSON-LD schemas — all developer-controlled content, no user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-[#FFFDF7]/90 backdrop-blur-md border-b border-[#2D2D2D]/5">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
          <a href="/nl" className="text-lg font-extrabold text-[#F2A922] tracking-tight">zesty</a>
          <div className="flex items-center gap-5">
            <a href="/nl/blog" className="text-sm font-bold text-[#2D2D2D]/40 hover:text-[#2D2D2D] transition-colors hidden sm:block">blog</a>
            <a href="/nl/veelgestelde-vragen" className="text-sm font-bold text-[#2D2D2D]/40 hover:text-[#2D2D2D] transition-colors hidden sm:block">faq</a>
            <a href="#pricing" onClick={() => trackCta("nav", "30")} className="text-sm font-bold bg-[#2D2D2D] text-[#FFFDF7] px-5 py-2 rounded-full hover:bg-[#2D2D2D]/85 transition-colors">bestel nu</a>
            <div className="flex items-center gap-0.5 border border-[#2D2D2D]/10 rounded-full px-0.5 py-0.5">
              <a href="/" className="px-2.5 py-1 text-xs font-bold text-[#2D2D2D]/40 hover:text-[#2D2D2D] rounded-full transition-colors">EN</a>
              <span className="px-2.5 py-1 text-xs font-bold text-[#FFFDF7] bg-[#2D2D2D] rounded-full">NL</span>
            </div>
          </div>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          1. HERO — Full-bleed immersive
      ═══════════════════════════════════════════ */}
      <section data-section="hero" className="min-h-[100dvh] relative flex flex-col items-center justify-center px-6 pt-20 md:pt-24 pb-16 overflow-hidden">

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
            de dagelijkse <span className="text-[#F2A922]">creatine</span> shot tegen
            <br className="hidden md:block" />
            {" "}brain fog, moeheid en spierverlies.
          </h1>
          <p className="text-xl md:text-2xl text-[#2D2D2D] font-bold mt-4 md:mt-5 tracking-tight">
            <span className="text-2xl md:text-3xl font-extrabold">10g creatine</span>{" "}per shot. Gemaakt voor vrouwen die meer verdienen dan &ldquo;dat hoort bij je leeftijd.&rdquo;
          </p>
          <p className="text-sm md:text-base text-[#2D2D2D]/50 font-medium mt-2 md:mt-3 max-w-lg mx-auto leading-relaxed">
            een koudgeperste gember &amp; kurkuma creatine shot tegen de brain fog, vermoeidheid en het spierverlies van de overgang.
          </p>
        </div>

        {/* Product — large, centered */}
        <div className="gsap-hero-intro relative z-10 flex justify-center mb-2 md:mb-4">
          <div ref={heroProductRef} className="relative w-64 h-80 md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[30rem]">
            <img src="/images/2-hero-product-cutout.png" alt="zesty fles" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
        </div>

        {/* Stat pills — horizontal below product */}
        <div className="gsap-hero-intro relative z-10 flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
          {[
            { val: "gember", lbl: "+ kurkuma" },
            { val: "10g", lbl: "creatine per shot" },
            { val: "elektrolyten", lbl: "voor opname" },
            { val: "0g", lbl: "suiker" },
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
            href="#pricing"
            onClick={() => trackCta("hero", "30")}
            className="inline-flex items-center gap-3 bg-[#2D2D2D] text-[#FFFDF7] font-bold text-base md:text-lg px-10 py-4 md:py-5 rounded-full transition-all hover:bg-[#2D2D2D]/85 hover:shadow-xl hover:scale-[1.02]"
          >
            <span className="w-6 h-6 rounded-full bg-[#F2A922] flex items-center justify-center text-[#2D2D2D] text-xs">↗</span>
            probeer het 14 dagen
          </a>
          <p className="text-[#2D2D2D]/50 text-sm mt-4 font-medium">vanaf €2,63/shot · gratis verzending op 30-packs</p>
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
      <section data-section="trust-strip" className="bg-[#F5EDE0] py-8 md:py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {[
            { label: "koudgeperst", icon: <Droplets className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "wetenschappelijk onderbouwd", icon: <FlaskConical className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "geen kunstmatige toevoegingen", icon: <Leaf className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "gerecyclede flessen", icon: <Recycle className="w-6 h-6" strokeWidth={1.5} /> },
            { label: "geen toegevoegde suiker", icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} /> },
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
      <section data-section="empathy" className="relative py-28 md:py-40 px-6 overflow-hidden">
        <Blob variant={3} className="text-[#F5EDE0]/50 w-[500px] md:w-[800px] -top-[10%] -left-[20%]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="gsap-empathy-headline text-center mb-16 md:mb-24">
            <p className="text-[#2D2D2D]/40 font-bold text-sm tracking-[0.25em] uppercase mb-4">perimenopauze &amp; menopauze</p>
            <h2 className="text-[2.5rem] md:text-[4.5rem] lg:text-[6rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight max-w-4xl mx-auto">
              je voelde je
              <br />
              <span className="text-[#F2A922]/50">anders.</span>
            </h2>
            <p className="text-[#2D2D2D]/45 text-base md:text-base mt-5 max-w-lg mx-auto leading-relaxed">
              het begon rond je 40e. misschien eerder. de klachten kwamen sluipend, en niemand vertelde je wat eraan zat te komen. het is niet gewoon ouder worden. het is menopauze.
            </p>
            <HandNote className="mt-5 block rotate-[-3deg]">
              waarom heeft niemand me dit eerder verteld?
            </HandNote>
          </div>

          {/* Symptom diagram — central image, symptoms in circle with connecting lines */}

          {/* Mobile: stacked list */}
          <div className="md:hidden space-y-6">
            {[
              { icon: <IconBrainFog className="w-8 h-8 text-[#F2A922]" />, title: "menopauze brain fog", desc: <>de woorden zijn er, je kunt ze gewoon niet vinden. oestrogeen daalt, en je helderheid daalt mee.<SourceRef n={1} /></> },
              { icon: <IconBattery className="w-8 h-8 text-[#F2A922]" />, title: "extreme moeheid", desc: <>8 uur geslapen en nog steeds doodmoe. hormonale veranderingen putten je energie op celniveau uit.<SourceRef n={3} /></> },
              { icon: <IconStrength className="w-8 h-8 text-[#F2A922]" />, title: "spierverlies &amp; minder kracht", desc: <>minder spier, meer pijn. dalend oestrogeen versnelt spierverlies na je 40e.<SourceRef n={7} /></> },
              { icon: <IconFocus className="w-8 h-8 text-[#F2A922]" />, title: "concentratieproblemen", desc: <>dezelfde mail drie keer lezen. verminderde concentratie is een van de meest voorkomende menopauze-klachten.<SourceRef n={1} /></> },
            ].map((s) => (
              <div key={s.title} className="flex items-start gap-4 border border-[#2D2D2D]/[0.06] rounded-xl p-5">
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
                  <p className="text-[#2D2D2D]/50 text-xl lg:text-2xl font-extrabold tracking-tight leading-snug text-center">je bent niet alleen.</p>
                  <p className="text-[#F2A922] text-[2.5rem] lg:text-[3.5rem] font-extrabold tracking-tight leading-none mt-2">1,5 mld</p>
                  <p className="text-[#2D2D2D]/30 text-sm lg:text-base font-medium mt-1.5 text-center leading-snug">vrouwen in menopauze<br />wereldwijd tegen 2030 <span className="text-[#F2A922]/60">[8]</span></p>
                </div>
                <HandNote as="div" className="text-center mt-4 rotate-[-2deg]">
                  bekend?
                </HandNote>
              </div>

              {/* Top-left: brain fog */}
              <div className="absolute left-0 top-0 max-w-[240px] z-10 border border-[#2D2D2D]/[0.06] rounded-xl p-5">
                <IconBrainFog className="w-10 h-10 text-[#F2A922] mb-2" />
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">menopauze brain fog</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">de woorden zijn er, je kunt ze gewoon niet vinden. oestrogeen daalt, en je helderheid daalt mee.<SourceRef n={1} /></p>
              </div>

              {/* Top-right: can't focus */}
              <div className="absolute right-0 top-0 max-w-[240px] text-right z-10 border border-[#2D2D2D]/[0.06] rounded-xl p-5">
                <div className="flex justify-end"><IconFocus className="w-10 h-10 text-[#F2A922] mb-2" /></div>
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">concentratieproblemen</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">dezelfde mail drie keer lezen. een van de meest voorkomende menopauze-klachten.<SourceRef n={1} /></p>
              </div>

              {/* Bottom-left: tired */}
              <div className="absolute left-0 bottom-0 max-w-[240px] z-10 border border-[#2D2D2D]/[0.06] rounded-xl p-5">
                <IconBattery className="w-10 h-10 text-[#F2A922] mb-2" />
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">extreme moeheid</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">hormonale veranderingen putten je energie op celniveau uit. 8 uur geslapen en nog steeds doodmoe.<SourceRef n={3} /></p>
              </div>

              {/* Bottom-right: losing strength */}
              <div className="absolute right-0 bottom-0 max-w-[240px] text-right z-10 border border-[#2D2D2D]/[0.06] rounded-xl p-5">
                <div className="flex justify-end"><IconStrength className="w-10 h-10 text-[#F2A922] mb-2" /></div>
                <p className="font-extrabold text-[#2D2D2D] text-xl leading-snug">spierverlies &amp; minder kracht</p>
                <p className="text-[#2D2D2D]/50 text-base mt-1">dalend oestrogeen versnelt spierverlies. dingen die je makkelijk deed, worden steeds moeilijker.<SourceRef n={7} /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE — "it's not just getting older"
      ═══════════════════════════════════════════ */}
      <Marquee texts={["de brain fog. de vermoeidheid. het spierverlies. menopauze put je creatine uit. neem het terug."]} dark />

      {/* ═══════════════════════════════════════════
          3. THE CREATINE GAP — Conversational reveal
      ═══════════════════════════════════════════ */}
      <section data-section="creatine-gap" className="relative py-28 md:py-40 px-6 bg-[#F5EDE0] overflow-hidden">
        <Blob variant={1} className="text-[#F2A922]/[0.05] w-[600px] md:w-[900px] -bottom-[20%] -right-[25%]" />

        <div className="max-w-2xl mx-auto relative z-10">
          <p className="text-[#F2A922] font-bold text-sm tracking-[0.25em] uppercase mb-6 text-center">het creatine-tekort bij menopauze</p>
          <h2 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight text-center mb-12 md:mb-16">
            er is een naam voor<br /><span className="text-[#2D2D2D]/25">wat je mist.</span>
          </h2>

          {/* Beat 1 — what it is */}
          <p className="text-[#2D2D2D] text-xl md:text-2xl leading-relaxed font-medium mb-8 md:mb-10">
            Je lichaam heeft creatine nodig. Het houdt je brein scherp, je spieren sterk en je energie stabiel. En menopauze breekt het af.
          </p>

          {/* Beat 2 — the gap */}
          <p className="text-[#2D2D2D]/60 text-lg md:text-xl leading-relaxed mb-8 md:mb-10">
            Vrouwen hebben sowieso al tot <strong className="text-[#2D2D2D] font-bold">80% lagere creatine-reserves</strong> dan mannen.<SourceRef n={4} /> En dan komt de perimenopauze: oestrogeen daalt, je creatine-aanmaak vertraagt, en het tekort groeit.<SourceRef n={3} /> Precies wanneer je brein en spieren het het hardst nodig hebben.
          </p>

          {/* Beat 3 — the connection */}
          <p className="text-[#2D2D2D]/60 text-lg md:text-xl leading-relaxed mb-10 md:mb-14">
            Daarom lijken de klachten (de brain fog, de moeheid, het spierverlies) zo veel op creatine-tekort. Dat is geen toeval.
          </p>

          {/* The emotional bridge */}
          <div className="mb-10 md:mb-14">
            <HandNote className="block rotate-[1deg]">
              menopauze neemt je creatine af. zesty geeft het terug.
            </HandNote>
          </div>

          {/* Blog link */}
          <a href="/nl/blog/creatine-menopauze-complete-gids" className="inline-block text-[#F2A922] font-bold text-sm hover:underline transition-colors mb-10 md:mb-14">
            lees de complete gids: creatine &amp; menopauze →
          </a>

          {/* The turn — reframe + zesty payoff */}
          <div className="text-center py-8 border-t border-b border-[#2D2D2D]/10">
            <p className="text-[#2D2D2D] text-2xl md:text-3xl font-extrabold leading-snug">
              je hebt geen extra wilskracht nodig.<br />je hebt meer creatine nodig.
            </p>
            <p className="text-[#2D2D2D]/50 text-base md:text-lg mt-4">
              <strong className="text-[#F2A922] font-bold">zesty</strong> vult het tekort aan. 10g creatine, één shot, elke ochtend.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. BENEFITS — Full-bleed, dark section
      ═══════════════════════════════════════════ */}
      <section data-section="benefits" className="bg-[#2D2D2D] relative py-24 md:py-36 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[#F2A922] font-bold text-sm tracking-[0.25em] uppercase mb-4">menopauze-klachten, maak kennis met creatine</p>
            <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold text-white leading-[0.95] tracking-tight">
              wat er verandert wanneer je
              <br />
              het tekort aanvult
            </h2>
          </div>

          {/* Benefit 1 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
            <img src="/images/4-benefit-1-clearer-thinking-no-bg.png" alt="Helder denken" className="rounded-xl h-80 md:h-[28rem] w-full object-contain" />
            <div>
              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.2em] mb-2">menopauze-klacht: brain fog</p>
              <p className="text-[#F2A922] text-5xl md:text-7xl font-extrabold tracking-tight mb-4">helder denken</p>
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                Het is echt. Dalend oestrogeen ontneemt je brein energie. Creatine vult dat direct aan.<SourceRef n={1} /> Je concentratie komt terug. Je woorden komen terug.
              </p>
              <p className="text-white/45 leading-relaxed text-sm mt-3">
                Wetenschappers onderzoeken creatine ook actief als beschermende factor voor het brein bij veroudering. Een recente pilotstudie bij Alzheimerpatiënten toonde meetbare verbetering in cognitie na suppletie.
              </p>
              <a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1424972/full" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm mt-4 inline-block hover:text-white/60 transition-colors">Peer-reviewed · Xu et al., 2024 →</a>
              <a href="https://pubmed.ncbi.nlm.nih.gov/33800439/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm mt-2 inline-block hover:text-white/60 transition-colors">Creatine &amp; vrouwengezondheid · Smith-Ryan et al., 2021 →</a>
              <a href="https://pubmed.ncbi.nlm.nih.gov/40395689/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm mt-2 inline-block hover:text-white/60 transition-colors">Creatine &amp; Alzheimer pilotstudie · Smith et al., 2025 →</a>
            </div>
          </div>

          {/* Benefit 2 — flipped */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
            <div className="md:order-2">
              <img src="/images/5-benefit-2-real-energy-no-bg.png" alt="Echte energie" className="rounded-xl h-80 md:h-[28rem] w-full object-contain" />
            </div>
            <div className="md:order-1">
              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.2em] mb-2">menopauze-klacht: vermoeidheid</p>
              <p className="text-[#F2A922] text-5xl md:text-7xl font-extrabold tracking-tight mb-4">echte energie</p>
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                Het is geen luiheid. Je lichaam maakt gewoon minder energie aan. Creatine is wat je lichaam nodig heeft om dat weer op peil te brengen.<SourceRef n={3} /> Geen stimulant, geen cafeïne. Gewoon aanvullen wat er tekort is.
              </p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/33800439/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm mt-4 inline-block hover:text-white/60 transition-colors">Peer-reviewed · Smith-Ryan et al., 2021 →</a>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <img src="/images/6-benefit-3-strength-no-bg.png" alt="Kracht die blijft" className="rounded-xl h-80 md:h-[28rem] w-full object-contain" />
            <div>
              <p className="text-white/30 text-sm font-bold uppercase tracking-[0.2em] mb-2">menopauze-klacht: spierverlies</p>
              <p className="text-[#6B8F5E] text-5xl md:text-7xl font-extrabold tracking-tight mb-4">kracht die blijft</p>
              <p className="text-white/60 leading-relaxed text-base md:text-lg">
                Vrouwen verliezen tot 10% spiermassa in de jaren rond menopauze.<SourceRef n={7} /> Creatine helpt je de kracht vasthouden die je al hebt<SourceRef n={2} /> en weer opbouwen wat je aan het verliezen bent.
              </p>
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10487398/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm mt-4 inline-block hover:text-white/60 transition-colors">Peer-reviewed · Chilibeck et al., 2023 →</a>
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
      <section data-section="social-proof" className="relative py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-[#2D2D2D]/40 font-bold text-sm tracking-[0.2em] uppercase mb-3">wetenschappelijk onderbouwd. aanbevolen door artsen.</p>
            <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              geloof ons niet
              <br />
              op ons woord.
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
                  <p className="text-sm text-[#2D2D2D]/40">Sportfysiologe</p>
                </div>
              </div>
              <p className="text-[#2D2D2D]/65 leading-relaxed text-base">
                &ldquo;Creatine is een van de supplementen die ik <strong className="text-[#2D2D2D]">elke dag inneem</strong>, vooral belangrijk voor vrouwen tijdens menopauze.&rdquo;
              </p>
              <a href="https://www.drstacysims.com/newsletters/articles/posts/Why_Active_Women_Need_Creatine" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold mt-5 inline-block hover:underline">bron →</a>
            </div>

            {/* Card 2 */}
            <div className="border border-[#2D2D2D]/[0.08] rounded-xl p-7 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <img src="/images/headshot-dr-andy-galpin.png" alt="Dr. Andy Galpin" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold text-[#2D2D2D]">Dr. Andy Galpin</p>
                  <p className="text-sm text-[#2D2D2D]/40">Sportfysioloog · Huberman Lab</p>
                </div>
              </div>
              <p className="text-[#2D2D2D]/65 leading-relaxed text-base">
                &ldquo;Creatine is <strong className="text-[#2D2D2D]">de Michael Jordan van supplementen.</strong>{" "}Het heeft tientallen jaren aan bewijs achter zich.&rdquo;
              </p>
              <a href="https://www.hubermanlab.com/episode/dr-andy-galpin-optimal-nutrition-and-supplementation-for-fitness" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold mt-5 inline-block hover:underline">bron →</a>
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
                &ldquo;Creatine-suppletie verbetert <strong className="text-[#2D2D2D]">cognitieve prestaties</strong>, vooral bij stress en slaaptekort.&rdquo;
              </p>
              <a href="https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2024.1424972/full" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold mt-5 inline-block hover:underline">bron →</a>
            </div>
          </div>

          {/* Real women */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#2D2D2D] rounded-xl p-8">
              <p className="text-white/70 leading-relaxed mb-4">
                &ldquo;Geweldig als supplement nu ik de perimenopauze inga. <strong className="text-white">Vrouwen, kijk eens naar creatine voor de grote verandering.</strong>&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-sm text-white/30">X · @SpunkyAzCougar</p>
                <a href="https://x.com/SpunkyAzCougar/status/2038955331317817460" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold hover:underline">bron →</a>
              </div>
            </div>
            <div className="bg-[#2D2D2D] rounded-xl p-8">
              <p className="text-white/70 leading-relaxed mb-4">
                &ldquo;De creatine helpt mijn vrouw met haar menopauze-klachten. <strong className="text-white">We kopen nu elke maand de grote pot.</strong>&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-sm text-white/30">X · @AdamWal89620299</p>
                <a href="https://x.com/AdamWal89620299/status/2036738702744109295" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold hover:underline">bron →</a>
              </div>
            </div>
            <div className="bg-[#2D2D2D] rounded-xl p-8">
              <p className="text-white/70 leading-relaxed mb-4">
                &ldquo;Ondanks dat ik postmenopauzaal ben, <strong className="text-white">is het me gelukt om flink meer spiermassa op te bouwen.</strong> Ik hoop dat het voor jou net zo goed werkt!&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <p className="text-sm text-white/30">X · @RunchieC</p>
                <a href="https://x.com/RunchieC/status/2041405617928028301" target="_blank" rel="noopener noreferrer" className="text-sm text-[#F2A922] font-bold hover:underline">bron →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. MEET THE PRODUCT — centerstage
      ═══════════════════════════════════════════ */}
      <section id="how-it-works" data-section="product" className="relative py-24 md:py-36 px-6 bg-[#F5EDE0] overflow-hidden">
        <Blob variant={2} className="text-white/30 w-[500px] md:w-[700px] top-[5%] -right-[15%]" />
        <Blob variant={3} className="text-white/20 w-[400px] md:w-[600px] bottom-[10%] -left-[20%]" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Big product hero */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#F2A922] font-bold text-sm tracking-[0.25em] uppercase mb-4">het product</p>
            <h2 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-extrabold text-[#2D2D2D] leading-[0.85] tracking-tight">
              ontmoet <span className="text-[#F2A922]">zesty.</span>
            </h2>
          </div>

          {/* Product centerstage with annotation lines */}
          {/* Mobile: stacked layout */}
          <div className="md:hidden mb-16">
            <div className="relative w-64 h-80 mx-auto mb-8">
              <img src="/images/7-meet-zesty-bg.jpeg" alt="Ontmoet zesty" className="w-full h-full rounded-xl object-cover" />
            </div>
            <div className="space-y-6 px-2">
              {[
                { label: "de dop", desc: "10g creatine verzegeld droog. Raakt geen vloeistof tot je twist.", color: "#F2A922" },
                { label: "de shot", desc: "Koudgeperste gember + kurkuma met zwarte peper-extract & elektrolyten.", color: "#6B8F5E" },
                { label: "het ritueel", desc: "Twist, press, shake, drink. 10 seconden.", color: "#2D2D2D" },
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
                <img src="/images/7-meet-zesty-bg.jpeg" alt="Ontmoet zesty" className="w-full h-full rounded-2xl object-cover shadow-2xl" />
              </div>

              {/* Label: the cap — top-left, aligned with annotation line */}
              <div className="absolute left-0 lg:left-[2%] z-30" style={{ top: "80px" }}>
                <p className="font-extrabold text-[#2D2D2D] text-2xl tracking-tight">de dop</p>
                <p className="text-[#2D2D2D]/50 text-sm leading-relaxed mt-1 max-w-[14rem]">10g creatine verzegeld droog. Raakt geen vloeistof tot je twist.</p>
                <HandNote className="mt-3 block rotate-[-4deg]" arrow="right">
                  dit is de innovatie
                </HandNote>
              </div>

              {/* Label: the shot — right, aligned with annotation line */}
              <div className="absolute right-0 lg:right-[2%] z-30" style={{ top: "300px" }}>
                <p className="font-extrabold text-[#2D2D2D] text-2xl tracking-tight">de shot</p>
                <p className="text-[#2D2D2D]/50 text-sm leading-relaxed mt-1 max-w-[14rem]">Koudgeperste gember + kurkuma met zwarte peper-extract &amp; elektrolyten.</p>
              </div>

              {/* Label: the ritual — bottom-left, aligned with annotation line */}
              <div className="absolute left-0 lg:left-[2%] z-30" style={{ top: "450px" }}>
                <p className="font-extrabold text-[#2D2D2D] text-2xl tracking-tight">het ritueel</p>
                <p className="text-[#2D2D2D]/50 text-sm leading-relaxed mt-1 max-w-[14rem]">Twist, press, shake, drink. 10 seconden.</p>
                <HandNote className="mt-3 block rotate-[2deg]">
                  voor de koffie, voor het ontbijt
                </HandNote>
              </div>
            </div>
          </div>

          {/* How it works — 3 steps */}
          <div>
            <h3 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] text-center mb-4 tracking-tight">
              twist. press. <span className="text-[#F2A922]">shake.</span>
            </h3>
            <HandNote as="div" className="text-center mt-2 mb-14 md:mb-20 rotate-[-2deg]">je hele routine in 10 seconden.</HandNote>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {[
                { num: "01", name: "twist", desc: "breek de verzegeling. de creatine zat tot nu toe droog verzegeld. vers en op volle sterkte.", img: "/images/8-step-twist.jpeg" },
                { num: "02", name: "press", desc: "de creatine valt in de gembershot. 10g, exact, elke keer. niets afmeten.", img: "/images/9-step-press.jpeg" },
                { num: "03", name: "shake + drink", desc: "één shot. klaar voor je koffie koud wordt. energie voor je brein, je spieren, en tegen ontsteking. 10 seconden.", img: "/images/10-step-drink.jpeg" },
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
      <section data-section="comparison" className="relative py-24 md:py-36 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              meer voor jou.
              <br />
              <span className="text-[#F2A922]">zie het verschil.</span>
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
                <p className="text-[#2D2D2D]/50 font-bold text-sm">poeder</p>
              </div>
              <div className="text-center">
                <p className="text-[#2D2D2D]/50 font-bold text-sm">pillen</p>
              </div>
              <div className="text-center">
                <p className="text-[#2D2D2D]/50 font-bold text-sm">gummies</p>
              </div>
            </div>

            {/* Table rows */}
            {[
              { feature: "Klinische 10g dosis", zesty: true, powder: true, pills: false, gummies: false },
              { feature: "Geen afmeten nodig", zesty: true, powder: false, pills: true, gummies: true },
              { feature: "Blijft vers tot gebruik", zesty: true, powder: false, pills: false, gummies: false },
              { feature: "Toegevoegde gember + kurkuma", zesty: true, powder: false, pills: false, gummies: false },
              { feature: "Elektrolyten voor opname", zesty: true, powder: false, pills: false, gummies: false },
              { feature: "Smaakt ook nog lekker", zesty: true, powder: false, pills: false, gummies: true },
              { feature: "10-seconde dagelijks ritueel", zesty: true, powder: false, pills: true, gummies: true },
              { feature: "Geen shakebeker nodig", zesty: true, powder: false, pills: true, gummies: true },
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
            geen mengen, geen rommel, geen excuses
          </HandNote>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. INGREDIENTS — editorial, less card-heavy
      ═══════════════════════════════════════════ */}
      <section data-section="ingredients" className="relative py-24 md:py-36 px-6 bg-[#F5EDE0]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              elk ingrediënt
              <br />
              <span className="text-[#F2A922]">gericht op een klacht.</span>
            </h2>
            <p className="text-[#2D2D2D]/55 mt-4 text-sm md:text-base">geen willekeurige supplementen. een systeem ontworpen voor menopauze.</p>
          </div>

          {/* Ingredient grid — image + text + symptom tags */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-16">
            {[
              { name: "Koudgeperste gember", why: <>Een natuurlijke ontstekingsremmer die helpt bij gewrichtspijn en spijsverteringsproblemen. Klachten die veel vrouwen tijdens menopauze herkennen. Ondersteunt ook je immuunsysteem wanneer je lichaam onder hormonale stress staat.<SourceRef n={5} /></>, symptoms: ["gewrichtspijn", "opgeblazenheid", "misselijkheid"], img: "/images/11-ginger.jpeg" },
              { name: "Kurkuma + zwarte peper-extract", why: <>Curcumine bestrijdt de chronische ontsteking die tijdens menopauze piekt. Denk aan stijve gewrichten, stemmingswisselingen en brain fog.<SourceRef n={5} /> Piperine (zwarte peper-extract) verhoogt de opname van kurkuma met 2.000%.<SourceRef n={6} /></>, symptoms: ["ontsteking", "stijve gewrichten", "stemming"], img: "/images/12-turmeric.jpeg" },
              { name: "Citroen, ananas, sinaasappel", why: <>Vrouwen verliezen tot 30% huidcollageen in de eerste 5 jaar na menopauze. Vitamine C is essentieel voor collageen-aanmaak en remt de huidverdunning die door dalend oestrogeen ontstaat.<SourceRef n={10} /> Bromelaine uit ananas is een bewezen ontstekingsremmer die helpt tegen de gewrichtsstijfheid die toeneemt tijdens menopauze.<SourceRef n={5} /> Geen toegevoegde suiker.</>, symptoms: ["huidverdunning", "gewrichtspijn", "ontsteking"], img: "/images/13-citrus.jpeg" },
              { name: "Elektrolyten", why: <>Natrium, kalium, magnesium. Dalend oestrogeen verstoort direct je elektrolytenbalans. Magnesiumtekort bij postmenopauzale vrouwen hangt samen met vermoeidheid, spierkrampen, stemmingswisselingen en zelfs hartritmestoornissen.<SourceRef n={11} /> Elektrolyten verbeteren ook de opname van creatine in je spieren.</>, symptoms: ["vermoeidheid", "spierkrampen", "opvliegers"], img: "/images/14-electrolytes.jpeg" },
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
              <p className="text-[#F2A922] font-bold text-sm tracking-[0.2em] uppercase mb-5">de dop</p>
              <p className="text-[5.5rem] md:text-[8rem] font-extrabold text-[#F2A922] leading-none tracking-tighter mb-3">10g</p>
              <p className="text-white font-extrabold text-2xl md:text-3xl mb-3">creatine monohydraat</p>
              <p className="text-white/35 text-sm mb-5">(de meest onderzochte vorm, gericht op brain fog, vermoeidheid &amp; spierverlies)</p>
              <p className="text-white/50 leading-relaxed text-base md:text-lg">
                Droog verzegeld. Zonder vulmiddelen. Breekt niet af. Raakt geen vloeistof tot je twist. Een van de best onderzochte supplementen voor de klachten van menopauze, en je neemt het waarschijnlijk nog niet.
              </p>
              <HandNote className="mt-6 text-white/40 rotate-[-3deg] block">
                versheid is alles
              </HandNote>
            </div>
            {/* Cap image — positioned bottom-right, large and prominent */}
            <div className="absolute -bottom-4 right-0 w-[55%] md:w-[45%] h-[85%] md:h-[105%] z-[2]">
              <img src="/images/15-cap-detail-no-bg.png" alt="Dosisdop met creatine" className="w-full h-full object-contain object-bottom drop-shadow-2xl" />
            </div>
          </div>

          <p className="text-sm text-[#2D2D2D]/40 mt-8 text-center">
            geen toegevoegde suiker · geen conserveermiddelen · herbruikbare PET-fles + PP-dop · ontworpen in belgië
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. THE SCIENCE
      ═══════════════════════════════════════════ */}
      <section data-section="science" className="relative py-24 md:py-36 px-6 overflow-hidden">
        <Blob variant={2} className="text-[#F5EDE0]/40 w-[600px] md:w-[800px] top-[15%] -left-[20%]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold text-[#F2A922] leading-none tracking-tighter">
              500+
            </p>
            <p className="text-xl md:text-2xl font-extrabold text-[#2D2D2D] mt-2">peer-reviewed studies over creatine</p>
            <p className="text-[#2D2D2D]/40 text-sm mt-2">meer onderzocht dan vitamine D. meer onderzocht dan visolie.</p>
            <HandNote className="mt-4 block rotate-[2deg]">
              dit is geen nieuwe wetenschap, het is bewezen wetenschap
            </HandNote>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#2D2D2D] mb-5 leading-snug">
                het meest onderzochte supplement in <span className="text-[#F2A922]">voedingswetenschap</span>
              </h3>
              <p className="text-[#2D2D2D]/65 leading-relaxed mb-4">
                Creatine is niet nieuw. Onderzoekers bestuderen het al tientallen jaren: hersengezondheid, spierkracht, botdichtheid en energie. Inclusief studies specifiek bij postmenopauzale vrouwen.
              </p>
              <p className="text-[#2D2D2D]/65 leading-relaxed">
                De uitdaging was altijd de vorm: poeders die vies smaken, gummies die onderdoseren, en pillen die je vergeet. Geen ervan was gemaakt voor menopauze. zesty wel.
              </p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/28615996/" target="_blank" rel="noopener noreferrer" className="text-[#F2A922] font-bold text-sm mt-6 inline-block hover:underline">
                ISSN standpuntverklaring over creatine →
              </a>
            </div>

            {/* Dose chart — lighter container */}
            <div className="bg-[#F5EDE0] rounded-xl p-8 md:p-10">
              <h4 className="font-extrabold text-[#2D2D2D] text-lg mb-6">waarom 10g, niet 3 of 5</h4>
              {[
                { dose: "3g", label: "EU minimum voor prestatieclaims", pct: "30%" },
                { dose: "5g", label: "standaard onderhoudsdosis (spier)", pct: "50%" },
                { dose: "10g", label: "menopauze · helder denken · resultaat in 2 weken", pct: "100%", active: true },
              ].map((d) => (
                <div key={d.dose} className="mb-7 last:mb-0">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className={`text-base font-bold ${d.active ? "text-[#F2A922]" : "text-[#2D2D2D]/50"}`}>{d.dose}/dag</span>
                    <span className={`text-base max-w-[65%] text-right ${d.active ? "text-[#F2A922] font-semibold" : "text-[#2D2D2D]/45"}`}>{d.label}</span>
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
      <section id="pricing" data-section="pricing" className="relative py-24 md:py-36 px-6 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <h2 className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              14 dagen. <span className="text-[#F2A922]">dat is alles.</span>
            </h2>
            <p className="text-[#2D2D2D]/55 mt-4 text-sm md:text-base max-w-md mx-auto">
              zo lang duurt het voor creatine op peil is in je lichaam.<SourceRef n={9} /> de meeste vrouwen voelen binnen 14 dagen hun brain fog afnemen en hun energie terugkomen.
            </p>
          </div>

          {/* What's inside */}
          <div className="flex flex-wrap justify-center gap-3 mb-14 md:mb-20">
            {[
              "10g creatine monohydraat",
              "gember",
              "kurkuma + piperine",
              "elektrolyten",
              "vitamine C",
              "0g suiker",
            ].map((item) => (
              <span key={item} className="text-sm font-bold text-[#2D2D2D]/50 bg-[#FFFDF7] border border-[#2D2D2D]/[0.06] px-4 py-2 rounded-full">
                {item}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Starter */}
            <div className="gsap-pricing-card bg-[#FFFDF7] rounded-2xl overflow-hidden border border-[#2D2D2D]/[0.06] flex flex-col">
              <div className="flex items-center justify-center h-64 md:h-72 relative overflow-hidden">
                <img src="/images/17-pricing-starter-packaging.jpeg" alt="14-daagse starter" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <p className="text-sm text-[#2D2D2D]/60 font-bold mb-1">14-daagse starter</p>
                <p className="text-5xl md:text-6xl font-extrabold text-[#2D2D2D] tracking-tight mb-2">€42</p>
                <p className="text-sm text-[#2D2D2D]/60 mb-1">€3,00/shot</p>
                <p className="text-sm text-[#2D2D2D]/40 mb-8">+ €4,95 verzending</p>
                <a href="/waitlist?plan=14" onClick={() => trackCta("pricing", "14")} className="w-full bg-[#2D2D2D] text-[#FFFDF7] font-bold py-4 rounded-full text-center block mt-auto transition-all hover:bg-[#2D2D2D]/85 hover:shadow-lg">
                  bestel starter
                </a>
                <p className="text-sm text-[#2D2D2D]/35 text-center mt-3 font-medium tracking-wide uppercase">verzending binnen 3 dagen</p>
                <HandNote className="mt-2 text-center block text-base">
                  geef het 2 weken de tijd
                </HandNote>
              </div>
            </div>

            {/* Monthly — featured */}
            <div className="gsap-pricing-card bg-[#2D2D2D] rounded-2xl overflow-hidden shadow-xl relative flex flex-col">
              <span className="absolute top-5 right-5 bg-[#F2A922] text-[#2D2D2D] text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider z-10">
                beste deal
              </span>
              <div className="flex items-center justify-center h-64 md:h-72 relative border-b border-white/[0.08] overflow-hidden">
                <img src="/images/17-pricing-monthly-packaging.jpeg" alt="30-daagse voorraad" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <p className="text-sm text-white/50 font-bold mb-1">30-daagse voorraad</p>
                <p className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">€79</p>
                <p className="text-sm text-white/50 mb-1">€2,63/shot</p>
                <p className="text-sm text-white/30 mb-8">gratis verzending</p>
                <a href="/waitlist?plan=30" onClick={() => trackCta("pricing", "30")} className="w-full bg-[#F2A922] text-[#2D2D2D] font-bold py-4 rounded-full text-center block mt-auto transition-all hover:bg-[#D4921E] hover:shadow-lg">
                  bestel maandelijks
                </a>
                <p className="text-sm text-white/25 text-center mt-3 font-medium tracking-wide uppercase">verzending binnen 3 dagen</p>
                <HandNote className="mt-2 text-center block text-base text-white/40">
                  je dagelijkse dosis voor blijvend resultaat
                </HandNote>
              </div>
            </div>
          </div>

          {/* Price objection — inline, no card */}
          <div className="mt-12 text-center">
            <p className="text-lg font-extrabold text-[#2D2D2D] mb-2">&ldquo;€3 per dag voor een drankje?&rdquo;</p>
            <p className="text-[#2D2D2D]/55 leading-relaxed max-w-lg mx-auto">
              Minder dan je middagkoffie. Maar dan eentje die de échte oorzaak aanpakt waarom je die koffie nodig hebt.
            </p>
          </div>

          <p className="text-center text-sm text-[#2D2D2D]/30 mt-8 font-medium">
            gratis verzending op 30-packs · altijd opzegbaar · ontworpen voor menopauze
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          11. FAQ
      ═══════════════════════════════════════════ */}
      <section data-section="faq" className="py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mb-10 tracking-tight">
            veelgestelde vragen
          </h2>
          {faqs.map((faq, i) => <FaqItem key={faq.q} q={faq.q} a={faq.a} last={i === faqs.length - 1} />)}

          {/* Links */}
          <div className="mt-10 flex flex-col gap-3">
            <a href="/nl/veelgestelde-vragen" className="text-[#2D2D2D]/40 font-bold text-sm hover:text-[#2D2D2D] transition-colors">
              bekijk alle veelgestelde vragen →
            </a>
            <a href="/nl/blog/bijwerkingen-creatine-vrouwen" className="text-[#F2A922] font-bold text-sm hover:underline transition-colors">
              bijwerkingen van creatine bij vrouwen: wat zegt het onderzoek? →
            </a>
            <a href="/nl/blog/beste-supplementen-menopauze" className="text-[#F2A922] font-bold text-sm hover:underline transition-colors">
              beste supplementen voor vrouwen in de menopauze [2026] →
            </a>
          </div>
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
                menopauze nam iets af.<br />neem het terug.
              </h2>
              <p className="text-white/50 text-sm md:text-base max-w-md mx-auto mb-8">
                zesty. de menopauzeshot met creatine, gember en kurkuma.
              </p>
              <a
                href="#pricing"
                onClick={() => trackCta("footer", "30")}
                className="inline-flex items-center gap-3 bg-[#F2A922] text-[#2D2D2D] font-bold text-base md:text-lg px-10 py-4 md:py-5 rounded-full transition-all hover:bg-[#D4921E] hover:shadow-xl hover:scale-[1.02]"
              >
                bestel nu
              </a>
              <p className="text-white/30 text-sm mt-4">vanaf €2,63/shot · gratis verzending op 30-daagse plannen</p>
            </div>
          </div>

          {/* Footer links + info */}
          <div className="border-t border-white/10 pt-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
              <div>
                <p className="text-2xl font-extrabold text-[#F2A922] tracking-tight mb-2">zesty</p>
                <p className="text-white/30 text-sm">de menopauzeshot met creatine · 10g per shot</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-white/35">
                <a href="/nl/blog" className="hover:text-white/60 transition-colors">blog</a>
                <a href="/nl/veelgestelde-vragen" className="hover:text-white/60 transition-colors">faq</a>
                <a href="#" className="hover:text-white/60 transition-colors">privacybeleid</a>
                <a href="#" className="hover:text-white/60 transition-colors">voorwaarden</a>
                <a href="#" className="hover:text-white/60 transition-colors">contact</a>
                <a href="#" className="hover:text-white/60 transition-colors">instagram</a>
              </div>
            </div>
            {/* AG1-style disclaimer + study references — centered, full width */}
            <div className="text-white/40 text-sm leading-relaxed space-y-4 text-center max-w-5xl mx-auto">
              <p id="sources" className="text-white/50 text-sm font-bold uppercase tracking-[0.15em] mb-3 scroll-mt-8">bronnen &amp; disclaimers</p>
              <p>
                zesty is een voedingssupplement. deze uitspraken zijn gebaseerd op gepubliceerd onderzoek en zijn niet bedoeld als gezondheidsclaims.
                dit product is niet bedoeld voor diagnose, behandeling, genezing of preventie van ziekten. voedingssupplementen zijn geen vervanging
                voor een gevarieerd en evenwichtig dieet en een gezonde levensstijl. raadpleeg een arts als je zwanger bent,
                borstvoeding geeft of medicijnen gebruikt.
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
                creatine is het meest onderzochte sportsupplement ter wereld, met meer dan 4.000 peer-reviewed publicaties.
                de europese voedselveiligheidsautoriteit (EFSA) erkent de rol van creatine bij het ondersteunen van fysieke prestaties bij
                korte, intensieve inspanning.
              </p>
            </div>
            <p className="text-white/25 text-sm mt-8 text-center">ontworpen in belgië · herbruikbare verpakking · drinkzesty.be</p>
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
            <p className="text-sm font-bold text-[#2D2D2D]">10g creatine per shot · wetenschappelijk onderbouwd</p>
            <p className="text-sm text-[#2D2D2D]/40 hidden sm:block">vanaf €2,63/dag · gratis verzending op 30-packs</p>
          </div>
          <a href="#pricing" onClick={() => trackCta("sticky-bar", "30")} className="bg-[#2D2D2D] text-[#FFFDF7] font-bold text-sm px-7 py-3 rounded-full transition-all hover:bg-[#2D2D2D]/85 hover:shadow-md shrink-0">
            bestel nu
          </a>
        </div>
      </div>
    </main>
  );
}
