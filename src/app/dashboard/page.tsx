import style from "@/app/dashboard/page.module.scss";

import Image from "next/image";
import projects from "@/../public/images/projects.jpg";
import contact from "@/../public/images/contact.jpg";
import trendahora from "@/../public/images/trendahora.png";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className={style.main}>
      <video
        src="/videos/tech.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={style.bgVideo}
      />

      <div className={style.overlay} />

      <section className={style.container} aria-label="Seções do portfólio">
        <Link href="/dashboard/luciano-mathias" className={style.cardsLink}>
          <article className={style.cardsContainer}>
            <div className={style.mediaBox}>
              <Image
                alt="Imagem sobre Luciano Mathias"
                src={projects}
                fill
                sizes="(max-width: 678px) 140px, (max-width: 1100px) 190px, 200px"
                className={style.projectsImg}
                priority
              />
            </div>

            <h3>QUEM SOU EU?</h3>
          </article>
        </Link>

        <Link href="/dashboard/cube" className={style.cardsLink}>
          <article className={style.cardsContainer}>
            <div className={style.mediaBox}>
              <video
                src="/videos/cubeVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={style.video}
              />
            </div>

            <h3>O CUBO</h3>
          </article>
        </Link>

        <Link href="/projetos/trendahora" className={style.cardsLink}>
          <article className={style.cardsContainer}>
            <div className={`${style.mediaBox} ${style.trendahoraMediaBox}`}>
              <Image
                alt="Logo do Trendahora, portal jornalístico independente brasileiro"
                src={trendahora}
                fill
                sizes="(max-width: 678px) 140px, (max-width: 1100px) 190px, 200px"
                className={`${style.projectsImg} ${style.trendahoraImg}`}
              />
            </div>

            <h3>TRENDAHORA</h3>
          </article>
        </Link>

        <Link href="/dashboard/contact" className={style.cardsLink}>
          <article className={style.cardsContainer}>
            <div className={style.mediaBox}>
              <Image
                alt="Imagem de contato"
                src={contact}
                fill
                sizes="(max-width: 678px) 140px, (max-width: 1100px) 190px, 200px"
                className={style.projectsImg}
              />
            </div>

            <h3>CONTATO</h3>
          </article>
        </Link>
      </section>
    </main>
  );
}
