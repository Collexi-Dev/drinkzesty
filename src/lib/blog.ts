import type { ComponentType } from "react";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  faqs?: { q: string; a: string }[];
}

export interface BlogEntry extends BlogPost {
  component: ComponentType;
}

import posts from "@/content/blog/nl";

export function getAllPosts(): BlogPost[] {
  return [...posts]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .map(({ component: _, ...post }) => post);
}

export function getPost(slug: string): BlogPost | null {
  const entry = posts.find((p) => p.slug === slug);
  if (!entry) return null;
  const { component: _, ...post } = entry;
  return post;
}

export function getPostComponent(slug: string): ComponentType | null {
  return posts.find((p) => p.slug === slug)?.component ?? null;
}
