import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  const [featured, ...rest] = posts;

  return (
    <>
      <Nav locale="nl" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="mb-14">
            <h1 className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              creatine, menopauze
              <br />
              <span className="text-[#F2A922]">en de wetenschap erachter.</span>
            </h1>
          </div>

          {/* Featured article */}
          {featured && (
            <Link href={`/nl/blog/${featured.slug}`} className="group block mb-14">
              <article>
                {featured.image && (
                  <div className="rounded-xl overflow-hidden mb-5">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      width={1200}
                      height={630}
                      className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}
                <p className="text-sm text-[#2D2D2D]/40 font-medium mb-2">
                  {featured.date} · {featured.readingTime}
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#2D2D2D] group-hover:text-[#F2A922] transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-[#2D2D2D]/60 mt-3 leading-relaxed text-lg">
                  {featured.description}
                </p>
              </article>
            </Link>
          )}

          {/* Rest of articles */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {rest.map((post) => (
                <Link key={post.slug} href={`/nl/blog/${post.slug}`} className="group block">
                  <article>
                    {post.image && (
                      <div className="rounded-xl overflow-hidden mb-4">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={600}
                          height={315}
                          className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    )}
                    <p className="text-sm text-[#2D2D2D]/40 font-medium mb-1">
                      {post.date} · {post.readingTime}
                    </p>
                    <h2 className="text-lg md:text-xl font-extrabold text-[#2D2D2D] group-hover:text-[#F2A922] transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-[#2D2D2D]/60 mt-2 leading-relaxed text-sm">
                      {post.description}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {posts.length === 0 && (
            <p className="text-[#2D2D2D]/40 text-lg">
              Binnenkort verschijnen hier onze eerste artikels.
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-lg font-extrabold text-[#F2A922] tracking-tight mb-1">zesty</p>
              <p className="text-white/30 text-sm">de menopauzeshot met creatine</p>
            </div>
            <div className="flex gap-5 text-sm text-white/35">
              <Link href="/nl" className="hover:text-white/60 transition-colors">home</Link>
              <Link href="/nl/blog" className="hover:text-white/60 transition-colors">blog</Link>
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
