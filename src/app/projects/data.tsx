import { RiNextjsFill, RiReactjsFill, RiCss3Fill, RiNodejsFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import {
  SiTypescript,
  SiSass,
  SiShadcnui,
  SiClerk,
  SiPrisma,
  SiTailwindcss,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  skills: { name: string; icon: JSX.Element }[];
  specifies: string[];
  url: string;
  haveURL: boolean;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Trendahora",
    description:
      "Portal jornalístico independente desenvolvido como produto digital próprio, com foco em publicação dinâmica de notícias, SEO técnico, performance, arquitetura editorial, painel administrativo, sitemaps, hubs de cobertura, dados estruturados e crescimento orgânico.",
    skills: [
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    specifies: [
      "App Router",
      "SEO técnico",
      "Google News Sitemap",
      "Dados estruturados",
      "Painel administrativo",
      "Hubs editoriais",
      "Performance",
      "SSR/SSG",
    ],
    url: "https://trendahora.com.br/",
    haveURL: true,
  },

  {
    id: 2,
    title: "Repositórios GitHub",
    description:
      "Aplicação demonstrativa de integração com a API do GitHub, desenvolvida para buscar, renderizar e organizar repositórios de forma dinâmica, com foco em consumo de API, hooks, responsividade e manipulação de dados no front-end.",
    skills: [
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Node.js", icon: <RiNodejsFill /> },
      { name: "APIs", icon: <TbApi /> },
      { name: "CSS", icon: <RiCss3Fill /> },
    ],
    specifies: [
      "App Router",
      "Integração com GitHub",
      "Consumo de API",
      "Hooks",
      "Renderização dinâmica",
      "Responsividade",
    ],
    url: "https://github-repositories-ecru.vercel.app/",
    haveURL: true,
  },

  {
    id: 3,
    title: "Corso Moura Arquitetura",
    description:
      "Portal web desenvolvido para escritório de arquitetura, com área administrativa e área do cliente para acompanhamento de projetos, cronograma, documentos, custos, informações financeiras e organização interna de processos.",
    skills: [
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    specifies: [
      "App Router",
      "Área administrativa",
      "Área do cliente",
      "Gestão de projetos",
      "Controle financeiro",
      "Documentos",
      "Banco de dados",
      "Responsividade",
    ],
    url: "https://www.corsomouraarquitetura.com/",
    haveURL: true,
  },

  {
    id: 4,
    title: "Flávio Adestrador",
    description:
      "Site institucional desenvolvido para adestrador profissional, com foco em SEO local, performance, presença digital, autoridade de marca, páginas comerciais, integração com redes sociais e captação de clientes.",
    skills: [
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "React", icon: <RiReactjsFill /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "CSS", icon: <RiCss3Fill /> },
    ],
    specifies: [
      "SEO local",
      "Performance",
      "Responsividade",
      "Páginas comerciais",
      "Presença digital",
      "Integração com redes sociais",
      "App Router",
    ],
    url: "https://flavioadestrador.com.br/",
    haveURL: true,
  },

  {
    id: 5,
    title: "Convexa",
    description:
      "Protótipo de rede social desenvolvido para explorar autenticação, banco de dados, criação de posts, comentários, notificações, componentes reutilizáveis e organização de uma aplicação web com recursos sociais.",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Clerk", icon: <SiClerk /> },
      { name: "shadcn/ui", icon: <SiShadcnui /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "SASS", icon: <SiSass /> },
      { name: "React", icon: <RiReactjsFill /> },
    ],
    specifies: [
      "SQL",
      "Autenticação",
      "Posts",
      "Comentários",
      "Notificações",
      "Componentes reutilizáveis",
      "Responsividade",
      "SSR/SSG",
    ],
    url: "https://convexa.vercel.app/",
    haveURL: true,
  },
];