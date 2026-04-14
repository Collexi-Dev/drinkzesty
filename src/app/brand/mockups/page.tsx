import Image from "next/image";

export default function Mockups() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Mockups</h1>
      <p className="text-gray-500 mb-10">Product shots and lifestyle images. All source files live in <code className="bg-gray-100 px-1 rounded text-xs">assets/</code></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hero Product Shot */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-3">Image 1: hero product shot</div>
          <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center" style={{ minHeight: '400px' }}>
            <Image
              src="/images/product-hero.png"
              alt="Zesty hero product shot"
              width={400}
              height={600}
              className="object-contain max-h-[500px] w-auto"
            />
          </div>
          <div className="mt-3 text-xs text-gray-500">Clean studio shot · for ads and landing page hero</div>
        </div>

        {/* Lifestyle Shot */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-3">Image 2: lifestyle context</div>
          <div className="bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center" style={{ minHeight: '400px' }}>
            <Image
              src="/images/product-lifestyle.png"
              alt="Zesty lifestyle shot"
              width={600}
              height={400}
              className="object-contain max-h-[500px] w-auto"
            />
          </div>
          <div className="mt-3 text-xs text-gray-500">Kitchen context with ingredients · for hero background and social</div>
        </div>

        {/* Placeholder for activation shot */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 border-dashed">
          <div className="text-xs text-gray-400 uppercase tracking-widest mb-3">Image 3: activation moment (needed)</div>
          <div className="bg-gray-50 rounded-xl flex flex-col items-center justify-center text-gray-400 text-sm" style={{ minHeight: '400px' }}>
            <div className="text-4xl mb-3">✨</div>
            <div>Close-up of powder dropping into liquid</div>
            <div className="text-xs mt-1">The scroll-stopping &quot;money shot&quot;</div>
          </div>
          <div className="mt-3 text-xs text-gray-500">Generate in Nano Banana using hero shot as reference · extreme close-up of cap mechanism</div>
        </div>
      </div>

      {/* Image generation tips */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 mt-8">
        <h2 className="text-sm text-gray-400 uppercase tracking-widest mb-4">Generation tips for Nano Banana</h2>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Upload existing shot + <code className="bg-gray-100 px-1 rounded text-xs">assets/label/zesty-label-final.png</code> → &quot;apply this label to this bottle&quot;</li>
          <li>• Use the hero product shot as reference when generating new compositions</li>
          <li>• The bottle has a clear/transparent dosing cap (taller than normal)</li>
          <li>• The liquid is warm amber-golden (ginger/turmeric color)</li>
          <li>• Keep the mood warm, bright, &quot;sunny kitchen counter,&quot; never dark or clinical</li>
          <li>• Still needed: activation close-up, flat lay, group/multi-pack shot</li>
        </ul>
      </div>
    </div>
  );
}
