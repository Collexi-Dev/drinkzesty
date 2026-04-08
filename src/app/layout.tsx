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
  title: "zesty — the menopause shot with 10g creatine",
  description: "The menopause shot that fights the fog, the fatigue, and the fade. 10g creatine sealed fresh in the cap of a cold-pressed ginger + turmeric wellness shot.",
  openGraph: {
    title: "zesty — the menopause shot with 10g creatine",
    description: "The menopause shot that fights the fog, the fatigue, and the fade. 10g creatine · ginger + turmeric · one daily shot.",
    url: "https://drinkzesty.be",
    siteName: "zesty",
    type: "website",
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
