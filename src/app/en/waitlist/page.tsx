import type { Metadata } from "next";
import Client from "./_client";

const SITE = "https://www.drinkzesty.be";

export const metadata: Metadata = {
  title: "Join the Zesty waitlist | daily creatine shot",
  description:
    "Pick your starter pack and leave your email. You'll be first in line when we're ready to ship.",
  openGraph: {
    title: "Join the Zesty waitlist",
    description:
      "Pick your starter pack and leave your email. You'll be first in line when we're ready to ship.",
    url: `${SITE}/en/waitlist`,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: `${SITE}/en/waitlist`,
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
