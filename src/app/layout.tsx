import type { Metadata } from "next";
import "./globals.scss";
import { Exo, Inter, Amatic_SC } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const exo = Exo({ subsets: ["latin"], weight: ["200", "500"] });
const amaticSc = Amatic_SC({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Luciano Mathias - Desenvolvedor Front-End",
  description:
    "Desenvolvedor especializado em React, Next.js e tecnologias modernas. Transformando ideias em soluções eficientes e tecnológicas.",
  other: {
    "google-site-verification": "TANxqOD-DWUTf1eQh5Y3moVO3vSuwhARLaww5_1vjFA",
  },
  authors: [{ name: "Luciano Mathias", url: "https://lucianomathias.com.br" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Luciano Mathias - Desenvolvedor Full-stack",
    description:
      "Explore os projetos de Luciano Mathias, desenvolvedor focado em entregar soluções com tecnologias modernas.",
    url: "https://lucianomathias.com.br",
    siteName: "Luciano Mathias",
    images: [
      {
        url: "https://lucianomathias.com.br/images/fotoPerfilSeo.jpg",
        width: 1200,
        height: 630,
        alt: "Luciano Mathias",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luciano Mathias - Desenvolvedor Front-End",
    description:
      "Portfólio e projetos de Luciano Mathias, especialista em Next.js e React.",
    images: ["https://lucianomathias.com.br/images/fotoPerfilSeo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://lucianomathias.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${exo.className} ${inter.className} ${amaticSc.className}`}
    >
      <head />
      <body className="antialiased">
        {/* Google Analytics */}
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

        {/* Schema.org Person */}
        <Script id="schema-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Luciano Mathias",
            url: "https://lucianomathias.com.br",
            sameAs: [
              "https://github.com/lubamathias",
              "https://www.linkedin.com/in/lucianomathiasamorim/",
            ],
            jobTitle: "Desenvolvedor Full-Stack",
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}
