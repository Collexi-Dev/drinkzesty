import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://drinkzesty.be/nl/blog/${post.slug}`,
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
          nl: "https://drinkzesty.be/nl",
        },
      },
    },
    {
      url: "https://drinkzesty.be/nl",
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
    ...(posts.length > 0
      ? [
          {
            url: "https://drinkzesty.be/nl/blog",
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
          ...blogEntries,
        ]
      : []),
  ];
}
