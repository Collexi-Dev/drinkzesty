import Link from "next/link";

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-8">
        <Link href="/brand" className="text-2xl font-bold text-[var(--brand)]">
          zesty
        </Link>
        <span className="text-xs text-gray-400 uppercase tracking-widest">Internal brand tools</span>
        <div className="flex gap-6 ml-auto text-sm text-[var(--text)]">
          <Link href="/brand/style-guide" className="hover:text-[var(--brand)] transition-colors">Style guide</Link>
          <Link href="/brand/label" className="hover:text-[var(--brand)] transition-colors">Label designer</Link>
          <Link href="/brand/mockups" className="hover:text-[var(--brand)] transition-colors">Mockups</Link>
          <Link href="/" className="hover:text-[var(--brand)] transition-colors text-gray-400">Landing page →</Link>
        </div>
      </nav>
      <main className="p-8 max-w-[1920px] mx-auto">{children}</main>
    </div>
  );
}
