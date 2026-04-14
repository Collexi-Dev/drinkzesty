import type { Metadata } from "next";
import { Quicksand, Playfair_Display, Caveat } from "next/font/google";
import { PostHogProvider } from "./providers";
import { MetaPixel } from "./meta-pixel";
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
  title: "Zesty: creatine voor vrouwen in de menopauze | dagelijkse shot",
  description: "10g creatine in een koudgeperste gember & kurkuma shot. Wetenschappelijk onderbouwd voor vrouwen in de menopauze. Tegen brain fog, vermoeidheid en spierverlies. Elke ochtend.",
  openGraph: {
    title: "Zesty: creatine voor vrouwen in de menopauze | dagelijkse shot",
    description: "10g creatine in een koudgeperste gember & kurkuma shot. Wetenschappelijk onderbouwd voor vrouwen in de menopauze.",
    url: "https://drinkzesty.be",
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: "https://drinkzesty.be",
    languages: {
      nl: "https://drinkzesty.be",
      en: "https://drinkzesty.be/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`h-full antialiased ${quicksand.variable} ${playfair.variable} ${caveat.variable}`}>
      {/* WebSite schema - developer-controlled content, no user input */}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Zesty",
              url: "https://drinkzesty.be",
              inLanguage: ["nl", "en"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MetaPixel />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
