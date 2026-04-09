import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "zesty — creatine voor vrouwen in de menopauze | dagelijkse shot",
  description: "10g creatine in een koudgeperste gember & kurkuma shot. Wetenschappelijk onderbouwd voor vrouwen in de menopauze — tegen brain fog, vermoeidheid en spierverlies. Zonder bijwerkingen, elke ochtend.",
  openGraph: {
    title: "zesty — creatine voor vrouwen in de menopauze | dagelijkse shot",
    description: "10g creatine in een koudgeperste gember & kurkuma shot. Wetenschappelijk onderbouwd voor vrouwen in de menopauze — tegen brain fog, vermoeidheid en spierverlies.",
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
