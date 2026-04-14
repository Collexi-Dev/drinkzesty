import type { Metadata } from "next";
import Client from "./_client";

const SITE = "https://www.drinkzesty.be";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over creatine tijdens de menopauze | Zesty",
  description:
    "Alles wat je wil weten over creatine, menopauze en Zesty. Dosering, veiligheid, bijwerkingen, smaak, gebruik. Wetenschappelijk onderbouwde antwoorden.",
  openGraph: {
    title: "Veelgestelde vragen over creatine tijdens de menopauze | Zesty",
    description:
      "Alles wat je wil weten over creatine, menopauze en Zesty. Dosering, veiligheid, bijwerkingen, smaak, gebruik.",
    url: `${SITE}/veelgestelde-vragen`,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: `${SITE}/veelgestelde-vragen`,
    languages: {
      "nl-BE": `${SITE}/veelgestelde-vragen`,
      en: `${SITE}/en/faq`,
      "x-default": `${SITE}/veelgestelde-vragen`,
    },
  },
};

export default function Page() {
  return <Client />;
}
