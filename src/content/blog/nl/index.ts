import type { BlogPost } from "@/lib/blog";
import type { ComponentType } from "react";

import BijwerkingenCreatineVrouwen from "./bijwerkingen-creatine-vrouwen.mdx";
import CreatineVoordelenVrouwen from "./creatine-voordelen-vrouwen.mdx";
import BesteSupplementenMenopauze from "./beste-supplementen-menopauze.mdx";

interface BlogEntry extends BlogPost {
  component: ComponentType;
}

const posts: BlogEntry[] = [
  {
    slug: "bijwerkingen-creatine-vrouwen",
    title: "Bijwerkingen van creatine bij vrouwen: wat zegt het onderzoek?",
    image: "/images/blog-article-1.jpeg",
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
  {
    slug: "creatine-voordelen-vrouwen",
    title: "Creatine voordelen voor vrouwen: wat het onderzoek zegt",
    image: "/images/blog-article-2.jpeg",
    description:
      "De wetenschappelijk bewezen voordelen van creatine voor vrouwen in de menopauze: minder brain fog, meer energie, behoud van spiermassa en botgezondheid.",
    date: "2026-04-09",
    readingTime: "7 min",
    faqs: [
      {
        q: "Wat doet creatine voor vrouwen?",
        a: "Creatine ondersteunt cognitie (minder brain fog), energie (minder vermoeidheid) en spiermassa (minder spierverlies). Vrouwen hebben 70-80% lagere creatine-reserves dan mannen, wat suppletie extra relevant maakt.",
      },
      {
        q: "Helpt creatine tegen brain fog in de menopauze?",
        a: "Onderzoek toont aan dat creatine het werkgeheugen, de aandacht en de verwerkingssnelheid meetbaar verbetert. De effecten zijn het sterkst bij vrouwen en bij personen onder stress of slaaptekort.",
      },
      {
        q: "Hoeveel creatine per dag voor vrouwen?",
        a: "3-5g per dag is voldoende voor spiervoordelen. Voor cognitieve voordelen gebruiken onderzoekers 10g of meer om ook het brein te bereiken.",
      },
    ],
    component: CreatineVoordelenVrouwen,
  },
  {
    slug: "beste-supplementen-menopauze",
    title: "Beste supplementen voor vrouwen in de menopauze [2026]",
    image: "/images/blog-article-3.jpeg",
    description:
      "Welke supplementen helpen echt bij menopauze? Een eerlijk, wetenschappelijk onderbouwd overzicht van creatine, vitamine D, magnesium, omega-3 en collageen.",
    date: "2026-04-09",
    readingTime: "8 min",
    faqs: [
      {
        q: "Welke supplementen zijn het best voor de menopauze?",
        a: "De vijf supplementen met het sterkste wetenschappelijke bewijs zijn creatine (cognitie, spieren, botten), vitamine D3 (botten, immuunsysteem), magnesium (slaap, stress), omega-3 (hart, ontsteking) en collageen (huid, gewrichten).",
      },
      {
        q: "Helpt creatine bij menopauze?",
        a: "Ja. Creatine verbetert meetbaar het geheugen en de verwerkingssnelheid, helpt spiermassa en botdichtheid behouden, en ondersteunt het energieniveau. Vrouwen hebben 70-80% lagere creatine-reserves dan mannen.",
      },
      {
        q: "Welke supplementen kan ik combineren tijdens de menopauze?",
        a: "Een praktische basiscombinatie is creatine (10g/dag), vitamine D3 (1000-2000 IE/dag) en magnesium (200-400 mg/dag). Omega-3 en collageen zijn waardevolle aanvullingen op basis van persoonlijke klachten.",
      },
    ],
    component: BesteSupplementenMenopauze,
  },
];

export default posts;
