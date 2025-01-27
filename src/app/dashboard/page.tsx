import style from "@/app/dashboard/page.module.scss"

import Image from "next/image"
import projects from "@/../public/images/projects.jpg"
import contact from "@/../public/images/contact.jpg"

import React from "react"

import Link from "next/link"

export default function Dashboard() {
    return(
        <main className={style.main}>
            <video 
            src="/videos/tech.mp4"
            autoPlay
            loop
            muted
            className={style.bgVideo}
            />
            <div className={style.container}>
                <Link href={"dashboard/eu"} className={style.cardsLink}>
                {/*"Foto de Guillaume Meurice: https://www.pexels.com/pt-br/foto/pessoa-dentro-de-um-edificio-olhando-para-uma-estrutura-2808402/"*/}
                    <div className={style.cardsContainer}>
                        <Image
                            alt="Imagem Projects"
                            src={projects}
                            width={225}
                            className={style.projectsImg}
                        />
                        <h3>QUEM SOU EU?</h3>
                    </div>
                </Link>
                <Link href={"dashboard/cube"} className={style.cardsLink}>
                {/* Créditos do vídeo: Youssef Nassar do Pixabay */}
                    <div className={style.cardsContainer}>
                        <video 
                        src="/videos/cubeVideo.mp4"
                        autoPlay
                        loop
                        muted
                        className={style.video}
                        />
                        <h3>O CUBO</h3>
                    </div>
                </Link>
                <Link href="dashboard/contact" className={style.cardsLink}>
                {/* "Foto de Mikhail Nilov: https://www.pexels.com/pt-br/foto/leve-luz-light-mao-7709020/"*/}
                    <div className={style.cardsContainer}>
                        <Image
                            alt="Imagem Contato"
                            src={contact}
                            width={225}
                            className={style.projectsImg}
                        />
                        <h3>CONTATO</h3>
                    </div>
                </Link>
            </div>
        </main>
    )
}