import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/brand/",
    },
    sitemap: "https://drinkzesty.be/sitemap.xml",
  };
}
