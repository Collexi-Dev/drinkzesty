import type { BlogPost } from "@/lib/blog";
import type { ComponentType } from "react";

import CreatineSideEffectsWomen from "./creatine-side-effects-women.mdx";
import CreatineBenefitsWomen from "./creatine-benefits-women.mdx";
import BestSupplementsMenopause from "./best-supplements-menopause.mdx";
import BestCreatineForWomenMenopause from "./best-creatine-for-women-menopause.mdx";
import CreatineMenopauseGuide from "./creatine-menopause-complete-guide.mdx";

interface BlogEntry extends BlogPost {
  component: ComponentType;
}

const posts: BlogEntry[] = [
  {
    slug: "creatine-menopause-complete-guide",
    counterpartSlug: "creatine-menopauze-complete-gids",
    title: "Creatine & Menopause: the complete guide",
    image: "/images/blog-pillar-1.jpeg",
    description:
      "Everything you need to know about creatine during menopause: why women produce less, what the research says about brain fog, muscle loss, and energy, and how to use it.",
    date: "2026-04-09",
    readingTime: "12 min",
    faqs: [
      {
        q: "Why is creatine important during menopause?",
        a: "Women have 70-80% lower creatine reserves than men. During menopause, production drops further due to declining estrogen, contributing to brain fog, fatigue, and muscle loss. Supplementation fills that deficit.",
      },
      {
        q: "How much creatine per day for women in menopause?",
        a: "3-5g per day is sufficient for muscle benefits. 10g per day is used in research on cognitive benefits, because the brain needs higher doses to reach saturation.",
      },
      {
        q: "Is creatine proven effective for menopause?",
        a: "Yes. Multiple randomized controlled studies show improvements in cognition, muscle mass, bone density, and mood in peri- and postmenopausal women who take creatine.",
      },
    ],
    about: [
      { name: "Creatine", url: "https://www.wikidata.org/wiki/Q186037" },
      { name: "Menopause", url: "https://www.wikidata.org/wiki/Q131149" },
    ],
    mentions: [
      { name: "Curcumin", url: "https://www.wikidata.org/wiki/Q312266" },
      { name: "Ginger", url: "https://www.wikidata.org/wiki/Q35625" },
      { name: "Estrogen", url: "https://www.wikidata.org/wiki/Q277954" },
      { name: "Osteoporosis", url: "https://www.wikidata.org/wiki/Q165328" },
      { name: "Sarcopenia", url: "https://www.wikidata.org/wiki/Q1752641" },
    ],
    component: CreatineMenopauseGuide,
  },
  {
    slug: "creatine-side-effects-women",
    counterpartSlug: "bijwerkingen-creatine-vrouwen",
    title: "Creatine side effects in women: what does the research say?",
    image: "/images/blog-article-1.jpeg",
    description:
      "Everything about creatine side effects in women. What does the science say? Is creatine safe during menopause? An honest overview.",
    date: "2026-04-09",
    dateModified: "2026-04-14",
    readingTime: "10 min",
    faqs: [
      {
        q: "Is creatine safe for women?",
        a: "Yes. Over 500 peer-reviewed studies confirm the safety of creatine at the recommended dosage, including in postmenopausal women.",
      },
      {
        q: "Does creatine make you gain weight?",
        a: "Creatine causes 1-2 kg of water retention in the muscles during the first week. This is not fat and stabilizes quickly.",
      },
      {
        q: "Does creatine affect hormones in women?",
        a: "No. Creatine has no demonstrated effect on female hormones. It works at the cellular energy level, not on the hormonal system.",
      },
    ],
    about: [
      { name: "Creatine", url: "https://www.wikidata.org/wiki/Q186037" },
      { name: "Adverse effect", url: "https://www.wikidata.org/wiki/Q21167512" },
    ],
    mentions: [
      { name: "Menopause", url: "https://www.wikidata.org/wiki/Q131149" },
      { name: "Kidney", url: "https://www.wikidata.org/wiki/Q9377" },
      { name: "Dihydrotestosterone", url: "https://www.wikidata.org/wiki/Q422485" },
    ],
    component: CreatineSideEffectsWomen,
  },
  {
    slug: "creatine-benefits-women",
    counterpartSlug: "creatine-voordelen-vrouwen",
    title: "Creatine benefits for women: what the research says",
    image: "/images/blog-article-2.jpeg",
    description:
      "The science-backed benefits of creatine for women in menopause: less brain fog, more energy, maintained muscle mass, and better bone health.",
    date: "2026-04-09",
    readingTime: "7 min",
    faqs: [
      {
        q: "What does creatine do for women?",
        a: "Creatine supports cognition (less brain fog), energy (less fatigue), and muscle mass (less muscle loss). Women have 70-80% lower creatine reserves than men, making supplementation especially relevant.",
      },
      {
        q: "Does creatine help with brain fog during menopause?",
        a: "Research shows that creatine measurably improves working memory, attention, and processing speed. The effects are strongest in women and in individuals under stress or sleep deprivation.",
      },
      {
        q: "How much creatine per day for women?",
        a: "3-5g per day is sufficient for muscle benefits. For cognitive benefits, researchers use 10g or more to also reach the brain.",
      },
    ],
    about: [
      { name: "Creatine", url: "https://www.wikidata.org/wiki/Q186037" },
      { name: "Menopause", url: "https://www.wikidata.org/wiki/Q131149" },
    ],
    mentions: [
      { name: "Cognition", url: "https://www.wikidata.org/wiki/Q3966" },
      { name: "Sarcopenia", url: "https://www.wikidata.org/wiki/Q1752641" },
      { name: "Osteoporosis", url: "https://www.wikidata.org/wiki/Q165328" },
      { name: "Estrogen", url: "https://www.wikidata.org/wiki/Q277954" },
    ],
    component: CreatineBenefitsWomen,
  },
  {
    slug: "best-creatine-for-women-menopause",
    counterpartSlug: "beste-creatine-voor-vrouwen-menopauze",
    title: "Best creatine for women in menopause: the guide",
    image: "/images/blog-article-2.jpeg",
    description:
      "Which creatine is best for women in menopause? Monohydrate vs HCl, dosage, quality, and what Zesty does differently. Science-backed.",
    date: "2026-04-14",
    readingTime: "10 min",
    faqs: [
      {
        q: "Which creatine is best for women in menopause?",
        a: "Creatine monohydrate at a daily dose of 5 to 10 grams is the best-researched choice. More than 500 peer-reviewed studies are based on monohydrate. Alternative forms like HCl, ethyl ester, or buffered creatine have no proven advantage.",
      },
      {
        q: "How much creatine per day for women in menopause?",
        a: "3 to 5 grams per day is enough for muscle preservation. 10 grams per day is used in research on cognitive effects, because the brain needs a higher dose to reach saturation. At 10 grams per day, your creatine reaches saturation after about 2 weeks.",
      },
      {
        q: "Is creatine monohydrate really better than HCl?",
        a: "Yes. The ISSN position stand concludes there is no clinical evidence that HCl or other advanced forms are superior to monohydrate. Monohydrate has 90-100% oral bioavailability, so there is little room for improvement.",
      },
    ],
    about: [
      { name: "Creatine", url: "https://www.wikidata.org/wiki/Q186037" },
      { name: "Menopause", url: "https://www.wikidata.org/wiki/Q131149" },
      { name: "Dietary supplement", url: "https://www.wikidata.org/wiki/Q191668" },
    ],
    mentions: [
      { name: "Creatine monohydrate", url: "https://www.wikidata.org/wiki/Q186037" },
      { name: "Estrogen", url: "https://www.wikidata.org/wiki/Q277954" },
      { name: "Curcumin", url: "https://www.wikidata.org/wiki/Q312266" },
      { name: "Piperine", url: "https://www.wikidata.org/wiki/Q407272" },
    ],
    component: BestCreatineForWomenMenopause,
  },
  {
    slug: "best-supplements-menopause",
    counterpartSlug: "beste-supplementen-menopauze",
    title: "Best supplements for women in menopause [2026]",
    image: "/images/blog-article-3.jpeg",
    description:
      "Which supplements actually help during menopause? An honest, science-backed overview of creatine, vitamin D, magnesium, omega-3, and collagen.",
    date: "2026-04-09",
    readingTime: "8 min",
    faqs: [
      {
        q: "What are the best supplements for menopause?",
        a: "The five supplements with the strongest scientific evidence are creatine (cognition, muscles, bones), vitamin D3 (bones, immune system), magnesium (sleep, stress), omega-3 (heart, inflammation), and collagen (skin, joints).",
      },
      {
        q: "Does creatine help with menopause?",
        a: "Yes. Creatine measurably improves memory and processing speed, helps maintain muscle mass and bone density, and supports energy levels. Women have 70-80% lower creatine reserves than men.",
      },
      {
        q: "Which supplements can I combine during menopause?",
        a: "A practical starter combination is creatine (10g/day), vitamin D3 (1,000-2,000 IU/day), and magnesium (200-400 mg/day). Omega-3 and collagen are valuable additions based on your personal symptoms.",
      },
    ],
    about: [
      { name: "Menopause", url: "https://www.wikidata.org/wiki/Q131149" },
      { name: "Dietary supplement", url: "https://www.wikidata.org/wiki/Q191668" },
    ],
    mentions: [
      { name: "Creatine", url: "https://www.wikidata.org/wiki/Q186037" },
      { name: "Vitamin D", url: "https://www.wikidata.org/wiki/Q175621" },
      { name: "Magnesium", url: "https://www.wikidata.org/wiki/Q660" },
      { name: "Omega-3 fatty acid", url: "https://www.wikidata.org/wiki/Q194356" },
      { name: "Collagen", url: "https://www.wikidata.org/wiki/Q81567" },
    ],
    component: BestSupplementsMenopause,
  },
];

export default posts;
