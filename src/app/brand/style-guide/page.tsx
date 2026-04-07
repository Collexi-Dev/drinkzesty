export default function StyleGuide() {
  const colors = [
    { name: 'Brand / Primary', hex: '#F2A922', css: '--brand', usage: 'Buttons, links, brand name, highlights, CTA backgrounds' },
    { name: 'Brand Hover', hex: '#D4921E', css: '--brand-hover', usage: 'Button hover states' },
    { name: 'Background', hex: '#FFFDF7', css: '--bg', usage: 'Page background, card backgrounds' },
    { name: 'Text', hex: '#2D2D2D', css: '--text', usage: 'Body text, headings (softer than pure black)' },
    { name: 'Accent / Natural', hex: '#6B8F5E', css: '--accent', usage: 'Ingredient callouts, badges, natural/health signals' },
    { name: 'Sand', hex: '#F5EDE0', css: '--sand', usage: 'Alternating section backgrounds, info panels' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--text)] mb-2">style guide</h1>
      <p className="text-gray-500 mb-10">the visual language of zesty. everything stays lowercase.</p>

      {/* WORDMARK */}
      <section className="bg-white rounded-2xl p-10 border border-gray-200 mb-8">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-6">wordmark</h2>
        <div className="text-center py-8 bg-[var(--bg)] rounded-xl mb-6">
          <div className="text-8xl font-bold text-[var(--brand)] tracking-wide">zesty</div>
          <div className="text-base text-[var(--text)] mt-3 tracking-wider">ginger + turmeric shot</div>
          <div className="text-base mt-1 tracking-wider">
            <span className="font-bold text-[var(--brand)]">10g creatine</span>
            <span className="text-[var(--text)]"> for brain, energy & body</span>
          </div>
        </div>
        <div className="text-center py-8 bg-[#2D2D2D] rounded-xl">
          <div className="text-8xl font-bold text-white tracking-wide">zesty</div>
          <div className="text-base text-white/80 mt-3 tracking-wider">ginger + turmeric shot</div>
          <div className="text-base mt-1 tracking-wider">
            <span className="font-bold text-[var(--brand)]">10g creatine</span>
            <span className="text-white/80"> for brain, energy & body</span>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="bg-white rounded-2xl p-10 border border-gray-200 mb-8">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-6">colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {colors.map((c) => (
            <div key={c.hex}>
              <div
                className="h-20 rounded-xl border border-gray-200"
                style={{ background: c.hex }}
              />
              <div className="mt-2 text-sm font-bold">{c.name}</div>
              <div className="text-xs text-gray-500">{c.hex} · var({c.css})</div>
              <div className="text-xs text-gray-400 mt-1">{c.usage}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TYPOGRAPHY */}
      <section className="bg-white rounded-2xl p-10 border border-gray-200 mb-8">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-6">typography</h2>
        <div className="space-y-8">
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">font</div>
            <div className="text-2xl font-bold">Quicksand</div>
            <div className="text-sm text-gray-500 mt-1">Google Fonts · weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">eyebrow</div>
            <div className="text-sm font-semibold text-[var(--accent)] uppercase tracking-[3px]">ginger + turmeric shot · with 10g creatine</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">headline (h1)</div>
            <div className="text-5xl font-bold leading-tight">the supplement everyone should take. finally in your morning shot.</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">subheadline</div>
            <div className="text-xl text-[var(--text)]/70 leading-relaxed">10g of creatine — the most researched supplement in history — sealed fresh in your daily ginger shot. twist the cap, it drops in. done in 10 seconds.</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">body</div>
            <div className="text-base leading-relaxed max-w-xl">Creatine is the most studied supplement in nutrition science — with over 4,000 published studies. It&apos;s not a gym supplement. It&apos;s a molecule your body already makes, and most people don&apos;t make enough.</div>
          </div>
        </div>
      </section>

      {/* BUTTONS */}
      <section className="bg-white rounded-2xl p-10 border border-gray-200 mb-8">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-6">buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--text)] font-bold px-7 py-3.5 rounded-lg transition-colors">
            pre-order · 7-pack for €21
          </button>
          <button className="bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-[var(--text)] font-bold px-7 py-3.5 rounded-lg transition-colors">
            pre-order · 30-pack for €79
          </button>
          <button className="border-2 border-[var(--text)] text-[var(--text)] font-bold px-7 py-3.5 rounded-lg hover:bg-[var(--text)] hover:text-white transition-colors">
            learn more
          </button>
          <button className="bg-[var(--accent)] text-white font-bold px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity">
            notify me
          </button>
        </div>
        <div className="mt-4 text-xs text-gray-400">border-radius: 8px · min-height: 48px · font: Quicksand Bold</div>
      </section>

      {/* VOICE & RULES */}
      <section className="bg-white rounded-2xl p-10 border border-gray-200">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-6">voice & rules</h2>
        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <div>
            <div className="font-bold text-[var(--accent)] mb-3">do</div>
            <ul className="space-y-2 text-gray-600">
              <li>• friendly, bright, casually smart</li>
              <li>• like a well-read friend who also makes great juice</li>
              <li>• always lowercase for brand text</li>
              <li>• warm, approachable, effortless, trustworthy</li>
              <li>• &quot;a sunny kitchen counter on a good morning&quot;</li>
              <li>• use science and real data for credibility</li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-red-400 mb-3">don&apos;t</div>
            <ul className="space-y-2 text-gray-600">
              <li>• bold/aggressive typography, ALL CAPS</li>
              <li>• electric/neon colors, black backgrounds</li>
              <li>• words like POWER, BOOST, FUEL, GAINS</li>
              <li>• imagery of people working out</li>
              <li>• clinical or pharmaceutical styling</li>
              <li>• fake testimonials or AI-generated people</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
