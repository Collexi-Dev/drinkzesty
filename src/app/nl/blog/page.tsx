import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Blog — zesty",
  description:
    "Alles over creatine, menopauze en supplementen. Wetenschappelijk onderbouwd, in begrijpelijke taal.",
  alternates: {
    canonical: "https://drinkzesty.be/nl/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav locale="nl" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mb-4 tracking-tight">
            blog
          </h1>
          <p className="text-[#2D2D2D]/60 text-lg mb-12">
            Wetenschappelijk onderbouwd. In begrijpelijke taal.
          </p>

          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link href={`/nl/blog/${post.slug}`} className="group block">
                  <p className="text-sm text-[#2D2D2D]/40 font-medium mb-1">
                    {post.date} · {post.readingTime}
                  </p>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#2D2D2D] group-hover:text-[#F2A922] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-[#2D2D2D]/60 mt-2 leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-[#2D2D2D]/40 text-lg">
              Binnenkort verschijnen hier onze eerste artikels.
            </p>
          )}
        </div>
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
              <Link href="/waitlist?plan=30" className="hover:text-white/60 transition-colors">bestel</Link>
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
