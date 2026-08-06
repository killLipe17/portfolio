import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  keywords: [
    "Fellipe Leite",
    "desenvolvedor web",
    "criação de sites",
    "sites institucionais",
    "landing pages",
    "portfólios",
    "Next.js",
    "TypeScript",
    "São Paulo",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Fellipe Leite | Desenvolvedor Web",
    description:
      "Sites modernos, responsivos e desenvolvidos para necessidades reais.",
    siteName: "Portfólio Fellipe Leite",
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