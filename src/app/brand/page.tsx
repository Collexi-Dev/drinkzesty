import Link from "next/link";

export default function BrandHome() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Brand toolkit</h1>
      <p className="text-gray-500 mb-10">Internal tools for building the Zesty brand. Not customer-facing.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/brand/style-guide"
          className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[var(--brand)] transition-colors"
        >
          <h2 className="text-lg font-bold mb-2">Style guide</h2>
          <p className="text-sm text-gray-500">Colors, typography, buttons, brand rules</p>
        </Link>

        <Link
          href="/brand/label"
          className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[var(--brand)] transition-colors"
        >
          <h2 className="text-lg font-bold mb-2">Label designer</h2>
          <p className="text-sm text-gray-500">Editable HTML label for product mockups</p>
        </Link>

        <Link
          href="/brand/mockups"
          className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[var(--brand)] transition-colors"
        >
          <h2 className="text-lg font-bold mb-2">Mockups</h2>
          <p className="text-sm text-gray-500">Product shots, lifestyle images, gallery</p>
        </Link>
      </div>
    </div>
  );
}
