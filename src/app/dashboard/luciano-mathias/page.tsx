import type { Metadata } from "next";
import style from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

/* Images */
import fotoPerfil from "/public/images/fotoPerfil.png";
import techHeart from "/public/images/techHeart.png";
import arrow from "/public/images/arrow.png";
import pictureMe from "/public/images/picture.png";

/* Icons */
import {
  RiNextjsFill,
  RiReactjsFill,
  RiNodejsFill,
  RiLightbulbFill,
  RiExternalLinkLine,
} from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import {
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";

export const metadata: Metadata = {
  title: "Luciano Mathias | Desenvolvedor Web e Criador do Trendahora",
  description:
    "Conheça Luciano Mathias, desenvolvedor web focado em Next.js, React, TypeScript, SEO técnico e produtos digitais. Criador do Trendahora.",
  alternates: {
    canonical: "https://lucianomathias.com.br/dashboard/luciano-mathias",
  },
  openGraph: {
    title: "Luciano Mathias | Desenvolvedor Web e Criador do Trendahora",
    description:
      "Desenvolvedor web focado em Next.js, React, TypeScript, SEO técnico e produtos digitais.",
    url: "https://lucianomathias.com.br/dashboard/luciano-mathias",
    siteName: "Luciano Mathias",
    type: "profile",
    locale: "pt_BR",
    images: [
      {
        url: "https://lucianomathias.com.br/images/fotoPerfilSeo.jpg",
        width: 1200,
        height: 630,
        alt: "Luciano Mathias, desenvolvedor web",
      },
    ],
  },
};

const skills = [
  {
    name: "Next.js",
    icon: <RiNextjsFill className={style.skillIcon} />,
  },
  {
    name: "React",
    icon: <RiReactjsFill className={style.skillIcon} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className={style.skillIcon} />,
  },
  {
    name: "Node.js",
    icon: <RiNodejsFill className={style.skillIcon} />,
  },
  {
    name: "APIs",
    icon: <TbApi className={style.skillIcon} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className={style.skillIcon} />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className={style.skillIcon} />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className={style.skillIcon} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className={style.skillIcon} />,
  },
  {
    name: "CSS/SASS",
    icon: <SiSass className={style.skillIcon} />,
  },
];

export default function Eu() {
  return (
    <div className={style.container}>
      <video
        src="/videos/tech.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={style.video}
      />

      <div className={style.overlay} />

      <main className={style.main}>
        <section className={style.hero}>
          <div className={style.profileCard}>
            <div className={style.profileImageBox}>
              <Image
                alt="Luciano Mathias"
                src={fotoPerfil}
                fill
                sizes="(max-width: 768px) 170px, 220px"
                className={style.fotoPerfil}
                priority
              />
            </div>

            <div className={style.profileInfo}>
              <p className={style.status}>Disponível para projetos web</p>
              <h1>Luciano Mathias</h1>
              <p>Desenvolvedor Web • Next.js • TypeScript • SEO Técnico</p>
            </div>
          </div>

          <div className={style.heroText}>
            <p className={style.eyebrow}>Sobre mim</p>

            <h2>
              Desenvolvo produtos digitais com foco em performance, clareza e
              crescimento orgânico.
            </h2>

            <p>
              Sou desenvolvedor web com foco em Next.js, React, TypeScript,
              interfaces responsivas, integração com APIs, banco de dados e SEO
              técnico. Meu trabalho une programação, produto e visão estratégica
              para transformar ideias em aplicações reais, funcionais e bem
              estruturadas.
            </p>

            <p>
              Também sou criador do{" "}
              <Link href="/projetos/trendahora" className={style.textLink}>
                Trendahora
              </Link>
              , um portal jornalístico independente desenvolvido como produto
              digital próprio, com foco em arquitetura editorial, performance,
              indexação, sitemaps, painel administrativo e crescimento orgânico.
            </p>

            <div className={style.heroActions}>
              <Link href="/projetos/trendahora" className={style.primaryButton}>
                Ver case do Trendahora
                <RiExternalLinkLine />
              </Link>

              <Link href="/dashboard/cube" className={style.secondaryButton}>
                Ver projetos
              </Link>
            </div>
          </div>
        </section>

        <section className={style.metricsSection} aria-label="Resumo profissional">
          <article>
            <strong>Next.js</strong>
            <span>Aplicações modernas com App Router, SSR, SSG e rotas dinâmicas.</span>
          </article>

          <article>
            <strong>SEO técnico</strong>
            <span>Metadados, sitemap, estrutura semântica e arquitetura de conteúdo.</span>
          </article>

          <article>
            <strong>Produto real</strong>
            <span>Projetos em produção, com operação, manutenção e evolução contínua.</span>
          </article>
        </section>

        <section className={style.contentSection}>
          <div className={style.imageColumn}>
            <Image
              alt="Representação visual de tecnologia e desenvolvimento"
              src={techHeart}
              quality={100}
              className={style.featureImage}
            />
          </div>

          <div className={style.textContainer}>
            <p className={style.eyebrow}>Perfil técnico</p>

            <h2>Programação com visão de produto</h2>

            <p>
              Tenho interesse em construir aplicações que não sejam apenas
              visualmente boas, mas também rápidas, organizadas e preparadas para
              crescer. Por isso, meu foco está em código limpo, experiência do
              usuário, performance, estrutura de dados e SEO técnico.
            </p>

            <p>
              Minha formação pela USP em Geociências e Educação Ambiental
              também contribuiu para uma forma de pensar analítica,
              interdisciplinar e orientada à resolução de problemas.
            </p>
          </div>
        </section>

        <section className={style.cardsSection}>
          <article className={style.infoCard}>
            <h2>Front-end e interface</h2>
            <p>
              Desenvolvimento de interfaces responsivas, modernas e funcionais,
              com atenção a usabilidade, hierarquia visual, performance e
              manutenção do código.
            </p>
          </article>

          <article className={style.infoCard}>
            <h2>Back-end e dados</h2>
            <p>
              Criação de aplicações com APIs, autenticação, banco de dados,
              Prisma, PostgreSQL e integração com serviços externos.
            </p>
          </article>

          <article className={style.infoCard}>
            <h2>SEO e aquisição orgânica</h2>
            <p>
              Estruturação de páginas, metadados, URLs, sitemaps e conteúdo
              técnico para melhorar rastreamento, indexação e presença orgânica.
            </p>
          </article>
        </section>

        <section className={style.trendahoraSection}>
          <div className={style.textContainer}>
            <p className={style.eyebrow}>Projeto principal</p>

            <h2>Trendahora como produto digital</h2>

            <p>
              O Trendahora é o principal exemplo prático da minha atuação como
              desenvolvedor. O projeto envolve desenvolvimento web, painel
              administrativo, banco de dados, publicação dinâmica de conteúdo,
              SEO técnico, organização editorial e monitoramento de desempenho.
            </p>

            <p>
              Esse projeto me permite lidar com problemas reais de produto:
              velocidade, indexação, arquitetura de informação, experiência de
              leitura, distribuição orgânica e evolução contínua em ambiente de
              produção.
            </p>

            <Link href="/projetos/trendahora" className={style.inlineButton}>
              Conhecer o case técnico do Trendahora
              <RiExternalLinkLine />
            </Link>
          </div>

          <div className={style.imageColumn}>
            <Image
              alt="Imagem representando desenvolvimento e comunicação digital"
              src={pictureMe}
              quality={100}
              className={style.pictureMe}
            />
          </div>
        </section>

        <section className={style.skillsSection}>
          <div className={style.skillsHeader}>
            <p className={style.eyebrow}>Stack</p>
            <h2>Tecnologias que uso</h2>
            <p>
              Ferramentas que fazem parte dos meus projetos atuais, incluindo
              portais, sites institucionais, painéis administrativos e aplicações
              web.
            </p>
          </div>

          <ul className={style.skillsGrid}>
            {skills.map((skill) => (
              <li key={skill.name}>
                {skill.icon}
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={style.finalSection}>
          <Image
            alt="Seta simbolizando evolução e direção"
            src={arrow}
            quality={100}
            className={style.arrowImg}
          />

          <div>
            <RiLightbulbFill className={style.lightIcon} />

            <h2>Vamos transformar uma ideia em produto?</h2>

            <p>
              Posso ajudar a estruturar sites, aplicações, interfaces, painéis,
              integrações e produtos digitais com foco em performance, clareza e
              resultado.
            </p>

            <Link href="/dashboard/contact" className={style.primaryButton}>
              Entrar em contato
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}