
import type { Metadata } from "next";
import "./globals.scss";
import {Exo, Inter, Amatic_SC} from 'next/font/google';
import Script from "next/script";

const inter = Inter({
  subsets: ['latin'],
})

const exo = Exo({
  subsets: ['latin'],
  weight: ['200', '500']
})

const amaticSc = Amatic_SC ({
  subsets: ['latin'],
  weight: ['400', '700'],
})



export const metadata: Metadata = {
  title: "Luciano Mathias - Desenvolvedor Front-End",
  description: "Desenvolvedor especializado em React, Next.js e tecnologias modernas. Transformando ideias em soluções eficientes e tecnológicas.",
  other: {
    "google-site-verification": "TANxqOD-DWUTf1eQh5Y3moVO3vSuwhARLaww5_1vjFA",
  },
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
        url: "https://lucianomathiasportfolio.vercel.app/images/fotoPerfilSeo.jpg",
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
    <html lang="pt-BR" className={`${exo.className} ${inter.className} ${amaticSc.className}`}>
      <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XY4HGQZF7C"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XY4HGQZF7C');
          `}
        </Script>
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
