import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01",
    title: "KILL LIPE",
    category: "Site institucional / Media Kit para canal de games",
    description:
      "Site institucional criado para apresentar o canal, destacar conteúdos e coberturas, exibir métricas atualizadas e facilitar contatos profissionais com empresas do setor de games.",
    status: "Publicado",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "YouTube API",
      "Resend",
      "Vercel",
    ],
    url: "https://kill-lipe.vercel.app/",
    caseStudyUrl: "/projetos/kill-lipe",
    desktopImage: "/projects/kill-lipe/kill-lipe-desktop.webp",
    mobileImage: "/projects/kill-lipe/kill-lipe-mobile.webp",
    imageAlt:
      "Página inicial do site KILL LIPE exibida em computador e celular",
  },
  {
    number: "02",
    title: "Guiart Games e Colecionáveis",
    category: "Site para loja e sistema administrativo",
    description:
      "Plataforma desenvolvida para apresentar produtos, organizar catálogo e estoque e facilitar pedidos pelo WhatsApp.",
    status: "Publicado",
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
    number: "03",
    title: "Celeste F7",
    category: "Site institucional esportivo",
    description:
      "Site criado para apresentar a história do time, organizar informações sobre jogos, elenco, títulos, patrocinadores e localização.",
    status: "Publicado",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://celeste-f7.vercel.app/",
    caseStudyUrl: "/projetos/celeste-f7",
    desktopImage: "/projects/celeste-f7/celeste-f7-desktop.webp",
    mobileImage: "/projects/celeste-f7/celeste-f7-mobile.webp",
    imageAlt:
      "Página inicial do Celeste F7 exibida em computador e celular",
  },
];