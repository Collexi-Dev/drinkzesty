import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, getPostComponent } from "@/lib/blog";
import { Nav } from "@/components/Nav";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: `${post.title} — zesty`,
    description: post.description,
    alternates: {
      canonical: `https://drinkzesty.be/nl/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://drinkzesty.be/nl/blog/${slug}`,
      siteName: "zesty",
      type: "article",
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
  };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  const Content = getPostComponent(slug);
  if (!post || !Content) notFound();

  // All JSON-LD schemas use developer-controlled content only, no user input
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "zesty", url: "https://drinkzesty.be" },
    publisher: { "@type": "Organization", name: "zesty", url: "https://drinkzesty.be" },
    mainEntityOfPage: `https://drinkzesty.be/nl/blog/${slug}`,
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
      <Nav locale="nl" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        <article className="max-w-2xl mx-auto">
          <Link
            href="/nl/blog"
            className="text-sm font-bold text-[#2D2D2D]/40 uppercase tracking-[0.2em] hover:text-[#F2A922] transition-colors"
          >
            ← alle artikels
          </Link>

          <header className="mt-6 mb-12">
            <p className="text-sm text-[#2D2D2D]/40 font-medium mb-2">
              {post.date} · {post.readingTime}
            </p>
            <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] leading-[1.05] tracking-tight">
              {post.title}
            </h1>
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
              zesty
            </p>
            <p className="text-white text-xl md:text-2xl font-extrabold mb-4">
              10g creatine. Eén shot. Elke ochtend.
            </p>
            <Link
              href="/nl#pricing"
              className="inline-block bg-[#F2A922] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#F2A922]/90 transition-colors"
            >
              bestel nu
            </Link>
            <p className="text-white/30 text-sm mt-3">vanaf €2,63/shot</p>
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-[#2D2D2D]/10">
            <Link
              href="/nl/blog"
              className="text-sm font-bold text-[#2D2D2D]/40 uppercase tracking-[0.2em] hover:text-[#F2A922] transition-colors"
            >
              ← alle artikels
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
              <p className="text-white/30 text-sm">de menopauzeshot met creatine</p>
            </div>
            <div className="flex gap-5 text-sm text-white/35">
              <Link href="/nl" className="hover:text-white/60 transition-colors">home</Link>
              <Link href="/nl/blog" className="hover:text-white/60 transition-colors">blog</Link>
              <Link href="/nl/veelgestelde-vragen" className="hover:text-white/60 transition-colors">faq</Link>
              <Link href="/nl#pricing" className="hover:text-white/60 transition-colors">bestel</Link>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8">
            zesty is een voedingssupplement, geen medicijn. raadpleeg een arts bij twijfel.
          </p>
        </div>
      </footer>
    </>
  );
}
