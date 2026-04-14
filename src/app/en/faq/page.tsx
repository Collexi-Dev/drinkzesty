import type { Metadata } from "next";
import Client from "./_client";

const SITE = "https://www.drinkzesty.be";

export const metadata: Metadata = {
  title: "Frequently asked questions about creatine during menopause | Zesty",
  description:
    "Everything you want to know about creatine, menopause, and Zesty. Dosing, safety, side effects, taste, use. Science-backed answers.",
  openGraph: {
    title: "Frequently asked questions about creatine during menopause | Zesty",
    description:
      "Everything you want to know about creatine, menopause, and Zesty. Dosing, safety, side effects, taste, use.",
    url: `${SITE}/en/faq`,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: `${SITE}/en/faq`,
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
