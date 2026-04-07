import type { Metadata } from "next";
import { Quicksand, Playfair_Display, Caveat } from "next/font/google";
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
  title: "zesty — ginger + turmeric shot with 10g creatine",
  description: "The supplement everyone should take. Finally in your morning shot. 10g creatine sealed fresh in the cap of a ginger + turmeric wellness shot.",
  openGraph: {
    title: "zesty — ginger + turmeric shot with 10g creatine",
    description: "The supplement everyone should take. Finally in your morning shot.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
