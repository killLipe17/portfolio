import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  "https://portfolio-seven-coral-t58e5zn2u9.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Fellipe Leite | Desenvolvedor Web",
    template: "%s | Fellipe Leite",
  },

  description:
    "Portfólio de Fellipe Leite, desenvolvedor web formado em Análise e Desenvolvimento de Sistemas. Criação de sites modernos, responsivos e funcionais.",

  applicationName: "Portfólio Fellipe Leite",

  authors: [
    {
      name: "Fellipe Santos Leite",
    },
  ],

  creator: "Fellipe Santos Leite",
  publisher: "Fellipe Santos Leite",

  keywords: [
    "Fellipe Leite",
    "desenvolvedor web",
    "criação de sites",
    "desenvolvedor Next.js",
    "sites institucionais",
    "sites para lojas",
    "landing pages",
    "portfólios profissionais",
    "manutenção de sites",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "São Paulo",
  ],

  category: "technology",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Fellipe Leite | Desenvolvedor Web",
    description:
      "Sites modernos, responsivos e desenvolvidos para necessidades reais.",
    siteName: "Portfólio Fellipe Leite",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fellipe Leite | Desenvolvedor Web",
    description:
      "Sites modernos, responsivos e desenvolvidos para necessidades reais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}