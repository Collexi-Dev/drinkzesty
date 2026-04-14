import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, getPostComponent, DEFAULT_AUTHOR } from "@/lib/blog";
import { Nav } from "@/components/Nav";

const SITE = "https://www.drinkzesty.be";

export async function generateStaticParams() {
  return getAllPosts("en").map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug, "en");
  if (!post) return {};

  const languages: Record<string, string> = {
    en: `${SITE}/en/blog/${slug}`,
  };
  if (post.counterpartSlug) {
    languages["nl-BE"] = `${SITE}/blog/${post.counterpartSlug}`;
    languages["x-default"] = `${SITE}/blog/${post.counterpartSlug}`;
  } else {
    languages["x-default"] = `${SITE}/en/blog/${slug}`;
  }

  return {
    title: `${post.title} | Zesty`,
    description: post.description,
    alternates: {
      canonical: `${SITE}/en/blog/${slug}`,
      languages,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE}/en/blog/${slug}`,
      siteName: "Zesty",
      type: "article",
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug, "en");
  const Content = getPostComponent(slug, "en");
  if (!post || !Content) notFound();

  const author = post.author ?? DEFAULT_AUTHOR;
  const articleUrl = `${SITE}/en/blog/${slug}`;

  // All JSON-LD schemas use developer-controlled content only, no user input
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    inLanguage: "en",
    url: articleUrl,
    mainEntityOfPage: articleUrl,
    ...(post.image
      ? {
          image: {
            "@type": "ImageObject",
            url: post.image.startsWith("http") ? post.image : `${SITE}${post.image}`,
            width: 1200,
            height: 630,
          },
        }
      : {}),
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
      ...(author.url ? { url: author.url } : {}),
      ...(author.sameAs?.length ? { sameAs: author.sameAs } : {}),
    },
    ...(post.reviewedBy
      ? {
          reviewedBy: {
            "@type": "Person",
            name: post.reviewedBy.name,
            ...(post.reviewedBy.jobTitle ? { jobTitle: post.reviewedBy.jobTitle } : {}),
            ...(post.reviewedBy.url ? { url: post.reviewedBy.url } : {}),
          },
        }
      : {}),
    publisher: { "@id": `${SITE}/#organization` },
    isPartOf: { "@id": `${SITE}/#website-en` },
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".prose > p:first-of-type"],
    },
    ...(post.about?.length
      ? { about: post.about.map((e) => ({ "@type": "Thing", name: e.name, sameAs: e.url })) }
      : {}),
    ...(post.mentions?.length
      ? { mentions: post.mentions.map((e) => ({ "@type": "Thing", name: e.name, sameAs: e.url })) }
      : {}),
  };

  // Article + Breadcrumb as a single @graph so we use one script tag
  const articleGraph = {
    "@context": "https://schema.org",
    "@graph": [
      articleSchema,
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/en/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
        ],
      },
    ],
  };

  const faqSchema = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq: { q: string; a: string }) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <>
      <Nav locale="en" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        {/* JSON-LD structured data uses developer-controlled content from blog entries */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleGraph) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        <article className="max-w-2xl mx-auto">
          <Link
            href="/en/blog"
            className="text-sm font-bold text-[#2D2D2D]/40 uppercase tracking-[0.2em] hover:text-[#F2A922] transition-colors"
          >
            ← All articles
          </Link>

          <header className="mt-6 mb-12">
            <p className="text-sm text-[#2D2D2D]/40 font-medium mb-2">
              {post.date} · {post.readingTime}
              {post.dateModified && post.dateModified !== post.date && (
                <> · Last updated {post.dateModified}</>
              )}
            </p>
            <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] leading-[1.05] tracking-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-[#2D2D2D]/60">
              Written by <span className="font-semibold text-[#2D2D2D]/80">{author.name}</span>
              {author.jobTitle && <>, {author.jobTitle}</>}
              {post.reviewedBy ? (
                <>
                  {" · Medically reviewed by "}
                  <span className="font-semibold text-[#2D2D2D]/80">{post.reviewedBy.name}</span>
                  {post.reviewedBy.jobTitle && <>, {post.reviewedBy.jobTitle}</>}
                </>
              ) : (
                <> · Based on peer-reviewed research, not intended as medical advice</>
              )}
            </p>
            {post.image && (
              <div className="mt-8 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}
          </header>

          <div className="prose prose-lg prose-neutral max-w-none [&>p]:text-[#2D2D2D]/80 [&>p]:leading-relaxed [&>h2]:text-[#2D2D2D] [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:text-[#2D2D2D] [&>h3]:font-bold [&>ul]:text-[#2D2D2D]/80 [&>ol]:text-[#2D2D2D]/80 [&>blockquote]:border-[#F2A922] [&>blockquote]:text-[#2D2D2D]/60 [&_table]:w-full [&_table]:text-sm [&_th]:text-left [&_th]:font-bold [&_th]:text-[#2D2D2D] [&_th]:pb-2 [&_th]:border-b [&_th]:border-[#2D2D2D]/15 [&_td]:py-2.5 [&_td]:border-b [&_td]:border-[#2D2D2D]/8 [&_td]:text-[#2D2D2D]/70">
            <Content />
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-[#2D2D2D] rounded-2xl text-center">
            <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-2">
              Zesty
            </p>
            <p className="text-white text-xl md:text-2xl font-extrabold mb-4">
              10g creatine. One shot. Every morning.
            </p>
            <Link
              href="/en#order"
              className="inline-block bg-[#F2A922] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#F2A922]/90 transition-colors"
            >
              Order now
            </Link>
            <p className="text-white/30 text-sm mt-3">From €2.63/shot</p>
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-[#2D2D2D]/10">
            <Link
              href="/en/blog"
              className="text-sm font-bold text-[#2D2D2D]/40 uppercase tracking-[0.2em] hover:text-[#F2A922] transition-colors"
            >
              ← All articles
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-lg font-extrabold text-[#F2A922] tracking-tight mb-1">zesty</p>
              <p className="text-white/30 text-sm">The menopause shot with creatine</p>
            </div>
            <div className="flex gap-5 text-sm text-white/35">
              <Link href="/en" className="hover:text-white/60 transition-colors">Home</Link>
              <Link href="/en/blog" className="hover:text-white/60 transition-colors">Blog</Link>
              <Link href="/en/faq" className="hover:text-white/60 transition-colors">FAQ</Link>
              <Link href="/en#order" className="hover:text-white/60 transition-colors">Order</Link>
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
