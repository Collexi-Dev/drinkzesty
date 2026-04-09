import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

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
    <main className="min-h-screen bg-[#FFFBF0] px-6 py-20 md:py-32">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/nl"
          className="text-sm font-bold text-[#2D2D2D]/40 uppercase tracking-[0.2em] hover:text-[#F2A922] transition-colors"
        >
          ← terug naar home
        </Link>
        <h1 className="text-[2rem] md:text-[3rem] font-extrabold text-[#2D2D2D] mt-6 mb-4 tracking-tight">
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
  );
}
