import type { BlogPost } from "@/lib/blog";
import type { ComponentType } from "react";

import BijwerkingenCreatineVrouwen from "./bijwerkingen-creatine-vrouwen.mdx";

interface BlogEntry extends BlogPost {
  component: ComponentType;
}

const posts: BlogEntry[] = [
  {
    slug: "bijwerkingen-creatine-vrouwen",
    title: "Bijwerkingen van creatine bij vrouwen: wat zegt het onderzoek?",
    description:
      "Alles over de bijwerkingen van creatine bij vrouwen. Wat zegt de wetenschap? Is creatine veilig tijdens de menopauze? Een eerlijk overzicht.",
    date: "2026-04-09",
    readingTime: "6 min",
    faqs: [
      {
        q: "Is creatine veilig voor vrouwen?",
        a: "Ja. Meer dan 500 peer-reviewed studies bevestigen de veiligheid van creatine bij de aanbevolen dosering, inclusief bij postmenopauzale vrouwen.",
      },
      {
        q: "Kom je aan van creatine?",
        a: "Creatine veroorzaakt 1-2 kg waterretentie in de spieren in de eerste week. Dit is geen vet en stabiliseert snel.",
      },
      {
        q: "Heeft creatine effect op hormonen bij vrouwen?",
        a: "Nee. Creatine heeft geen aangetoond effect op vrouwelijke hormonen. Het werkt op cellulair energieniveau, niet op het hormonale systeem.",
      },
    ],
    component: BijwerkingenCreatineVrouwen,
  },
];

export default posts;
