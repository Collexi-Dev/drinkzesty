import type { Metadata } from "next";

const SITE_URL = "https://www.drinkzesty.be";

export const metadata: Metadata = {
  title: "Zesty: the daily creatine shot for women in menopause",
  description:
    "10g creatine in a cold-pressed ginger and turmeric shot. Researched in women in menopause. One shot, every morning.",
  openGraph: {
    title: "Zesty: the daily creatine shot for women in menopause",
    description:
      "10g creatine in a cold-pressed ginger and turmeric shot. Researched in women in menopause.",
    url: `${SITE_URL}/en`,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      "nl-BE": SITE_URL,
      en: `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
