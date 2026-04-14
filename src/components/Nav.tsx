import Link from "next/link";

export function Nav({ locale = "nl" }: { locale?: "en" | "nl" }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-[#FFFDF7]/90 backdrop-blur-md border-b border-[#2D2D2D]/5">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href={locale === "nl" ? "/" : "/en"}
          className="text-lg font-extrabold text-[#F2A922] tracking-tight"
        >
          zesty
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href={locale === "en" ? "/en/blog" : "/blog"}
            className="text-sm font-bold text-[#2D2D2D]/40 hover:text-[#2D2D2D] transition-colors hidden sm:block"
          >
            Blog
          </Link>
          <Link
            href={locale === "en" ? "/en/faq" : "/veelgestelde-vragen"}
            className="text-sm font-bold text-[#2D2D2D]/40 hover:text-[#2D2D2D] transition-colors hidden sm:block"
          >
            FAQ
          </Link>
          <Link
            href={locale === "nl" ? "/#order" : "/en#order"}
            className="text-sm font-bold bg-[#2D2D2D] text-[#FFFDF7] px-5 py-2 rounded-full hover:bg-[#2D2D2D]/85 transition-colors"
          >
            {locale === "nl" ? "Bestel nu" : "Order now"}
          </Link>
          <div className="flex items-center gap-0.5 border border-[#2D2D2D]/10 rounded-full px-0.5 py-0.5">
            <Link
              href="/"
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors ${locale === "nl" ? "text-[#FFFDF7] bg-[#2D2D2D]" : "text-[#2D2D2D]/40 hover:text-[#2D2D2D]"}`}
            >
              NL
            </Link>
            <Link
              href="/en"
              className={`px-2.5 py-1 text-xs font-bold rounded-full transition-colors ${locale === "en" ? "text-[#FFFDF7] bg-[#2D2D2D]" : "text-[#2D2D2D]/40 hover:text-[#2D2D2D]"}`}
            >
              EN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
