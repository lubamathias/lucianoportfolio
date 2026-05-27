import type { Metadata, Viewport } from "next";
import "./globals.scss";
import { Exo, Inter, Amatic_SC } from "next/font/google";
import Script from "next/script";

const siteUrl = "https://lucianomathias.com.br";
const trendahoraUrl = "https://trendahora.com.br";

// Troque se o logo real do Trendahora estiver em outra URL pública.
const trendahoraLogoUrl = "https://trendahora.com.br/logo.png";

const inter = Inter({
  subsets: ["latin"],
});

const exo = Exo({
  subsets: ["latin"],
  weight: ["200", "500"],
});

const amaticSc = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Luciano Mathias | Desenvolvedor Web, Next.js e Criador do Trendahora",
    template: "%s | Luciano Mathias",
  },

  description:
    "Portfólio de Luciano Mathias, desenvolvedor web focado em Next.js, React, TypeScript, SEO técnico e produtos digitais. Criador do Trendahora, portal jornalístico independente brasileiro.",

  applicationName: "Portfólio Luciano Mathias",

  verification: {
    google: "TANxqOD-DWUTf1eQh5Y3moVO3vSuwhARLaww5_1vjFA",
  },

  keywords: [
    "Luciano Mathias",
    "Luciano Mathias Amorim",
    "desenvolvedor web",
    "desenvolvedor front-end",
    "desenvolvedor full-stack",
    "programador",
    "programador Next.js",
    "desenvolvedor React",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Supabase",
    "Vercel",
    "SEO técnico",
    "produto digital",
    "arquitetura de conteúdo",
    "desenvolvimento web",
    "portfólio desenvolvedor",
    "Trendahora",
    "criador do Trendahora",
    "portal jornalístico independente",
  ],

  authors: [
    {
      name: "Luciano Mathias",
      url: siteUrl,
    },
  ],

  creator: "Luciano Mathias",
  publisher: "Luciano Mathias",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Luciano Mathias | Desenvolvedor Web e Criador do Trendahora",
    description:
      "Portfólio de Luciano Mathias, desenvolvedor web focado em Next.js, React, TypeScript, SEO técnico e produtos digitais. Criador do Trendahora.",
    url: siteUrl,
    siteName: "Luciano Mathias",
    images: [
      {
        url: "/images/fotoPerfilSeo.jpg",
        width: 1200,
        height: 630,
        alt: "Luciano Mathias, desenvolvedor web e criador do Trendahora",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luciano Mathias | Desenvolvedor Web e Criador do Trendahora",
    description:
      "Desenvolvedor web focado em Next.js, React, TypeScript, SEO técnico e produtos digitais.",
    images: ["/images/fotoPerfilSeo.jpg"],
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

  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Luciano Mathias",
      description:
        "Portfólio profissional de Luciano Mathias, desenvolvedor web focado em Next.js, React, TypeScript, SEO técnico e produtos digitais.",
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mentions: [
        {
          "@id": `${trendahoraUrl}/#organization`,
        },
      ],
    },

    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Luciano Mathias | Desenvolvedor Web",
      description:
        "Perfil profissional de Luciano Mathias, desenvolvedor web especializado em Next.js, React, TypeScript, SEO técnico e produtos digitais.",
      inLanguage: "pt-BR",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },

    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Luciano Mathias",
      alternateName: "Luciano Mathias Amorim",
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/fotoPerfilSeo.jpg`,
      },
      jobTitle: "Desenvolvedor Web",
      description:
        "Desenvolvedor web focado em Next.js, React, TypeScript, SEO técnico e construção de produtos digitais. Criador do Trendahora.",
      mainEntityOfPage: {
        "@id": `${siteUrl}/#profilepage`,
      },
      affiliation: {
        "@id": `${trendahoraUrl}/#organization`,
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "Supabase",
        "Vercel",
        "SEO técnico",
        "Google Search Console",
        "Google Analytics",
        "Arquitetura de conteúdo",
        "Produto digital",
        "Mídia digital",
        "Desenvolvimento web",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Universidade de São Paulo",
          alternateName: "USP",
        },
      ],
      sameAs: [
        "https://github.com/lubamathias",
        "https://www.linkedin.com/in/lucianomathiasamorim/",
        "https://www.instagram.com/lucianomathias.dev/",
      ],
    },

    {
      "@type": "NewsMediaOrganization",
      "@id": `${trendahoraUrl}/#organization`,
      name: "Trendahora",
      url: trendahoraUrl,
      logo: {
        "@type": "ImageObject",
        url: trendahoraLogoUrl,
      },
      description:
        "Trendahora é um portal jornalístico independente brasileiro com foco em notícias, contexto e análise sobre política, mundo, tecnologia e temas de interesse público.",
      founder: {
        "@id": `${siteUrl}/#person`,
      },
      sameAs: ["https://www.instagram.com/trendahora/"],
    },

    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Projetos desenvolvidos por Luciano Mathias",
      description:
        "Lista de projetos desenvolvidos por Luciano Mathias, incluindo portais, sites institucionais, aplicações web e produtos digitais.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebSite",
            "@id": `${trendahoraUrl}/#website`,
            name: "Trendahora",
            url: trendahoraUrl,
            description:
              "Portal jornalístico independente desenvolvido como produto digital próprio, com foco em SEO técnico, performance, arquitetura editorial, painel administrativo, sitemaps, hubs de cobertura e crescimento orgânico.",
            publisher: {
              "@id": `${trendahoraUrl}/#organization`,
            },
            creator: {
              "@id": `${siteUrl}/#person`,
            },
            inLanguage: "pt-BR",
          },
        },

        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebSite",
            name: "Corso Moura Arquitetura",
            url: "https://www.corsomouraarquitetura.com/",
            description:
              "Portal web desenvolvido para escritório de arquitetura, com área administrativa e área do cliente para acompanhamento de projetos, cronograma, documentos e informações financeiras.",
            creator: {
              "@id": `${siteUrl}/#person`,
            },
            inLanguage: "pt-BR",
          },
        },

        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "WebSite",
            name: "Flávio Adestrador",
            url: "https://flavioadestrador.com.br/",
            description:
              "Site institucional desenvolvido para adestrador profissional, com foco em SEO local, performance, presença digital, autoridade de marca e captação de clientes.",
            creator: {
              "@id": `${siteUrl}/#person`,
            },
            inLanguage: "pt-BR",
          },
        },

        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "CreativeWork",
            name: "Convexa",
            url: "https://convexa.vercel.app/",
            description:
              "Protótipo de rede social desenvolvido com React, autenticação, banco de dados, posts, comentários e notificações.",
            creator: {
              "@id": `${siteUrl}/#person`,
            },
            inLanguage: "pt-BR",
          },
        },

        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "CreativeWork",
            name: "Repositórios GitHub",
            url: "https://github-repositories-ecru.vercel.app/",
            description:
              "Projeto demonstrativo de integração com GitHub, usando React, Next.js, TypeScript e consumo de APIs.",
            creator: {
              "@id": `${siteUrl}/#person`,
            },
            inLanguage: "pt-BR",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${exo.className} ${inter.className} ${amaticSc.className}`}
    >
      <body>
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

        {/* JSON-LD Schema.org */}
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}