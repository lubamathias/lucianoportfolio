
import type { Metadata } from "next";
import "./globals.scss";
import {Exo, Inter, Amatic_SC} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo'
})

const amaticSc = Amatic_SC ({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-amaticSc'
})



export const metadata: Metadata = {
  title: "Luciano Mathias - Desenvolvedor Front-End",
  description: "Desenvolvedor especializado em React, Next.js e tecnologias modernas. Transformando ideias em soluções eficientes e tecnológicas.",
  keywords: [
    "desenvolvedor front-end",
    "desenvolvedor",
    "portfólio desenvolvedor front",
    "portfólio",
    "Luciano Mathias",
    "Luciano",
    "Mathias",
    "React",
    "Next.js",
    "Next",
    "programador",
    "portfólio de programação",
    "JavaScript",
    "tecnologia",
    "desenvolvedor React",
    "React developer",
    "desenvolvedor Next.js",
    "desenvolvedor Next",
    "Next.js developer",
  ],

  authors: [{ name: "Luciano Mathias", url: "https://lucianomathiasportfolio.vercel.app" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Luciano Mathias - Desenvolvedor Front-End",
    description:
      "Explore os projetos de Luciano Mathias, desenvolvedor focado em entregar soluções tecnológicas usando React, Next.js e Firebase.",
    url: "https://lucianomathiasportfolio.vercel.app",
    siteName: "Luciano Mathias",
    images: [
      {
        url: "https://lucianomathiasportfolio.vercel.app/fotoPerfil.png",
        width: 1200,
        height: 630,
        alt: "Capa do portfólio de Luciano Mathias",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lucianomathiasportfolio.vercel.app",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <head>
        {/* Fallback manual para o favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
