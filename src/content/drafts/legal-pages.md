# Legal pages for the validation phase

You are pre-launch, no KBO yet, no payments, no shipping. You are collecting emails (waitlist) and running tracking pixels (PostHog + Meta Pixel). That changes what you actually need.

## What you legally need right now

| Page | Needed now? | Why |
|---|---|---|
| Privacy policy | **Yes** | GDPR Article 13 applies the moment you collect a single email or fire any tracking pixel. The data controller becomes you personally (Bram Nouwen) until a company exists. |
| Cookie banner | **Yes, before going live with ads** | Meta Pixel especially needs explicit opt-in. PostHog can run anonymous-only without consent if configured that way. |
| About page | **Optional, recommended** | Helps trust + SEO. Doesn't have to be a legal document. |
| Terms and conditions | **Not yet** | T&Cs cover the sale of goods. You aren't selling anything yet. Add this **before the first paid order**. |
| Right of withdrawal text | **Not yet** | Same reason as T&Cs. |
| Imprint with KBO + VAT | **Not yet, but required at first sale** | Belgian Code of Economic Law (art. III.74) requires identification of the trader. Until you take payments, you can operate as a private person. |

## What you must do before the first sale

You cannot legally take a paid order on drinkzesty.be without:

1. A registered business at the KBO/BCE (sole trader is fine and cheap)
2. A VAT number (or KOR exemption registration if under €25k/year)
3. Trader identity displayed in your footer or imprint page
4. T&Cs covering distance selling
5. A clear right-of-withdrawal notice (14 days, with the supplement-seal exception)

Recommended timing: register the business + VAT roughly when you finish validation and decide to ship. The privacy policy below already references "{{LEGAL_NAME_OR_PERSON}}", so swapping it from your name to the company name later is a 1-line change.

---

## Templates ready to publish now

Two pages: `over-ons` / `about` (optional, recommended) and `privacybeleid` / `privacy` (required).

**Placeholders:**
- `{{YOUR_NAME}}` — your name (Bram Nouwen)
- `{{YOUR_CITY}}` — city you're based in (no street address needed for a private person without a registered business)
- `{{CONTACT_EMAIL}}` — likely `hello@drinkzesty.be`

---

## 1. Over ons (Nederlands) — `src/app/over-ons/page.tsx`

```mdx
# Over Zesty

Zesty is een drinkbare dagelijkse creatine shot in ontwikkeling, ontworpen voor vrouwen in perimenopauze en menopauze. 10g creatine, koudgeperste gember en kurkuma, vitamine C, elektrolyten. Eén shot per ochtend, zonder poeder, zonder mixen.

We zijn nog niet gelanceerd. We bouwen, testen en luisteren. Zet je op de wachtlijst en je hoort het als eerste wanneer we klaar zijn om te verzenden.

## Waarom dit bestaat

De wetenschap over creatine en menopauze is duidelijk geworden in de laatste paar jaar. De producten op de markt waren dat niet. De meeste creatineproducten zijn ontwikkeld voor jonge mannen in de sportschool. Zesty is een shot voor vrouwen die om 7 uur 's ochtends iets willen dat werkt, er goed uitziet en in 10 seconden klaar is.

## Wie

{{YOUR_NAME}}, gevestigd in {{YOUR_CITY}}. Voor vragen, feedback of gewoon zin om hallo te zeggen: {{CONTACT_EMAIL}}.

We zijn momenteel een initiatief in validatiefase. Op het moment dat we beginnen te verzenden, registreren we Zesty als bedrijf en vind je hier de volledige bedrijfsgegevens.
```

## 1b. About (English) — `src/app/en/about/page.tsx`

```mdx
# About Zesty

Zesty is a drinkable daily creatine shot in development, designed for women in perimenopause and menopause. 10g of creatine, cold-pressed ginger and turmeric, vitamin C, electrolytes. One shot every morning, no powder, no mixing.

We have not launched yet. We are building, testing, and listening. Join the waitlist and you will hear from us first when we are ready to ship.

## Why this exists

The science on creatine and menopause has become clear in the last few years. The products on the market were not. Most creatine products are designed for young men at the gym. Zesty is a shot for women who want something at 7am that works, looks good, and is ready in 10 seconds.

## Who

{{YOUR_NAME}}, based in {{YOUR_CITY}}. For questions, feedback, or just to say hi: {{CONTACT_EMAIL}}.

We are currently an initiative in the validation phase. When we start shipping, we will register Zesty as a business and you will find the full company information here.
```

---

## 2. Privacybeleid (Nederlands) — `src/app/privacybeleid/page.tsx`

```mdx
# Privacybeleid

Laatst bijgewerkt: {{DATE}}.

Zesty is in ontwikkeling. We zijn nog niet officieel gelanceerd en verkopen op dit moment niets. We verzamelen wel e-mailadressen voor de wachtlijst, en we gebruiken statistiekentools om te begrijpen hoe bezoekers de site gebruiken. Dit beleid legt uit wat we doen en welke rechten je hebt onder de Algemene Verordening Gegevensbescherming (GDPR).

## Wie is verantwoordelijk

Zolang Zesty nog geen bedrijf is, ben ik persoonlijk verantwoordelijk voor de verwerking van je gegevens.

{{YOUR_NAME}}, gevestigd in {{YOUR_CITY}}, België. Vragen of verzoeken stuur je naar {{CONTACT_EMAIL}}.

Op het moment dat Zesty een geregistreerd bedrijf wordt, neemt dat bedrijf de verantwoordelijkheid over en pas ik dit beleid aan.

## Welke gegevens we verzamelen

**Wanneer je de site bezoekt**
- Anonieme gebruiksgegevens via PostHog (EU-gehost): pagina's die je bekijkt, klikken, apparaat en browser, land op basis van IP. IP-adressen worden geanonimiseerd.
- Functionele cookies om de site te laten werken.

**Wanneer je je inschrijft voor de wachtlijst**
- Je e-mailadres en het startpakket dat je interessant vindt.
- Tijdstip van inschrijving.

**Wanneer je toestemming geeft voor marketingcookies**
- Meta Pixel registreert paginabezoeken en interacties voor advertentiemeting.

We verzamelen geen betaalgegevens of adresgegevens, omdat we nog niet verkopen.

## Waarom we deze gegevens verwerken

| Doel | Rechtsgrond |
|---|---|
| Je wachtlijst-inschrijving beheren en je informeren bij lancering | Uitvoering van de overeenkomst (art. 6.1.b GDPR) |
| Begrijpen hoe bezoekers de site gebruiken om het product te verbeteren | Gerechtvaardigd belang (art. 6.1.f GDPR) |
| Marketingcookies (Meta Pixel) | Toestemming (art. 6.1.a GDPR), via cookiebanner |

## Met wie we gegevens delen

We verkopen je gegevens aan niemand. We delen enkel wat technisch nodig is met:

- **PostHog** (EU-regio): geanonimiseerde websitestatistieken.
- **Meta Platforms** (via Meta Pixel, enkel met jouw toestemming): voor advertentiemeting. Data kan buiten de EU worden verwerkt onder het EU-VS Data Privacy Framework.
- **Onze e-mailprovider**: voor het versturen van wachtlijst-mails.

## Hoelang we je gegevens bewaren

- Wachtlijst-inschrijvingen: tot je je uitschrijft, of uiterlijk 2 jaar na laatste activiteit als we dan nog niet gelanceerd zijn.
- Analytics-gegevens: maximaal 12 maanden, daarna geaggregeerd.

## Je rechten

Je hebt het recht om:
- inzage te krijgen in je persoonsgegevens,
- correctie of verwijdering aan te vragen,
- beperking of bezwaar te maken tegen verwerking,
- overdraagbaarheid van je gegevens,
- een toestemming in te trekken,
- een klacht in te dienen bij de Gegevensbeschermingsautoriteit (www.gegevensbeschermingsautoriteit.be).

Een verzoek doe je via {{CONTACT_EMAIL}}. We reageren binnen 30 dagen.

## Cookies

Onze cookiebanner laat je per categorie kiezen. Functionele cookies zijn altijd actief omdat de site anders niet werkt. Statistieken en marketing zijn standaard uit en starten alleen na jouw toestemming.

## Wijzigingen

We passen dit beleid aan wanneer onze verwerking verandert, of wanneer Zesty een geregistreerd bedrijf wordt. De laatst bijgewerkte datum staat bovenaan.
```

## 2b. Privacy (English) — `src/app/en/privacy/page.tsx`

```mdx
# Privacy policy

Last updated: {{DATE}}.

Zesty is in development. We have not officially launched and we are not selling anything right now. We do collect email addresses for the waitlist, and we use analytics tools to understand how visitors use the site. This policy explains what we do and what rights you have under the EU General Data Protection Regulation (GDPR).

## Who is responsible

While Zesty is not yet a registered business, I am personally responsible for processing your data.

{{YOUR_NAME}}, based in {{YOUR_CITY}}, Belgium. Questions or requests: {{CONTACT_EMAIL}}.

When Zesty becomes a registered business, that business will take over responsibility and I will update this policy.

## What we collect

**When you visit the site**
- Anonymous usage data via PostHog (EU-hosted): pages you view, clicks, device and browser, country based on IP. IP addresses are anonymized.
- Functional cookies to operate the site.

**When you join the waitlist**
- Your email address and the starter pack you find interesting.
- Time of signup.

**When you consent to marketing cookies**
- Meta Pixel records page views and interactions for ad measurement.

We do not collect payment or shipping data, because we are not selling yet.

## Why we process this data

| Purpose | Legal basis |
|---|---|
| Managing your waitlist signup and notifying you at launch | Contract performance (art. 6.1.b GDPR) |
| Understanding how visitors use the site to improve the product | Legitimate interest (art. 6.1.f GDPR) |
| Marketing cookies (Meta Pixel) | Consent (art. 6.1.a GDPR), via cookie banner |

## Who we share data with

We do not sell your data to anyone. We share only what is technically needed with:

- **PostHog** (EU region): anonymized website statistics.
- **Meta Platforms** (via Meta Pixel, only with your consent): for ad measurement. Data may be processed outside the EU under the EU-US Data Privacy Framework.
- **Our email provider**: for sending waitlist emails.

## How long we keep data

- Waitlist signups: until you unsubscribe, or at most 2 years after last activity if we have not launched by then.
- Analytics data: 12 months maximum, aggregated after that.

## Your rights

You have the right to:
- access your personal data,
- request correction or deletion,
- restrict or object to processing,
- portability of your data,
- withdraw any consent,
- file a complaint with the Belgian Data Protection Authority (www.dataprotectionauthority.be).

Send requests to {{CONTACT_EMAIL}}. We respond within 30 days.

## Cookies

Our cookie banner lets you choose per category. Functional cookies are always on because the site would not work otherwise. Statistics and marketing are off by default and only start with your consent.

## Changes

We update this policy when our processing changes, or when Zesty becomes a registered business. The "last updated" date appears at the top.
```

---

## 3. Cookie consent gating

PostHog and Meta Pixel both fire on every visit right now. PostHog can be configured to run cookieless and consent-free if you only ever capture anonymous events. Meta Pixel cannot, it always needs explicit opt-in under Belgian DPA guidance.

Two minimum-effort options:

**Option A (simplest, recommended for validation phase)**: turn Meta Pixel off entirely until you launch ads. PostHog stays on with anonymous mode (`person_profiles: 'identified_only'`, no cookies). No banner needed because you are not setting any non-essential cookies.

**Option B (if you want Meta Pixel running for retargeting now)**: add a real consent banner. PostHog and Meta Pixel both stay paused until accept. Tools like CookieYes or a small custom component work.

Since you are pre-launch and validating, I'd start with Option A. It also makes the privacy policy simpler.

---

## 4. Footer wiring

Add to every NL footer (homepage, FAQ, blog index, blog post):
```tsx
<Link href="/over-ons">Over ons</Link>
<Link href="/privacybeleid">Privacybeleid</Link>
```

Mirror on EN with `/en/about` and `/en/privacy`.

Skip terms / "Algemene voorwaarden" links until you have something to sell.

---

## 5. Sitemap

After publishing the pages, add to `src/app/sitemap.ts`:
- `/over-ons` paired with `/en/about` via hreflang
- `/privacybeleid` paired with `/en/privacy` via hreflang

Same pattern as the FAQ entries already there.

---

## Pre-launch checklist (copy-paste for your own notes)

Before first paid sale on drinkzesty.be:
- [ ] Register business at KBO/BCE
- [ ] Apply for VAT number (or register for KOR exemption if applicable)
- [ ] Update privacy policy: replace "{{YOUR_NAME}}" with company name + address + KBO
- [ ] Publish T&Cs with right-of-withdrawal language (the supplement-seal exception of art. VI.53 WER applies)
- [ ] Add full trader identity to footer or imprint per art. III.74 WER
- [ ] Ensure cookie banner has accept/reject parity for marketing pixels
- [ ] Optional: register an EU EORI number if you ever ship outside Belgium
