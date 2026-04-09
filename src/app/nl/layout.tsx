import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "zesty — de dagelijkse creatine shot voor de overgang",
  description: "10g creatine in een koudgeperste gember & kurkuma shot. Voor vrouwen in de overgang — tegen brain fog, vermoeidheid en spierverlies. Eén shot, elke ochtend.",
  openGraph: {
    title: "zesty — de dagelijkse creatine shot voor de overgang",
    description: "10g creatine in een koudgeperste gember & kurkuma shot. Voor vrouwen in de overgang — tegen brain fog, vermoeidheid en spierverlies.",
    url: "https://drinkzesty.be/nl",
    siteName: "zesty",
    type: "website",
  },
  alternates: {
    canonical: "https://drinkzesty.be/nl",
    languages: {
      en: "https://drinkzesty.be",
      nl: "https://drinkzesty.be/nl",
    },
  },
};

export default function NlLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
