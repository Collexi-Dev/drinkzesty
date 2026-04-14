import type { Metadata } from "next";
import { headers } from "next/headers";
import { Quicksand, Playfair_Display, Caveat } from "next/font/google";
import { PostHogProvider } from "./providers";
import { MetaPixel } from "./meta-pixel";
import "./globals.css";

const SITE_URL = "https://www.drinkzesty.be";

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
  metadataBase: new URL(SITE_URL),
  title: "Zesty: dagelijkse creatine shot voor vrouwen in de menopauze",
  description:
    "10g creatine in een koudgeperste gember en kurkuma shot. Onderzocht bij vrouwen in de menopauze. Eén shot per ochtend.",
  openGraph: {
    title: "Zesty: dagelijkse creatine shot voor vrouwen in de menopauze",
    description:
      "10g creatine in een koudgeperste gember en kurkuma shot. Onderzocht bij vrouwen in de menopauze.",
    url: SITE_URL,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "nl-BE": SITE_URL,
      en: `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const locale = h.get("x-locale") === "en" ? "en" : "nl-BE";

  // Organization + WebSite schema, developer-controlled content, no user input
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Zesty",
        alternateName: ["Drink Zesty", "Zesty Menopause Shot"],
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website-nl`,
        url: `${SITE_URL}/`,
        name: "Zesty",
        inLanguage: "nl-BE",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website-en`,
        url: `${SITE_URL}/en`,
        name: "Zesty",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <html
      lang={locale}
      className={`h-full antialiased ${quicksand.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <MetaPixel />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
