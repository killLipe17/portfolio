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
    default: "LIPEXP Studio | Criação de Sites — Fellipe Leite",
    template: "%s | LIPEXP Studio",
  },

  description:
    "LIPEXP Studio, por Fellipe Leite. Criação de sites modernos, responsivos e funcionais para empresas, profissionais e projetos.",

  applicationName: "LIPEXP Studio",

  authors: [
    {
      name: "Fellipe Santos Leite",
    },
  ],

  creator: "Fellipe Santos Leite",
  publisher: "LIPEXP Studio",

  keywords: [
    "LIPEXP Studio",
    "Fellipe Leite",
    "criação de sites",
    "desenvolvimento web",
    "desenvolvedor web",
    "web design",
    "landing pages",
    "sites institucionais",
    "sites para empresas",
    "sites para lojas",
    "portfólios profissionais",
    "manutenção de sites",
    "design responsivo",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "São Paulo",
  ],

  category: "technology",

  alternates: {
    canonical: "/",
  },

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
    url: "/",
    title: "LIPEXP Studio | Criação de Sites",
    description:
      "Sites modernos para negócios reais. Desenvolvimento web por Fellipe Leite.",
    siteName: "LIPEXP Studio",
  },

  twitter: {
    card: "summary_large_image",
    title: "LIPEXP Studio | Criação de Sites",
    description:
      "Sites modernos para negócios reais. Desenvolvimento web por Fellipe Leite.",
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