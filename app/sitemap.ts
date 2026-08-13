import type { MetadataRoute } from "next";

const siteUrl =
  "https://portfolio-seven-coral-t58e5zn2u9.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projetos/guiart-games`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projetos/celeste-f7`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projetos/kill-lipe`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/politica-de-privacidade/sagatrack`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}