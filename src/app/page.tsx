import Link from "next/link"
import style from "@/app/page.module.scss"
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import fotoPerfil from "./../../public/images/fotoPerfil.png"






export default function Home(){
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style.img}>
          <Image
            src={fotoPerfil}
            alt="foto de perfil"
            className={style.fotoPerfil}
            sizes="100vw"
          />
        </div>
        <div className={style.containerText}>
          <div className={style.title}>
            <h1>Bem-vindo</h1>
            <h3>Me chamo <strong>Luciano Mathias</strong>
              < br/>
            e esse é o meu portfolio.</h3>
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