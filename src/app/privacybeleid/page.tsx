import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";

const SITE = "https://www.drinkzesty.be";
const LAST_UPDATED = "14 april 2026";

export const metadata: Metadata = {
  title: "Privacybeleid | Zesty",
  description:
    "Hoe Zesty omgaat met je gegevens, welke trackers we gebruiken, en welke rechten je hebt onder de GDPR.",
  openGraph: {
    title: "Privacybeleid | Zesty",
    description: "Hoe Zesty omgaat met je gegevens, welke trackers we gebruiken, en welke rechten je hebt onder de GDPR.",
    url: `${SITE}/privacybeleid`,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: `${SITE}/privacybeleid`,
    languages: {
      "nl-BE": `${SITE}/privacybeleid`,
      en: `${SITE}/en/privacy`,
      "x-default": `${SITE}/privacybeleid`,
    },
  },
};

export default function PrivacybeleidPage() {
  return (
    <>
      <Nav locale="nl" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <article className="max-w-2xl mx-auto prose prose-lg prose-neutral [&>p]:text-[#2D2D2D]/80 [&>p]:leading-relaxed [&>h2]:text-[#2D2D2D] [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-[#2D2D2D] [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-2 [&>ul]:text-[#2D2D2D]/80 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-bold [&_th]:text-[#2D2D2D] [&_th]:pb-2 [&_th]:border-b [&_th]:border-[#2D2D2D]/15 [&_td]:py-2.5 [&_td]:border-b [&_td]:border-[#2D2D2D]/8 [&_td]:text-[#2D2D2D]/70">
          <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mb-4 tracking-tight">
            Privacybeleid
          </h1>
          <p className="text-[#2D2D2D]/50 text-sm">Laatst bijgewerkt: {LAST_UPDATED}.</p>

          <p>
            Zesty is in ontwikkeling. We zijn nog niet officieel gelanceerd en verkopen op dit moment niets. We verzamelen wel e-mailadressen voor de wachtlijst, en we gebruiken statistiektools om te begrijpen hoe bezoekers de site gebruiken. Dit beleid legt uit wat we doen en welke rechten je hebt onder de Algemene Verordening Gegevensbescherming (GDPR).
          </p>

          <h2>Wie is verantwoordelijk</h2>
          <p>
            Het Zesty team is verantwoordelijk voor de verwerking van je gegevens. Voor vragen, verzoeken of het uitoefenen van je rechten:{" "}
            <a href="mailto:hello@drinkzesty.be" className="text-[#F2A922] font-semibold hover:underline">hello@drinkzesty.be</a>. We reageren binnen 30 dagen.
          </p>
          <p>
            Zodra Zesty een geregistreerd bedrijf wordt, vermelden we hier de volledige bedrijfsgegevens.
          </p>

          <h2>Welke gegevens we verzamelen</h2>
          <h3>Wanneer je de site bezoekt</h3>
          <ul>
            <li>Anonieme gebruiksgegevens via PostHog: pagina's die je bekijkt, klikken, apparaat en browser, land op basis van IP. IP-adressen worden geanonimiseerd.</li>
            <li>Functionele cookies om de site te laten werken.</li>
            <li>Meta Pixel registreert paginabezoeken en interacties voor advertentiemeting (we draaien tijdens deze validatiefase betaalde Meta-advertenties).</li>
          </ul>
          <h3>Wanneer je je inschrijft voor de wachtlijst</h3>
          <ul>
            <li>Je e-mailadres en het startpakket dat je interessant vindt.</li>
            <li>Tijdstip van inschrijving.</li>
          </ul>
          <p>
            We verzamelen geen betaalgegevens of adresgegevens, omdat we nog niet verkopen.
          </p>

          <h2>Waarom we deze gegevens verwerken</h2>
          <table>
            <thead>
              <tr><th>Doel</th><th>Rechtsgrond</th></tr>
            </thead>
            <tbody>
              <tr><td>Je wachtlijst-inschrijving beheren en je informeren bij lancering</td><td>Uitvoering van de overeenkomst (art. 6.1.b GDPR)</td></tr>
              <tr><td>Begrijpen hoe bezoekers de site gebruiken om het product te verbeteren</td><td>Gerechtvaardigd belang (art. 6.1.f GDPR)</td></tr>
              <tr><td>Advertentiemeting via Meta Pixel</td><td>Gerechtvaardigd belang voor productvalidatie (art. 6.1.f GDPR)</td></tr>
            </tbody>
          </table>

          <h2>Met wie we gegevens delen</h2>
          <p>We verkopen je gegevens aan niemand. We delen enkel wat technisch nodig is met:</p>
          <ul>
            <li><strong>PostHog</strong>: geanonimiseerde websitestatistieken.</li>
            <li><strong>Meta Platforms</strong> (via Meta Pixel): voor advertentiemeting. Data kan buiten de EU worden verwerkt onder het EU-VS Data Privacy Framework.</li>
            <li><strong>Onze e-mailprovider</strong>: voor het versturen van wachtlijst-mails.</li>
          </ul>

          <h2>Hoelang we je gegevens bewaren</h2>
          <ul>
            <li>Wachtlijst-inschrijvingen: tot je je uitschrijft, of uiterlijk 2 jaar na laatste activiteit als we dan nog niet gelanceerd zijn.</li>
            <li>Analytics-gegevens: maximaal 12 maanden, daarna geaggregeerd.</li>
          </ul>

          <h2>Je rechten</h2>
          <p>Je hebt het recht om:</p>
          <ul>
            <li>inzage te krijgen in je persoonsgegevens,</li>
            <li>correctie of verwijdering aan te vragen,</li>
            <li>beperking of bezwaar te maken tegen verwerking,</li>
            <li>overdraagbaarheid van je gegevens,</li>
            <li>een toestemming in te trekken,</li>
            <li>een klacht in te dienen bij de{" "}
              <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="text-[#F2A922] font-semibold hover:underline">Gegevensbeschermingsautoriteit</a>.</li>
          </ul>
          <p>
            Een verzoek doe je via{" "}
            <a href="mailto:hello@drinkzesty.be" className="text-[#F2A922] font-semibold hover:underline">hello@drinkzesty.be</a>. We reageren binnen 30 dagen.
          </p>

          <h2>Wijzigingen</h2>
          <p>
            We passen dit beleid aan wanneer onze verwerking verandert, of wanneer Zesty een geregistreerd bedrijf wordt. De laatst bijgewerkte datum staat bovenaan.
          </p>
        </article>
      </main>

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
