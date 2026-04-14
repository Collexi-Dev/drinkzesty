import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zesty: the daily creatine shot for menopause",
  description: "10g creatine in a cold-pressed ginger & turmeric shot. Built for women in menopause, fights brain fog, fatigue, and muscle loss. One shot, every morning.",
  openGraph: {
    title: "Zesty: the daily creatine shot for menopause",
    description: "10g creatine in a cold-pressed ginger & turmeric shot. Built for women in menopause, fights brain fog, fatigue, and muscle loss.",
    url: "https://drinkzesty.be/en",
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: "https://drinkzesty.be/en",
    languages: {
      nl: "https://drinkzesty.be",
      en: "https://drinkzesty.be/en",
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
