"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";

const SOURCES: Record<number, string> = {
  1: "Creatine supplementation improves cognitive performance, especially under stress and sleep deprivation. Xu et al., Frontiers in Nutrition, 2024.",
  2: "Creatine supplementation and lean tissue mass in women. Chilibeck et al., Nutrients, 2023.",
  3: "Effects of creatine on exercise performance and body composition in females. Smith-Ryan et al., Nutrients, 2021.",
  4: "Women produce 70-80% less endogenous creatine than men. Brosnan & Brosnan, Amino Acids, 2016.",
  5: "Curcumin has anti-inflammatory properties and may support joint health. Hewlings & Kalman, Foods, 2017.",
  6: "Piperine enhances curcumin bioavailability by 2,000%. Shoba et al., Planta Medica, 1998.",
  7: "Women lose significant muscle mass during the menopausal transition. Maltais et al., Maturitas, 2009.",
  8: "An estimated 1.5 billion women worldwide will be postmenopausal by 2030. World Health Organization.",
  9: "Muscle creatine saturation at 10g/day occurs within approximately 10-14 days, compared to 5-7 days at 20g/day or ~28 days at 3g/day. Hultman et al., Journal of Applied Physiology, 1996; Kreider et al., JISSN, 2017.",
  10: "Skin collagen declines rapidly after menopause, with ~30% lost in the first 5 years; vitamin C is essential for collagen biosynthesis. Brincat et al., British Journal of Obstetrics and Gynaecology, 1987; Pullar et al., Nutrients, 2017.",
  11: "Magnesium deficiency in postmenopausal women linked to heart rhythm changes, impaired glucose tolerance, and neuroinflammation. Nielsen et al., Journal of the American College of Nutrition, 2007; Park et al., Journal of Neuroinflammation, 2021.",
};

export function SourceRef({ n }: { n: number }) {
  const [open, setOpen] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function close(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function esc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  // Keep popover within viewport on mobile by shifting horizontally if it overflows
  useLayoutEffect(() => {
    if (!open) {
      setOffsetX(0);
      return;
    }
    if (!popoverRef.current) return;
    const rect = popoverRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const margin = 8;
    let shift = 0;
    if (rect.left < margin) {
      shift = margin - rect.left;
    } else if (rect.right > vw - margin) {
      shift = vw - margin - rect.right;
    }
    if (shift !== 0) setOffsetX(shift);
  }, [open]);

  return (
    <span ref={ref} className="relative inline-block align-baseline">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-[#F2A922] font-bold text-xs ml-0.5 cursor-pointer hover:underline"
      >
        [{n}]
      </button>
      {open && (
        <span
          ref={popoverRef}
          style={{ transform: `translateX(calc(-50% + ${offsetX}px))` }}
          className="absolute bottom-full left-1/2 mb-2 w-[min(20rem,calc(100vw-1rem))] bg-[#2D2D2D] text-white text-xs leading-relaxed rounded-lg px-4 py-3 shadow-xl z-50 pointer-events-auto font-normal text-left"
        >
          <span className="font-bold text-[#F2A922]">[{n}]</span>{" "}
          {SOURCES[n]}
          <span
            style={{ left: `calc(50% - ${offsetX}px)` }}
            className="absolute top-full -translate-x-1/2 border-[6px] border-transparent border-t-[#2D2D2D]"
          />
        </span>
      )}
    </span>
  );
}
