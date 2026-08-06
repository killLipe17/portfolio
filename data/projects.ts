import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01",
    title: "Guiart Games e Colecionáveis",
    category: "Site para loja e sistema administrativo",
    description:
      "Plataforma desenvolvida para apresentar produtos, organizar catálogo e estoque e facilitar pedidos pelo WhatsApp.",
    status: "Versão 1.0 publicada",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
    ],
    url: "https://guiart-web-nine.vercel.app/",
    caseStudyUrl: "/projetos/guiart-games",
    desktopImage: "/projects/guiart-games/guiart-desktop.webp",
    mobileImage: "/projects/guiart-games/guiart-mobile.webp",
    imageAlt:
      "Página inicial da Guiart Games e Colecionáveis exibida em computador e celular",
  },
  {
    number: "02",
    title: "Celeste F7",
    category: "Site institucional esportivo",
    description:
      "Site criado para apresentar a história do time, organizar informações sobre jogos, elenco, títulos, patrocinadores e localização.",
    status: "Publicado — conteúdo em expansão",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://celeste-f7.vercel.app/",
    desktopImage: "/projects/celeste-f7/celeste-f7-desktop.webp",
    mobileImage: "/projects/celeste-f7/celeste-f7-mobile.webp",
    imageAlt:
      "Página inicial do Celeste F7 exibida em computador e celular",
  },
];