import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

// Next 16 + Turbopack: plugins must be referenced by string name (not imported),
// because Turbopack can't pass JS functions to Rust. remark-gfm enables GFM
// tables, strikethrough, autolinks, and task lists in MDX.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
