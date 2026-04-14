import type { ComponentType } from "react";

export interface WikidataEntity {
  name: string;
  url: string; // e.g. "https://www.wikidata.org/wiki/Q186037"
}

export interface BlogAuthor {
  name: string;
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateModified?: string;
  readingTime: string;
  image?: string;
  author?: BlogAuthor;
  reviewedBy?: BlogAuthor;
  /** Slug of the same post in the opposite locale (for hreflang mapping). */
  counterpartSlug?: string;
  faqs?: { q: string; a: string }[];
  about?: WikidataEntity[];
  mentions?: WikidataEntity[];
}

export interface BlogEntry extends BlogPost {
  component: ComponentType;
}

import nlPosts from "@/content/blog/nl";
import enPosts from "@/content/blog/en";

function getPostsByLocale(locale: "nl" | "en") {
  return locale === "en" ? enPosts : nlPosts;
}

export function getAllPosts(locale: "nl" | "en" = "nl"): BlogPost[] {
  return [...getPostsByLocale(locale)]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map(({ component: _, ...post }) => post);
}

export function getPost(slug: string, locale: "nl" | "en" = "nl"): BlogPost | null {
  const entry = getPostsByLocale(locale).find((p) => p.slug === slug);
  if (!entry) return null;
  const { component: _, ...post } = entry;
  return post;
}

export function getPostComponent(slug: string, locale: "nl" | "en" = "nl"): ComponentType | null {
  return getPostsByLocale(locale).find((p) => p.slug === slug)?.component ?? null;
}

/**
 * Default author used when a post does not set its own.
 *
 * Honest framing for the validation phase: a small team writing based on
 * peer-reviewed research, not a credentialed medical voice. Update with a real
 * Person + jobTitle + sameAs once a named writer or medical reviewer is on board.
 */
export const DEFAULT_AUTHOR: BlogAuthor = {
  name: "Het Zesty team",
};
