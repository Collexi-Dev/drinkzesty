import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const SITE = "https://www.drinkzesty.be";

export default function sitemap(): MetadataRoute.Sitemap {
  const nlPosts = getAllPosts("nl");
  const enPosts = getAllPosts("en");

  // Blog post slug pairs for hreflang: expects a counterpart field on BlogPost
  const nlByCounterpart = new Map(
    nlPosts.filter((p) => p.counterpartSlug).map((p) => [p.counterpartSlug!, p.slug])
  );

  const blogEntriesNl: MetadataRoute.Sitemap = nlPosts.map((post) => {
    const alternates: Record<string, string> = {
      "nl-BE": `${SITE}/blog/${post.slug}`,
      "x-default": `${SITE}/blog/${post.slug}`,
    };
    if (post.counterpartSlug) {
      alternates.en = `${SITE}/en/blog/${post.counterpartSlug}`;
    }
    return {
      url: `${SITE}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: alternates },
    };
  });

  const blogEntriesEn: MetadataRoute.Sitemap = enPosts.map((post) => {
    const nlSlug = nlByCounterpart.get(post.slug);
    const alternates: Record<string, string> = {
      en: `${SITE}/en/blog/${post.slug}`,
      "x-default": nlSlug ? `${SITE}/blog/${nlSlug}` : `${SITE}/en/blog/${post.slug}`,
    };
    if (nlSlug) {
      alternates["nl-BE"] = `${SITE}/blog/${nlSlug}`;
    }
    return {
      url: `${SITE}/en/blog/${post.slug}`,
      lastModified: new Date(post.dateModified ?? post.date),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: alternates },
    };
  });

  const now = new Date();

  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/`,
          en: `${SITE}/en`,
          "x-default": `${SITE}/`,
        },
      },
    },
    {
      url: `${SITE}/en`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/`,
          en: `${SITE}/en`,
          "x-default": `${SITE}/`,
        },
      },
    },
    {
      url: `${SITE}/waitlist`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/waitlist`,
          en: `${SITE}/en/waitlist`,
          "x-default": `${SITE}/waitlist`,
        },
      },
    },
    {
      url: `${SITE}/en/waitlist`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/waitlist`,
          en: `${SITE}/en/waitlist`,
          "x-default": `${SITE}/waitlist`,
        },
      },
    },
    {
      url: `${SITE}/privacybeleid`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/privacybeleid`,
          en: `${SITE}/en/privacy`,
          "x-default": `${SITE}/privacybeleid`,
        },
      },
    },
    {
      url: `${SITE}/en/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/privacybeleid`,
          en: `${SITE}/en/privacy`,
          "x-default": `${SITE}/privacybeleid`,
        },
      },
    },
    {
      url: `${SITE}/veelgestelde-vragen`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/veelgestelde-vragen`,
          en: `${SITE}/en/faq`,
          "x-default": `${SITE}/veelgestelde-vragen`,
        },
      },
    },
    {
      url: `${SITE}/en/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          "nl-BE": `${SITE}/veelgestelde-vragen`,
          en: `${SITE}/en/faq`,
          "x-default": `${SITE}/veelgestelde-vragen`,
        },
      },
    },
    ...(nlPosts.length > 0
      ? [
          {
            url: `${SITE}/blog`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.8,
            alternates: {
              languages: {
                "nl-BE": `${SITE}/blog`,
                en: `${SITE}/en/blog`,
                "x-default": `${SITE}/blog`,
              },
            },
          },
          ...blogEntriesNl,
        ]
      : []),
    ...(enPosts.length > 0
      ? [
          {
            url: `${SITE}/en/blog`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.8,
            alternates: {
              languages: {
                "nl-BE": `${SITE}/blog`,
                en: `${SITE}/en/blog`,
                "x-default": `${SITE}/blog`,
              },
            },
          },
          ...blogEntriesEn,
        ]
      : []),
  ];
}
