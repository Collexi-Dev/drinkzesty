import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";

const SITE = "https://www.drinkzesty.be";
const LAST_UPDATED = "April 14, 2026";

export const metadata: Metadata = {
  title: "Privacy policy | Zesty",
  description:
    "How Zesty handles your data, the trackers we use, and what rights you have under the GDPR.",
  openGraph: {
    title: "Privacy policy | Zesty",
    description: "How Zesty handles your data, the trackers we use, and what rights you have under the GDPR.",
    url: `${SITE}/en/privacy`,
    siteName: "Zesty",
    type: "website",
  },
  alternates: {
    canonical: `${SITE}/en/privacy`,
    languages: {
      "nl-BE": `${SITE}/privacybeleid`,
      en: `${SITE}/en/privacy`,
      "x-default": `${SITE}/privacybeleid`,
    },
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav locale="en" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <article className="max-w-2xl mx-auto prose prose-lg prose-neutral [&>p]:text-[#2D2D2D]/80 [&>p]:leading-relaxed [&>h2]:text-[#2D2D2D] [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-[#2D2D2D] [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-2 [&>ul]:text-[#2D2D2D]/80 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-bold [&_th]:text-[#2D2D2D] [&_th]:pb-2 [&_th]:border-b [&_th]:border-[#2D2D2D]/15 [&_td]:py-2.5 [&_td]:border-b [&_td]:border-[#2D2D2D]/8 [&_td]:text-[#2D2D2D]/70">
          <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mb-4 tracking-tight">
            Privacy policy
          </h1>
          <p className="text-[#2D2D2D]/50 text-sm">Last updated: {LAST_UPDATED}.</p>

          <p>
            Zesty is in development. We have not officially launched and we are not selling anything right now. We do collect email addresses for the waitlist, and we use analytics tools to understand how visitors use the site. This policy explains what we do and what rights you have under the EU General Data Protection Regulation (GDPR).
          </p>

          <h2>Who is responsible</h2>
          <p>
            The Zesty team is responsible for processing your data. For questions, requests, or to exercise your rights:{" "}
            <a href="mailto:hello@drinkzesty.be" className="text-[#F2A922] font-semibold hover:underline">hello@drinkzesty.be</a>. We respond within 30 days.
          </p>
          <p>
            Once Zesty becomes a registered business, the full company details will be listed here.
          </p>

          <h2>What we collect</h2>
          <h3>When you visit the site</h3>
          <ul>
            <li>Anonymous usage data via PostHog: pages you view, clicks, device and browser, country based on IP. IP addresses are anonymized.</li>
            <li>Functional cookies to operate the site.</li>
            <li>Meta Pixel records page views and interactions for ad measurement (we run paid Meta ads during this validation phase).</li>
          </ul>
          <h3>When you join the waitlist</h3>
          <ul>
            <li>Your email address and the starter pack you find interesting.</li>
            <li>Time of signup.</li>
          </ul>
          <p>
            We do not collect payment or shipping data, because we are not selling yet.
          </p>

          <h2>Why we process this data</h2>
          <table>
            <thead>
              <tr><th>Purpose</th><th>Legal basis</th></tr>
            </thead>
            <tbody>
              <tr><td>Managing your waitlist signup and notifying you at launch</td><td>Contract performance (art. 6.1.b GDPR)</td></tr>
              <tr><td>Understanding how visitors use the site to improve the product</td><td>Legitimate interest (art. 6.1.f GDPR)</td></tr>
              <tr><td>Ad measurement via Meta Pixel</td><td>Legitimate interest for product validation (art. 6.1.f GDPR)</td></tr>
            </tbody>
          </table>

          <h2>Who we share data with</h2>
          <p>We do not sell your data to anyone. We share only what is technically needed with:</p>
          <ul>
            <li><strong>PostHog</strong>: anonymized website statistics.</li>
            <li><strong>Meta Platforms</strong> (via Meta Pixel): for ad measurement. Data may be processed outside the EU under the EU-US Data Privacy Framework.</li>
            <li><strong>Our email provider</strong>: for sending waitlist emails.</li>
          </ul>

          <h2>How long we keep data</h2>
          <ul>
            <li>Waitlist signups: until you unsubscribe, or at most 2 years after last activity if we have not launched by then.</li>
            <li>Analytics data: 12 months maximum, aggregated after that.</li>
          </ul>

          <h2>Your rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>access your personal data,</li>
            <li>request correction or deletion,</li>
            <li>restrict or object to processing,</li>
            <li>portability of your data,</li>
            <li>withdraw any consent,</li>
            <li>file a complaint with the{" "}
              <a href="https://www.dataprotectionauthority.be" target="_blank" rel="noopener noreferrer" className="text-[#F2A922] font-semibold hover:underline">Belgian Data Protection Authority</a>.</li>
          </ul>
          <p>
            Send requests to{" "}
            <a href="mailto:hello@drinkzesty.be" className="text-[#F2A922] font-semibold hover:underline">hello@drinkzesty.be</a>. We respond within 30 days.
          </p>

          <h2>Changes</h2>
          <p>
            We update this policy when our processing changes, or when Zesty becomes a registered business. The "last updated" date appears at the top.
          </p>
        </article>
      </main>

      <footer className="bg-[#2D2D2D] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-lg font-extrabold text-[#F2A922] tracking-tight mb-1">zesty</p>
              <p className="text-white/30 text-sm">The menopause shot with creatine</p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/35">
              <Link href="/en" className="hover:text-white/60 transition-colors">Home</Link>
              <Link href="/en/blog" className="hover:text-white/60 transition-colors">Blog</Link>
              <Link href="/en/faq" className="hover:text-white/60 transition-colors">FAQ</Link>
              <Link href="/en/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8">
            Zesty is a dietary supplement, not medicine. Consult a doctor if in doubt.
          </p>
        </div>
      </footer>
    </>
  );
}
