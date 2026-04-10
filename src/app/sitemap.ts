import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const enPosts = getAllPosts("en");

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://drinkzesty.be/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const enBlogEntries: MetadataRoute.Sitemap = enPosts.map((post) => ({
    url: `https://drinkzesty.be/en/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://drinkzesty.be",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://drinkzesty.be/en",
        },
      },
    },
    {
      url: "https://drinkzesty.be/en",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://drinkzesty.be/waitlist",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://drinkzesty.be/veelgestelde-vragen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://drinkzesty.be/en/faq",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...(posts.length > 0
      ? [
          {
            url: "https://drinkzesty.be/blog",
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
          ...blogEntries,
        ]
      : []),
    ...(enPosts.length > 0
      ? [
          {
            url: "https://drinkzesty.be/en/blog",
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
          ...enBlogEntries,
        ]
      : []),
  ];
}
