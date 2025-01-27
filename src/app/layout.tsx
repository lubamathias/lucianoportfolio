
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
  ],

  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${exo.className} ${inter.className} ${amaticSc.className}`} >
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
