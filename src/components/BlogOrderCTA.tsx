import Link from "next/link";

/**
 * Blog-inline CTA block. Rendered inside the MDX body (between "Lees ook" and
 * "Bronnen" sections), not in the page wrapper, because visitors reach end of
 * post but typically skim past the sources list.
 *
 * Two locale-specific exports so MDX authors can pick naturally without props.
 */

export function BlogOrderCtaNL() {
  return (
    <div className="not-prose my-12 p-8 bg-[#2D2D2D] rounded-2xl text-center">
      <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-2">
        Zesty
      </p>
      <p className="text-white text-xl md:text-2xl font-extrabold mb-4">
        10g creatine. Eén shot. Elke ochtend.
      </p>
      <Link
        href="/#order"
        className="inline-block bg-[#F2A922] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#F2A922]/90 transition-colors"
      >
        Bestel nu
      </Link>
      <p className="text-white/30 text-sm mt-3">Vanaf €2,63/shot</p>
    </div>
  );
}

export function BlogOrderCtaEN() {
  return (
    <div className="not-prose my-12 p-8 bg-[#2D2D2D] rounded-2xl text-center">
      <p className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-2">
        Zesty
      </p>
      <p className="text-white text-xl md:text-2xl font-extrabold mb-4">
        10g creatine. One shot. Every morning.
      </p>
      <Link
        href="/en#order"
        className="inline-block bg-[#F2A922] text-[#2D2D2D] font-bold px-8 py-3 rounded-full hover:bg-[#F2A922]/90 transition-colors"
      >
        Order now
      </Link>
      <p className="text-white/30 text-sm mt-3">From €2.63/shot</p>
    </div>
  );
}
