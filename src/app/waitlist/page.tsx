import type { Metadata } from "next";
import Client from "./_client";

const SITE = "https://www.drinkzesty.be";

export const metadata: Metadata = {
  title: "Kom op de wachtlijst voor Zesty | dagelijkse creatine shot",
  description:
    "Kies je startpakket en laat je mailadres achter. Je bent als eerste aan de beurt zodra we klaar zijn om te verzenden.",
  openGraph: {
    title: "Kom op de wachtlijst voor Zesty",
    description:
      "Kies je startpakket en laat je mailadres achter. Je bent als eerste aan de beurt zodra we klaar zijn om te verzenden.",
    url: `${SITE}/waitlist`,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: `${SITE}/waitlist`,
    languages: {
      "nl-BE": `${SITE}/waitlist`,
      en: `${SITE}/en/waitlist`,
      "x-default": `${SITE}/waitlist`,
    },
  },
};

export default function Page() {
  return <Client />;
}
