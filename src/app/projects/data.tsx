import { RiNextjsFill, RiReactjsFill, RiCss3Fill, RiNodejsFill } from "react-icons/ri";
import { TbApi, TbBrandOauth } from "react-icons/tb";
import { SiTypescript, SiFirebase, SiSass, SiShadcnui, SiClerk, SiPrisma, SiTailwindcss, SiPostgresql } from "react-icons/si";



export interface ProjectProps {
    id: number,
    title: string,
    description: string,
    skills:
        {name: string; icon: JSX.Element}[],
    specifies: string [],
    url: string,
    haveURL: boolean,
}

export const projects: ProjectProps[] = [
    {
        id: 1, 
        title: "DAILY GAMES", 
        description: "Projeto demonstrativo de uma aplicação web dedicada a compartilhar informações e curiosidades de games, conectando interesses entre os usuários.", 
        skills: [
            {name: "Next.js" , icon: <RiNextjsFill/>},
            {name: "React", icon: <RiReactjsFill/> },
            {name: "TypeScript", icon: <SiTypescript/>},
            {name: 'Node.js', icon: <RiNodejsFill/>},
            {name: 'APIs', icon: <TbApi/>},
            {name: "CSS", icon: <RiCss3Fill/>},      
        ],
        specifies: ['App Router', 'Responsividade' , 'CSR', 'SSR/SSG', 'SEO'],
        url: 'https://portfolio-dailygames-tzdt.vercel.app/',
        haveURL: true
    },

    {
        id: 2,
        title: "Repositórios Github",
        description: "Projeto demonstrativo de integração com Github. Com uso das ferramentas React e Next.js para APIs.",
        skills: [
            {name: "Next.js" , icon: <RiNextjsFill/>},
            {name: "React", icon: <RiReactjsFill/> },
            {name: "TypeScript", icon: <SiTypescript/>},
            {name: 'Node.js', icon: <RiNodejsFill/>},
            {name: 'APIs', icon: <TbApi/>},
            {name: "CSS", icon: <RiCss3Fill/>},     
        ],
        specifies: ['App Router', 'Integração com Github', 'Hooks', 'Manipulação e renderização dinâmica de dados'],
        url: 'https://github-repositories-ecru.vercel.app/',
        haveURL: true
    },

    {
        id: 3,
        title: "Tarefas+",
        description: "Protótipo de projeto dedicado à organização de tarefas pessoais e coletivas, usando banco de dados e ferramentas de autenticação.",
        skills: [
            {name: "OAuth" , icon: <TbBrandOauth/>},
            {name: "Firebase" , icon: <SiFirebase/>},
            {name: "Next.js" , icon: <RiNextjsFill/>},
            {name: "React", icon: <RiReactjsFill/> },
            {name: "TypeScript", icon: <SiTypescript/>},
            {name: 'Node.js', icon: <RiNodejsFill/>},
            {name: 'APIs', icon: <TbApi/>},
            {name: "CSS", icon: <RiCss3Fill/>},     
        ],
        specifies: ['Autenticação Google', 'Banco de dados com Firebase', 'Page Router', 'Responsividade'],
        url: 'https://tasks-app-livid.vercel.app/',
        haveURL: true
    },

    {
        id: 4,
        title: "Sobre meu portfólio",
        description: "A idéia de criar 'O Cubo' era, inicialmente, demonstrar um pouco das minhas habilidades com CSS. Porém, ao ficar pronto, percebi que ele poderia ter uma importância fundamental no meu portfólio",
        skills: [
            {name: "SASS", icon: <SiSass/>},     
            {name: "Next.js" , icon: <RiNextjsFill/>},
            {name: "React", icon: <RiReactjsFill/> },
            {name: "TypeScript", icon: <SiTypescript/>},
            {name: 'Node.js', icon: <RiNodejsFill/>},
        ],
        specifies: ['App Router', 'Responsividade', 'CSR', 'SSR/SSG', 'SEO'],
        url: 'https://tasks-app-livid.vercel.app/',
        haveURL: false
    },

    {
        id: 5,
        title: "Convexa",
        description: "Protótipo completo de rede social, com utilização de diversas bibliotecas react, SQL, autenticação; com recurso de notificação, comentário, posts, entre outros",
        skills: [
            {name: "PostgreSQL", icon: <SiPostgresql/>},
            {name: "Prisma", icon: <SiPrisma/>},
            {name: "Clerk", icon: <SiClerk/>},
            {name: "Shadcnui", icon: <SiShadcnui/>},
            {name: "Tailwindcss", icon: <SiTailwindcss/>},
            {name: "SASS", icon: <SiSass/>},     
            {name: "React", icon: <RiReactjsFill/> },
        ],
        specifies: ['SQL', 'Autenticação', 'Responsividade', 'CSR', 'SSR/SSG', 'SEO'],
        url: 'https://convexa.vercel.app/',
        haveURL: true
    }


    
]