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
    label: "over creatine & menopauze",
    items: [
      { q: "wacht, wat is creatine eigenlijk?", a: "Creatine is een stof die je lichaam van nature aanmaakt. Je brein en spieren hebben het nodig voor energie. Tijdens perimenopauze en menopauze maakt je lichaam er veel minder van, en dat hangt rechtstreeks samen met de brain fog, vermoeidheid en het spierverlies waar zoveel vrouwen last van hebben." },
      { q: "hoe helpt creatine bij menopauze?", a: "Veel menopauze-klachten (brain fog, vermoeidheid, spierverlies, weinig energie) lijken verdacht veel op creatine-tekort. Als je oestrogeen daalt, maakt je lichaam ook minder creatine aan. Door creatine aan te vullen geef je terug wat menopauze afpakt: energie voor je brein, kracht voor je spieren." },
      { q: "wat zijn de voordelen van creatine voor vrouwen?", a: "Creatine ondersteunt drie dingen die menopauze aantast: cognitie (minder brain fog), energie (minder vermoeidheid) en spiermassa (minder spierverlies). Onderzoek van Dr. Stacy Sims toont aan dat vrouwen 70-80% minder creatine aanmaken dan mannen, en dat dit verschil groter wordt als oestrogeen daalt. Aanvullen helpt aantoonbaar bij geheugen, kracht en uithoudingsvermogen." },
      { q: "wat zijn de bijwerkingen van creatine bij vrouwen?", a: "Bij de aanbevolen dosering zijn er geen klinisch relevante bijwerkingen vastgesteld. Meer dan 500 peer-reviewed studies bevestigen de veiligheid, ook bij postmenopauzale vrouwen. De meest voorkomende vraag gaat over gewichtstoename. Dat is een kleine hoeveelheid water in de spieren (1-2 kg), geen vet. Maagklachten komen zelden voor bij inname via vloeistof." },
      { q: "is creatine veilig tijdens menopauze?", a: "Meer dan 500 peer-reviewed studies (ISSN position stand, Kreider et al., 2017). Consistent veilig bevonden voor gezonde volwassenen bij de aanbevolen dosering. Het wordt al tientallen jaren onderzocht bij alle leeftijdsgroepen, inclusief postmenopauzale vrouwen." },
      { q: "word ik zwaarder van creatine?", a: "Creatine trekt water naar je spieren, dus je ziet misschien 1 tot 2 kg erbij in de eerste week. Dat is water ín de spier (niet opgeblazen), geen vet. Het stabiliseert snel. Veel vrouwen in de menopauze merken juist dat het hun spiermassa helpt behouden." },
      { q: "helpt creatine tegen brain fog?", a: "Ja. Creatine dient als snelle energiebron voor je neuronen. Onderzoek toont aan dat suppletie het werkgeheugen en de verwerkingssnelheid meetbaar verbetert, met de sterkste effecten bij vrouwen en personen onder stress of slaaptekort (Xu et al., 2024; Rae et al., 2003)." },
      { q: "hoeveel creatine heb je nodig per dag?", a: "3-5g per dag is voldoende voor spiervoordelen. Voor cognitieve voordelen gebruiken onderzoekers 10g of meer, omdat het brein hogere doseringen nodig heeft om verzadigd te raken. Bij 10g/dag zit je creatine na ~2 weken op peil." },
    ],
  },
  {
    label: "over de shot",
    items: [
      { q: "hoe smaakt het?", a: "Een pittige gembershot met warme kurkuma en frisse citrus. Citroen, ananas en sinaasappel. Het is echt een koudgeperste shot. Niet zoet. Niet medicinaal. Gewoon scherp en fris." },
      { q: "hoe verschilt dit van een pot creatine?", a: "Een pot geeft je poeder en een maatlepel. zesty geeft je 10g droog verzegeld in de dop, een koudgeperste shot met zwarte peper-extract voor opname en elektrolyten voor transport. Plus gember en kurkuma. Geen mengen, geen afmeten." },
      { q: "is 10g niet te veel?", a: "~95% van je lichaamscreatine zit in je spieren, dus standaard 3-5g verzadigt vooral je spiermassa. Je brein bevat de overige ~5%, en dat is precies wat menopauze uitput. Onderzoekers die cognitieve voordelen bij vrouwen bestuderen, gebruiken 10g+ om het brein te bereiken. Ruim binnen de onderzochte veilige marges." },
      { q: "waarom zit de creatine in de dop en niet in de vloeistof?", a: "Creatine monohydraat breekt af in vloeistof over tijd (het wordt creatinine, een afvalstof). Door het droog te verzegelen in de dop blijft het stabiel tot het moment dat je drinkt. Twist de dop, de creatine valt in de shot, shake, en drink. Maximale potentie, nul verlies." },
      { q: "kan ik creatine combineren met mijn huidige supplementen?", a: "In de meeste gevallen ja. Creatine heeft geen bekende interacties met veelvoorkomende supplementen zoals vitamine D, magnesium of omega-3. Overleg met je huisarts als je medicatie gebruikt die de nierfunctie beïnvloedt." },
      { q: "helpt kurkuma bij menopauze klachten?", a: "Kurkuma (curcumine) heeft ontstekingsremmende eigenschappen die relevant zijn bij menopauze-gerelateerde gewrichtsklachten (Hewlings & Kalman, 2017). Piperine (zwarte peper-extract) in de shot verhoogt de biobeschikbaarheid van curcumine met 2.000% (Shoba et al., 1998)." },
      { q: "waarom zitten er elektrolyten in de shot?", a: "Elektrolyten ondersteunen het transport van creatine naar je spier- en breincellen. Ze helpen ook bij de waterretentie in de spier (niet subcutaan), wat zorgt voor een efficiëntere opname." },
    ],
  },
  {
    label: "praktisch",
    items: [
      { q: "hoe lang duurt het voor ik iets merk?", a: "Bij 10g/dag zit je creatine na zo'n 2 weken op peil. Dat is sneller dan de 28 dagen die je nodig hebt bij een lagere dosis. Sommige vrouwen merken meer energie en minder brain fog al in de eerste week, anderen rond week 3-4. De 14-daagse starter is precies om die reden zo ontworpen." },
      { q: "ik zit in de perimenopauze. is het nog te vroeg?", a: "Helemaal niet, juist het perfecte moment. Je creatine-reserves nemen al af vóór de echte menopauze begint. Perimenopauze begint meestal rond je 45e, en dan al beginnen met creatine betekent dat je voorloopt op het tekort." },
      { q: "wanneer drink ik het best?", a: "'s Ochtends werkt het best als dagelijks ritueel. Twist, press, shake, drink. En je dag begint. Maar elk vast moment op de dag werkt." },
      { q: "is zesty een medicijn of een voedingssupplement?", a: "zesty is een voedingssupplement, geen medicijn. Het is niet bedoeld voor diagnose, behandeling, genezing of preventie van ziekten. Creatine monohydraat is een van de best onderzochte voedingssupplementen ter wereld, erkend door de EFSA voor het ondersteunen van fysieke prestaties." },
      { q: "hoe bewaar ik de shots?", a: "Koel en droog, uit direct zonlicht. Koelkast is niet nodig maar mag wel. De creatine in de dop is droog verzegeld en blijft stabiel tot je de dop twist." },
    ],
  },
];

// JSON-LD schema uses developer-controlled content only, no user input
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

export default function VeelgesteldeVragen() {
  return (
    <>
      <Nav locale="nl" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="max-w-2xl mx-auto">
          <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mb-4 tracking-tight">
            veelgestelde vragen
          </h1>
          <p className="text-[#2D2D2D]/60 text-lg mb-12">
            Alles wat je wil weten over creatine, menopauze en zesty.
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
              10g creatine. Eén shot. Elke ochtend.
            </p>
            <Link
              href="/nl#pricing"
              className="inline-block bg-[#F2A922] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#F2A922]/90 transition-colors"
            >
              bestel nu
            </Link>
            <p className="text-white/30 text-sm mt-3">vanaf €2,63/shot</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-lg font-extrabold text-[#F2A922] tracking-tight mb-1">zesty</p>
              <p className="text-white/30 text-sm">de menopauzeshot met creatine</p>
            </div>
            <div className="flex gap-5 text-sm text-white/35">
              <Link href="/nl" className="hover:text-white/60 transition-colors">home</Link>
              <Link href="/nl/blog" className="hover:text-white/60 transition-colors">blog</Link>
              <Link href="/nl/veelgestelde-vragen" className="hover:text-white/60 transition-colors">faq</Link>
              <Link href="/nl#pricing" className="hover:text-white/60 transition-colors">bestel</Link>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8">
            zesty is een voedingssupplement, geen medicijn. raadpleeg een arts bij twijfel.
          </p>
        </div>
      </footer>
    </>
  );
}
