import Link from "next/link"
import style from "@/app/page.module.scss"
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import fotoPerfil from "./../../public/images/fotoPerfil.png"



export const metadata = {
  title: "Luciano Mathias - Portfólio",
  description: "Portfólio de Luciano Mathias, desenvolvedor Front-End e Next.js",
};


export default function Home(){
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.img}>
          <Image
            src={fotoPerfil}
            alt="Luciano Mathias"
            className={style.fotoPerfil}
            sizes="100vw"
          />
        </div>
        <div className={style.containerText}>
          <div className={style.title}>
            <h2>Bem-vindo</h2>
            <h1>Me chamo <strong>Luciano Mathias</strong>
              < br/>
            e esse é o meu portfolio.</h1>
          </div>
          <div className={style.button}>
            <Link href='/dashboard'>
              <HiArrowRight size={25} className={style.arrow}/>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}