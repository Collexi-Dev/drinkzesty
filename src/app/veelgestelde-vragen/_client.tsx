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
    label: "Over creatine & menopauze",
    items: [
      { q: "Wacht, wat is creatine eigenlijk?", a: "Creatine is een stof die je lichaam van nature aanmaakt. Je hersenen en spieren gebruiken het in hun energiesysteem. Tijdens perimenopauze en menopauze maakt je lichaam er minder van. Klachten die vrouwen in deze periode vaak melden (brain fog, vermoeidheid, verminderde kracht) worden in onderzoek mee in verband gebracht met dat dalende creatine-niveau." },
      { q: "Hoe helpt creatine bij menopauze?", a: "EFSA erkent creatine voor het verbeteren van fysieke prestaties bij herhaalde, kortdurende inspanning. Daarbuiten lopen er studies bij vrouwen in en na de menopauze die kijken naar mogelijke effecten op cognitie, energie en spierbehoud. De bevindingen wijzen in een hoopgevende richting. Of jij persoonlijk een verschil merkt, kan per persoon variëren." },
      { q: "Wat zijn de voordelen van creatine voor vrouwen?", a: "Onderzoek wijst uit dat vrouwen ongeveer 70-80% lagere creatine-reserves hebben dan mannen, en dat dit verschil groter wordt als oestrogeen daalt (Smith-Ryan et al., 2021). Studies bij vrouwen kijken naar mogelijke effecten op cognitie, spierbehoud en kracht in combinatie met training. Voor fysieke prestaties bij herhaalde, kortdurende inspanning is creatine officieel erkend door EFSA." },
      { q: "Wat zijn de bijwerkingen van creatine bij vrouwen?", a: "Bij de aanbevolen dosering zijn er geen klinisch relevante bijwerkingen vastgesteld. Meer dan 500 peer-reviewed studies bevestigen de veiligheid, ook bij postmenopauzale vrouwen. De meest voorkomende vraag gaat over gewichtstoename. Dat is een kleine hoeveelheid water in de spieren (1-2 kg), geen vet. Maagklachten komen zelden voor bij inname via vloeistof." },
      { q: "Is creatine veilig tijdens menopauze?", a: "Meer dan 500 peer-reviewed studies (ISSN position stand, Kreider et al., 2017). Consistent veilig bevonden voor gezonde volwassenen bij de aanbevolen dosering. Het wordt al tientallen jaren onderzocht bij alle leeftijdsgroepen, inclusief postmenopauzale vrouwen." },
      { q: "Word ik zwaarder van creatine?", a: "Creatine trekt water naar je spieren, dus je ziet misschien 1 tot 2 kg erbij in de eerste week. Dat is water in de spier, geen vet. Het stabiliseert snel." },
      { q: "Helpt creatine tegen brain fog?", a: "Onderzoek bij vrouwen suggereert dat creatinesuppletie het werkgeheugen en de verwerkingssnelheid kan verbeteren, met de sterkste effecten bij stress of slaaptekort (Xu et al., 2024; Rae et al., 2003). Wat je persoonlijk merkt kan variëren. Een eerlijke leestip: dit zijn geen goedgekeurde gezondheidsclaims maar bevindingen uit lopend onderzoek." },
      { q: "Hoeveel creatine heb je nodig per dag?", a: "3-5g per dag is voldoende om spiermassa te verzadigen. Voor onderzoek naar cognitieve effecten gebruiken wetenschappers 10g of meer, omdat hogere doses nodig zijn om bij te dragen aan hersencreatine. Bij 10g per dag zit je creatine na ongeveer 2 weken op peil." },
      { q: "Helpt creatine ook voor de hersenen op lange termijn?", a: "Onderzoekers bestuderen creatine actief als beschermende factor voor de hersenen bij veroudering. Een pilotstudie bij Alzheimerpatiënten (Smith et al., 2025) rapporteerde verbetering in cognitie na creatinesuppletie. Het is een klein, vroeg onderzoek, maar de richting is hoopgevend en de veiligheid op lange termijn is goed vastgesteld." },
    ],
  },
  {
    label: "Over de shot",
    items: [
      { q: "Hoe smaakt het?", a: "Een pittige gembershot met warme kurkuma en frisse citrus. Citroen, ananas en sinaasappel. Het is echt een koudgeperste shot. Niet zoet. Niet medicinaal. Gewoon scherp en fris." },
      { q: "Hoe verschilt dit van een pot creatine?", a: "Een pot geeft je poeder en een maatlepel. Zesty geeft je 10g droog verzegeld in de dop, een koudgeperste shot met zwarte peper-extract voor opname en elektrolyten voor transport. Plus gember en kurkuma. Geen mengen, geen afmeten." },
      { q: "Is 10g niet te veel?", a: "~95% van je lichaamscreatine zit in je spieren, dus standaard 3-5g verzadigt vooral je spiermassa. Je hersenen bevat de overige ~5%, en dat is precies wat menopauze uitput. Onderzoekers die cognitieve voordelen bij vrouwen bestuderen, gebruiken 10g+ om de hersenen te bereiken. Ruim binnen de onderzochte veilige marges." },
      { q: "Waarom zit de creatine in de dop en niet in de vloeistof?", a: "Creatine monohydraat breekt af in vloeistof over tijd (het wordt creatinine, een afvalstof). Door het droog te verzegelen in de dop blijft het stabiel tot het moment dat je drinkt. Twist de dop, de creatine valt in de shot, shake, en drink. Maximale potentie, nul verlies." },
      { q: "Kan ik creatine combineren met mijn huidige supplementen?", a: "In de meeste gevallen ja. Creatine heeft geen bekende interacties met veelvoorkomende supplementen zoals vitamine D, magnesium of omega-3. Overleg met je huisarts als je medicatie gebruikt die de nierfunctie beïnvloedt." },
      { q: "Helpt kurkuma bij menopauze klachten?", a: "Kurkuma (curcumine) heeft ontstekingsremmende eigenschappen die relevant zijn bij menopauze-gerelateerde gewrichtsklachten (Hewlings & Kalman, 2017). Piperine (zwarte peper-extract) in de shot verhoogt de biobeschikbaarheid van curcumine met 2.000% (Shoba et al., 1998)." },
      { q: "Waarom zitten er elektrolyten in de shot?", a: "Elektrolyten ondersteunen het transport van creatine naar je spier- en hersenencellen. Ze helpen ook bij de waterretentie in de spier (niet subcutaan), wat zorgt voor een efficiëntere opname." },
    ],
  },
  {
    label: "Praktisch",
    items: [
      { q: "Hoe lang duurt het voor ik iets merk?", a: "Bij 10g per dag zit je creatine na zo'n 2 weken op peil. Dat is sneller dan de 28 dagen bij een lagere dosis. Wat je daarna merkt verschilt per persoon. Sommige vrouwen melden in onderzoek meer energie en minder brain fog na enkele weken, anderen merken weinig verschil. De 14-daagse starter is er om dat zelf te kunnen testen." },
      { q: "Moet ik een laadfase doen met Zesty?", a: "Nee. ChatGPT en veel sportartikels noemen nog een laadfase van 20g per dag. Die aanpak komt uit studies bij jonge mannen uit de jaren '90 en is bij vrouwen in de menopauze niet nodig. Met 10g per dag zit je creatine na ongeveer 2 weken op peil, zonder de maag- en darmklachten die een hoge laaddosis kan geven. Onderzoek van Forbes en Candow (2022) bevestigt dat een gelijkmatige dosis even effectief is als een loading protocol, met minder bijwerkingen." },
      { q: "Ik zit in de perimenopauze. Is het nog te vroeg?", a: "Helemaal niet, juist het perfecte moment. Je creatine-reserves nemen al af vóór de echte menopauze begint. Perimenopauze begint meestal rond je 45e, en dan al beginnen met creatine betekent dat je voorloopt op het tekort." },
      { q: "Wanneer drink ik het best?", a: "'s Ochtends werkt het best als dagelijks ritueel. Twist, press, shake, drink. En je dag begint. Maar elk vast moment op de dag werkt." },
      { q: "Is Zesty een medicijn of een voedingssupplement?", a: "Zesty is een voedingssupplement, geen medicijn. Het is niet bedoeld voor diagnose, behandeling, genezing of preventie van ziekten. Creatine monohydraat is een van de best onderzochte voedingssupplementen ter wereld, erkend door de EFSA voor het ondersteunen van fysieke prestaties." },
      { q: "Hoe bewaar ik de shots?", a: "Koel en droog, uit direct zonlicht. Koelkast is niet nodig maar mag wel. De creatine in de dop is droog verzegeld en blijft stabiel tot je de dop twist." },
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

export default function VeelgesteldeVragenClient() {
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
            Veelgestelde vragen
          </h1>
          <p className="text-[#2D2D2D]/60 text-lg mb-12">
            Alles wat je wil weten over creatine, menopauze en Zesty.
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
              Zesty
            </p>
            <p className="text-white text-xl md:text-2xl font-extrabold mb-4">
              10g creatine. Eén shot. Elke ochtend.
            </p>
            <Link
              href="/#order"
              className="inline-block bg-[#F2A922] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#F2A922]/90 transition-colors"
            >
              Bestel nu
            </Link>
            <p className="text-white/30 text-sm mt-3">Vanaf €2,63/shot</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-lg font-extrabold text-[#F2A922] tracking-tight mb-1">zesty</p>
              <p className="text-white/30 text-sm">De menopauzeshot met creatine</p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/35">
              <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
              <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
              <Link href="/veelgestelde-vragen" className="hover:text-white/60 transition-colors">FAQ</Link>
              <Link href="/privacybeleid" className="hover:text-white/60 transition-colors">Privacy</Link>
              <Link href="/#order" className="hover:text-white/60 transition-colors">Bestel</Link>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8">
            Zesty is een voedingssupplement, geen medicijn. Raadpleeg een arts bij twijfel.
          </p>
        </div>
      </footer>
    </>
  );
}
