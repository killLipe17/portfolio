import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    number: "01",
    title: "SagaTrack",
    category: "Aplicativo mobile / Entretenimento & gamificação",
    description:
      "Aplicativo mobile para acompanhar maratonas cinematográficas através de missões, quizzes, XP, níveis, conquistas e progresso.",
    status: "Teste fechado • Google Play",
    highlights: [
      "38 filmes + 7 missões",
      "114 perguntas de quiz",
      "XP, níveis e conquistas",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "TMDB API",
      "AsyncStorage",
      "EAS",
    ],
    caseStudyUrl: "/projetos/sagatrack",
    desktopImage: "/projects/sagatrack/sagatrack-cover.png",
    mobileImage: "/projects/sagatrack/sagatrack-home-v2.jpg",
    imageAlt:
      "SagaTrack, aplicativo mobile de maratonas cinematográficas, gamificação e acompanhamento de progresso",
  },
  {
    number: "02",
    title: "KILL LIPE",
    category: "Site institucional / Media Kit para canal de games",
    description:
      "Site institucional criado para apresentar o canal, destacar conteúdos e coberturas, exibir métricas atualizadas e facilitar contatos profissionais com empresas do setor de games.",
    status: "Publicado",
    highlights: [
      "Métricas em tempo real",
      "PT • EN • ES",
      "Contato profissional integrado",
    ],
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
    number: "03",
    title: "Guiart Games e Colecionáveis",
    category: "Site para loja e sistema administrativo",
    description:
      "Plataforma desenvolvida para apresentar produtos, organizar catálogo e estoque e facilitar pedidos pelo WhatsApp.",
    status: "Publicado",
    highlights: [
      "Catálogo e estoque",
      "Painel administrativo",
      "Pedidos via WhatsApp",
    ],
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
    number: "04",
    title: "Celeste F7",
    category: "Site institucional esportivo",
    description:
      "Site criado para apresentar a história do time, organizar informações sobre jogos, elenco, títulos, patrocinadores e localização.",
    status: "Publicado",
    highlights: [
      "Jogos e resultados",
      "Elenco e patrocinadores",
      "Experiência responsiva",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    url: "https://celeste-f7.vercel.app/",
    caseStudyUrl: "/projetos/celeste-f7",
    desktopImage: "/projects/celeste-f7/celeste-f7-desktop.webp",
    mobileImage: "/projects/celeste-f7/celeste-f7-mobile.webp",
    imageAlt:
      "Página inicial do Celeste F7 exibida em computador e celular",
  },
];
