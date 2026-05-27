import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import styles from "./page.module.scss";
import { RiArrowLeftLine } from "react-icons/ri";

import trendahoraLogo from "@/../public/images/trendahora.png";

const portfolioUrl = "https://lucianomathias.com.br";
const pageUrl = `${portfolioUrl}/projetos/trendahora`;
const trendahoraUrl = "https://trendahora.com.br";

export const metadata: Metadata = {
  title: "Trendahora | Projeto desenvolvido por Luciano Mathias",
  description:
    "Case do Trendahora no portfólio de Luciano Mathias: portal jornalístico independente desenvolvido com Next.js, TypeScript, SEO técnico, arquitetura editorial e produto digital.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Trendahora | Projeto desenvolvido por Luciano Mathias",
    description:
      "Portal jornalístico independente desenvolvido como produto digital próprio, com foco em SEO técnico, performance, arquitetura editorial e crescimento orgânico.",
    url: pageUrl,
    siteName: "Luciano Mathias",
    type: "article",
    locale: "pt_BR",
    images: [
      {
        url: `${portfolioUrl}/images/trendahora.png`,
        width: 1200,
        height: 630,
        alt: "Logo do Trendahora, portal jornalístico independente brasileiro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trendahora | Projeto desenvolvido por Luciano Mathias",
    description:
      "Case técnico e de produto do Trendahora, portal jornalístico independente desenvolvido por Luciano Mathias.",
    images: [`${portfolioUrl}/images/trendahora.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Trendahora — projeto desenvolvido por Luciano Mathias",
      description:
        "Página de portfólio sobre o Trendahora, portal jornalístico independente desenvolvido por Luciano Mathias.",
      inLanguage: "pt-BR",
      isPartOf: {
        "@id": `${portfolioUrl}/#website`,
      },
      about: {
        "@id": `${trendahoraUrl}/#organization`,
      },
      mainEntity: {
        "@id": `${pageUrl}#creativework`,
      },
    },
    {
      "@type": "CreativeWork",
      "@id": `${pageUrl}#creativework`,
      name: "Trendahora",
      url: trendahoraUrl,
      description:
        "Portal jornalístico independente brasileiro desenvolvido como produto digital próprio, com foco em notícias, SEO técnico, performance, arquitetura editorial, painel administrativo, hubs de cobertura e crescimento orgânico.",
      creator: {
        "@id": `${portfolioUrl}/#person`,
      },
      about: {
        "@id": `${trendahoraUrl}/#organization`,
      },
      inLanguage: "pt-BR",
    },
    {
      "@type": "NewsMediaOrganization",
      "@id": `${trendahoraUrl}/#organization`,
      name: "Trendahora",
      url: trendahoraUrl,
      description:
        "Trendahora é um portal jornalístico independente brasileiro com foco em notícias, contexto e análise sobre política, mundo, tecnologia e temas de interesse público.",
      founder: {
        "@id": `${portfolioUrl}/#person`,
      },
      sameAs: ["https://www.instagram.com/trendahora/"],
    },
    {
      "@type": "Person",
      "@id": `${portfolioUrl}/#person`,
      name: "Luciano Mathias",
      url: portfolioUrl,
      jobTitle: "Desenvolvedor Web",
      sameAs: [
        "https://github.com/lubamathias",
        "https://www.linkedin.com/in/lucianomathiasamorim/",
        "https://www.instagram.com/lucianomathias.dev/",
      ],
    },
  ],
};

export default function TrendahoraPage() {
  return (
    <main className={styles.main}>
        <Link
        href="/dashboard"
        className={styles.backButton}
        aria-label="Voltar para o dashboard"
      >
        <RiArrowLeftLine className={styles.backIcon} />
      </Link>
      <Script
        id="trendahora-project-json-ld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.hero}>
        <div className={styles.logoBox}>
          <Image
            src={trendahoraLogo}
            alt="Logo do Trendahora"
            fill
            sizes="(max-width: 768px) 180px, 240px"
            className={styles.logo}
            priority
          />
        </div>

        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Projeto em produção</p>

          <h1>Trendahora</h1>

          <p className={styles.subtitle}>
            Portal jornalístico independente desenvolvido como produto digital
            próprio, unindo programação, SEO técnico, arquitetura editorial,
            performance e operação contínua de conteúdo.
          </p>

          <div className={styles.actions}>
            <Link
              href={trendahoraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              Acessar o Trendahora
            </Link>

            <Link href="/dashboard/cube" className={styles.secondaryButton}>
              Ver outros projetos
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.card}>
          <h2>O que é o projeto</h2>
          <p>
            O Trendahora é um portal jornalístico independente brasileiro,
            criado para acompanhar notícias relevantes, organizar coberturas em
            desenvolvimento e oferecer contexto sobre temas de interesse público.
          </p>
          <p>
            Dentro do meu portfólio, o projeto representa um produto real em
            produção, com desafios técnicos, editoriais e estratégicos ligados a
            tráfego orgânico, indexação, performance e arquitetura de conteúdo.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Meu papel no Trendahora</h2>
          <p>
            Sou responsável pelo desenvolvimento, manutenção e evolução do
            produto, incluindo estrutura do site, painel administrativo, SEO
            técnico, organização de conteúdo, páginas dinâmicas, sitemaps e
            estratégia de distribuição orgânica.
          </p>
          <p>
            O projeto exige decisões constantes de programação, produto,
            experiência do usuário, performance, dados estruturados e
            posicionamento editorial.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Stack utilizada</h2>
          <ul className={styles.tagsList}>
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Prisma</li>
            <li>PostgreSQL</li>
            <li>Supabase</li>
            <li>Vercel</li>
            <li>Google Search Console</li>
            <li>Google Analytics</li>
          </ul>
        </article>

        <article className={styles.card}>
          <h2>SEO técnico e arquitetura editorial</h2>
          <p>
            A estrutura do Trendahora foi pensada para busca orgânica, com
            páginas de notícia, categorias, metadados, URLs amigáveis, sitemaps,
            organização interna de links e páginas de cobertura recorrente.
          </p>
          <p>
            Um dos pontos centrais do projeto é transformar conteúdo jornalístico
            em uma arquitetura clara para leitores e mecanismos de busca.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Hubs de cobertura</h2>
          <p>
            O Trendahora utiliza páginas de Radar para organizar coberturas em
            andamento. Esses hubs reúnem contexto, atualizações relevantes,
            matérias relacionadas e conexão com temas que evoluem ao longo do
            tempo.
          </p>
          <p>
            A proposta é evitar que notícias fiquem isoladas, criando uma
            estrutura mais consistente para acompanhar temas recorrentes.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Por que esse projeto importa no portfólio</h2>
          <p>
            O Trendahora mostra uma aplicação real construída para produção,
            com conteúdo dinâmico, tráfego orgânico, decisões de produto,
            monitoramento técnico e evolução contínua.
          </p>
          <p>
            Mais do que demonstrar uma stack, o projeto mostra a construção de
            um produto digital com contexto, manutenção, estratégia e operação.
          </p>
        </article>
      </section>

      <section className={styles.finalCta}>
        <h2>Projeto ativo em produção</h2>
        <p>
          O Trendahora segue em desenvolvimento contínuo, com melhorias em SEO,
          performance, estrutura editorial, experiência de leitura e distribuição
          orgânica.
        </p>

        <Link
          href={trendahoraUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryButton}
        >
          Visitar trendahora.com.br
        </Link>
      </section>
    </main>
  );
}