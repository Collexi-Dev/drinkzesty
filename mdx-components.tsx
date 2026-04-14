import type { MDXComponents } from "mdx/types";
import { BlogOrderCtaNL, BlogOrderCtaEN } from "@/components/BlogOrderCTA";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    BlogOrderCtaNL,
    BlogOrderCtaEN,
  };
}
