import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Blog — zesty",
  description:
    "Everything about creatine, menopause and supplements. Science-backed, in plain language.",
  alternates: {
    canonical: "https://drinkzesty.be/en/blog",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts("en");
  const [featured, ...rest] = posts;

  return (
    <>
      <Nav locale="en" />
      <main className="min-h-screen bg-[#FFFBF0] px-6 pt-24 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="mb-14">
            <h1 className="text-[2.5rem] md:text-[4rem] font-extrabold text-[#2D2D2D] leading-[0.95] tracking-tight">
              creatine, menopause
              <br />
              <span className="text-[#F2A922]">and the science behind it.</span>
            </h1>
          </div>

          {/* Featured article */}
          {featured && (
            <Link href={`/en/blog/${featured.slug}`} className="group block mb-14">
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
                <Link key={post.slug} href={`/en/blog/${post.slug}`} className="group block">
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
              Our first articles are coming soon.
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
              <p className="text-white/30 text-sm">the menopause shot with creatine</p>
            </div>
            <div className="flex gap-5 text-sm text-white/35">
              <Link href="/en" className="hover:text-white/60 transition-colors">home</Link>
              <Link href="/en/blog" className="hover:text-white/60 transition-colors">blog</Link>
              <Link href="/en/faq" className="hover:text-white/60 transition-colors">faq</Link>
              <Link href="/en#order" className="hover:text-white/60 transition-colors">order</Link>
            </div>
          </div>
          <p className="text-white/20 text-xs mt-8">
            zesty is a dietary supplement, not medicine. consult a doctor if in doubt.
          </p>
        </div>
      </footer>
    </>
  );
}
