import type { MetadataRoute } from "next";

const siteUrl =
  "https://portfolio-seven-coral-t58e5zn2u9.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}