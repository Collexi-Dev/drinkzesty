import type { Metadata } from "next";
import { Quicksand, Playfair_Display, Caveat } from "next/font/google";
import { PostHogProvider } from "./providers";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drinkzesty.be"),
  title: "zesty — the daily creatine shot for menopause",
  description: "10g creatine in a cold-pressed ginger & turmeric shot. Built for women in menopause — fights brain fog, fatigue, and muscle loss. One shot, every morning.",
  openGraph: {
    title: "zesty — the daily creatine shot for menopause",
    description: "10g creatine in a cold-pressed ginger & turmeric shot. Built for women in menopause — fights brain fog, fatigue, and muscle loss.",
    url: "https://drinkzesty.be",
    siteName: "zesty",
    type: "website",
  },
  alternates: {
    canonical: "https://drinkzesty.be",
    languages: {
      en: "https://drinkzesty.be",
      nl: "https://drinkzesty.be/nl",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${quicksand.variable} ${playfair.variable} ${caveat.variable}`}>
      <body className="min-h-full flex flex-col">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
