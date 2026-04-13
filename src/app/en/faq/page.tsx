"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";

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

const faqGroups = [
  {
    label: "about creatine & menopause",
    items: [
      { q: "wait, what actually is creatine?", a: "Creatine is a substance your body naturally produces. Your brain and muscles need it for energy. During perimenopause and menopause, your body makes much less of it, and that's directly connected to the brain fog, fatigue, and muscle loss so many women experience." },
      { q: "how does creatine help with menopause?", a: "Many menopause symptoms (brain fog, fatigue, muscle loss, low energy) look a lot like creatine deficiency. When estrogen drops, your body also produces less creatine. Supplementing gives back what menopause takes away: energy for your brain, strength for your muscles." },
      { q: "what are the benefits of creatine for women?", a: "Creatine supports three things that menopause undermines: cognition (less brain fog), energy (less fatigue), and muscle mass (less muscle loss). Research by Dr. Stacy Sims shows that women produce 70-80% less creatine than men, and that gap widens as estrogen declines. Supplementation measurably helps with memory, strength, and endurance." },
      { q: "what are the side effects of creatine in women?", a: "At the recommended dosage, no clinically relevant side effects have been found. Over 500 peer-reviewed studies confirm its safety, including in postmenopausal women. The most common question is about weight gain. That's a small amount of water in the muscles (1-2 kg), not fat. Stomach issues are rare when taken in liquid form." },
      { q: "is creatine safe during menopause?", a: "Over 500 peer-reviewed studies (ISSN position stand, Kreider et al., 2017). Consistently found safe for healthy adults at the recommended dosage. It has been studied for decades across all age groups, including postmenopausal women." },
      { q: "will creatine make me gain weight?", a: "Creatine draws water into your muscles, so you might see 1 to 2 kg more on the scale in the first week. That's water inside the muscle (not bloating), not fat. It stabilizes quickly. Many women in menopause actually find it helps them maintain muscle mass." },
      { q: "does creatine help with brain fog?", a: "Yes. Creatine serves as a rapid energy source for your neurons. Research shows that supplementation measurably improves working memory and processing speed, with the strongest effects in women and individuals under stress or sleep deprivation (Xu et al., 2024; Rae et al., 2003)." },
      { q: "how much creatine do you need per day?", a: "3-5g per day is enough for muscle benefits. For cognitive benefits, researchers use 10g or more, because the brain needs higher doses to reach saturation. At 10g/day, your creatine levels reach their full potential in about 2 weeks." },
      { q: "does creatine help the brain long-term?", a: "Researchers are actively studying creatine as a protective factor for the aging brain. A pilot study in Alzheimer's patients (Smith et al., 2025) showed measurable improvement in cognition after creatine supplementation. The research is still early, but the direction is promising, especially since creatine is already proven safe for long-term use." },
    ],
  },
  {
    label: "about the shot",
    items: [
      { q: "how does it taste?", a: "A spicy ginger shot with warm turmeric and fresh citrus. Lemon, pineapple, and orange. It's a real cold-pressed shot. Not sweet. Not medicinal. Just sharp and fresh." },
      { q: "how is this different from a tub of creatine?", a: "A tub gives you powder and a measuring scoop. zesty gives you 10g sealed dry in the cap, a cold-pressed shot with black pepper extract for absorption and electrolytes for transport. Plus ginger and turmeric. No mixing, no measuring." },
      { q: "isn't 10g too much?", a: "About 95% of your body's creatine is in your muscles, so the standard 3-5g mainly saturates muscle stores. Your brain holds the remaining ~5%, and that's exactly what menopause depletes. Researchers studying cognitive benefits in women use 10g+ to reach the brain. Well within the studied safe ranges." },
      { q: "why is the creatine in the cap and not in the liquid?", a: "Creatine monohydrate breaks down in liquid over time (it converts to creatinine, a waste product). By sealing it dry in the cap, it stays stable until the moment you drink. Twist the cap, the creatine drops into the shot, shake, and drink. Maximum potency, zero loss." },
      { q: "can I combine creatine with my current supplements?", a: "In most cases, yes. Creatine has no known interactions with common supplements like vitamin D, magnesium, or omega-3. Check with your doctor if you take medication that affects kidney function." },
      { q: "does turmeric help with menopause symptoms?", a: "Turmeric (curcumin) has anti-inflammatory properties relevant to menopause-related joint discomfort (Hewlings & Kalman, 2017). Piperine (black pepper extract) in the shot increases curcumin bioavailability by 2,000% (Shoba et al., 1998)." },
      { q: "why are there electrolytes in the shot?", a: "Electrolytes support the transport of creatine to your muscle and brain cells. They also help with water retention in the muscle (not subcutaneously), which allows for more efficient absorption." },
    ],
  },
  {
    label: "practical",
    items: [
      { q: "how long until I notice something?", a: "At 10g/day, your creatine levels reach saturation in about 2 weeks. That's faster than the 28 days needed at a lower dose. Some women notice more energy and less brain fog in the first week, others around week 3-4. The 14-day starter is designed for exactly that reason." },
      { q: "I'm in perimenopause. is it too early?", a: "Not at all. It's actually the perfect time. Your creatine reserves start declining before actual menopause begins. Perimenopause usually starts around age 45, and starting creatine then means you stay ahead of the deficit." },
      { q: "when is the best time to drink it?", a: "Morning works best as a daily ritual. Twist, press, shake, drink. And your day begins. But any consistent time of day works." },
      { q: "is zesty a medicine or a dietary supplement?", a: "zesty is a dietary supplement, not a medicine. It is not intended to diagnose, treat, cure, or prevent disease. Creatine monohydrate is one of the most researched dietary supplements in the world, recognized by EFSA for supporting physical performance." },
      { q: "how do I store the shots?", a: "Cool and dry, out of direct sunlight. Refrigeration isn't necessary but is fine. The creatine in the cap is sealed dry and stays stable until you twist the cap." },
    ],
  },
];

// JSON-LD schema uses developer-controlled content only (from faqGroups above), no user input
const allFaqs = faqGroups.flatMap((g) => g.items);
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FrequentlyAskedQuestions() {
  return (
    <>
      <Nav locale="en" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        {/* Structured data for FAQ rich results, content is developer-controlled */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="max-w-2xl mx-auto">
          <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mb-4 tracking-tight">
            frequently asked questions
          </h1>
          <p className="text-[#2D2D2D]/60 text-lg mb-12">
            Everything you want to know about creatine, menopause and zesty.
          </p>

          {faqGroups.map((group) => (
            <div key={group.label} className="mb-12 last:mb-0">
              <h2 className="text-sm font-bold text-[#2D2D2D]/40 uppercase tracking-[0.2em] mb-4">{group.label}</h2>
              {group.items.map((faq, i) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} last={i === group.items.length - 1} />
              ))}
            </div>
          ))}

          {/* CTA */}
          <div className="mt-16 p-8 bg-[#2D2D2D] rounded-2xl text-center">
            <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-2">
              zesty
            </p>
            <p className="text-white text-xl md:text-2xl font-extrabold mb-4">
              10g creatine. one shot. every morning.
            </p>
            <Link
              href="/en#order"
              className="inline-block bg-[#F2A922] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#F2A922]/90 transition-colors"
            >
              order now
            </Link>
            <p className="text-white/30 text-sm mt-3">from €2.63/shot</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-lg font-extrabold text-[#F2A922] tracking-tight mb-1">zesty</p>
              <p className="text-white/30 text-sm">the menopause shot with creatine</p>
            </div>
            <div className="flex gap-5 text-sm text-white/35">
              <Link href="/en" className="hover:text-white/60 transition-colors">home</Link>
              <Link href="/en/blog" className="hover:text-white/60 transition-colors">blog</Link>
              <Link href="/en/faq" className="hover:text-white/60 transition-colors">faq</Link>
              <Link href="/en#order" className="hover:text-white/60 transition-colors">order</Link>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8">
            zesty is a dietary supplement, not medicine. consult a doctor if in doubt.
          </p>
        </div>
      </footer>
    </>
  );
}
