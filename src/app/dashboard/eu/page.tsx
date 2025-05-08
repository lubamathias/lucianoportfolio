import style from "./page.module.scss";
import Image from "next/image";


/*Images*/
import fotoPerfil from "/public/images/fotoPerfil.png";
import techHeart from "/public/images/techHeart.png";
import arrow from "/public/images/arrow.png";
import pictureMe from "/public/images/picture.png";
import transition from "/public/images/transition.png";

/* Icons*/
import { RiNextjsFill, RiReactjsFill, RiNodejsFill, RiLightbulbFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { SiTypescript, SiSass } from "react-icons/si";



export default function Eu(){
    return(
        <div className={style.container}>
            <video 
            src="/videos/tech.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={style.video}
            />
            <main className={style.main}>
                <section className={style.section1}>
                    <Image
                        alt="Foto Perfil"
                        src={fotoPerfil}
                        width={225}
                        className={style.fotoPerfil}
                    />
                    <div className={style.apresetation}>
                        <div className={style.text}>
                            <h2>
                            Entre lógica e criatividade, encontro por caminhos claros e eficientes aquilo que transforma ideias em conexões que realmente fazem sentido.
                            </h2>
                        </div>
                    </div>
                </section>

                <section className={style.section4}>
                    <div className={style.conteiner1}>
                        <h2>
                            Desenvolvedor em constante evolução
                        </h2>
                        <ul>
                            <li>
                                <strong>Desenvolvedor front-end</strong> com foco em criar interfaces modernas, funcionais e responsivas.
                            </li>
                            <li>
                                Experiência prática em <strong>consumir e integrar APIs</strong>, conectando o front-end com serviços externos.
                            </li>
                            <li>
                                <strong>Experiência com Next.js, React e TypeScript,</strong> desenvolvendo aplicações web dinâmicas e escaláveis.
                            </li>
                            <li>
                                Interesse em <strong>explorar mais sobre desenvolvimento full-stack,</strong> ampliando minha compreensão do ciclo completo de desenvolvimento.
                            </li>
                        </ul>
                    </div>
                    <div className={style.conteiner2}>
                        <ul>
                            <li>
                                <RiNextjsFill className={`${style.icons} ${style.icons4}`}/>
                                Next.js
                            </li>
                            <li>
                                <RiReactjsFill className={`${style.icons} ${style.icons2}`}/>
                                React
                            </li>
                            <li>
                                <SiTypescript className={`${style.icons} ${style.icons3}`}/>
                                TypeScript
                            </li>
                            <li>
                                <RiNodejsFill className={`${style.icons} ${style.icons1}`}/>
                                Node.js
                            </li>
                            <li>
                                <TbApi className={`${style.icons} ${style.icons5}`}/>
                                APIs
                            </li>
                            <li>
                                <SiSass className={`${style.icons} ${style.icons4}`}/>
                                CSS/SASS
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={style.section2}>
                    <div className={style.techHeartContainer}>
                        <Image
                        alt="Tech Heart Img"
                        src={techHeart}
                        quality={100}
                        className={style.techHeartImg}
                        />
                    </div>
                    <div className={style.textContainer}>
                        <h2>
                            Apaixonado por tecnologia
                        </h2>
                        <p>
                            Sou apaixonado por tecnologia e pelo poder de transformar ideias em soluções digitais. Com uma base acadêmica sólida na USP, aprendi a pensar de forma analítica e a me adaptar a diferentes desafios - habilidades que hoje aplico no universo da programação.
                        </p>
                    </div>
                </section>
                {/*<section className={style.section3}>
                    <div className={style.transitionImgContainer}>
                        <Image
                            alt="Transition Img"
                            src={transition}
                            quality={100}
                            className={style.transitionImg}
                            />
                    </div>
                    <div className={style.textContainer}>
                        <h2>
                            Transição de Carreira
                        </h2>
                        <p>
                            Minha formação em Geociências e Educação Ambiental me ensinou a enxergar o mundo de forma interdisciplinar, conectando lógica e criatividade. Hoje, trago essa mesma perspectiva para o desenvolvimento web, onde construo interfaces que unem funcionalidade e estética.
                        </p>
                    </div>
                </section>*/}
                <section className={style.section2}>
                    <div className={style.techHeartContainer}>
                    <Image
                            alt="pictureMe Img"
                            src={pictureMe}
                            quality={100}
                            className={style.pictureMe}
                            />
                    </div>
                    <div className={style.textContainer}>
                        <h2>
                            Comunicação e transparência como pilares
                        </h2>
                        <p>
                            Prezo por uma comunicação clara, eficiente e honesta em tudo o que faço. Acredito que uma troca de ideias aberta e objetiva é a base para resolver problemas e alcançar resultados que realmente fazem sentido. Minha prioridade é garantir que todas as partes envolvidas estejam alinhadas e seguras de que o trabalho está caminhando na direção certa.
                        </p>
                    </div>
                </section>
                <section className={style.section3}>
                    <div className={style.arrowImgContainer}>
                        <Image
                            alt="Arrow Img"
                            src={arrow}
                            quality={100}
                            className={style.arrowImg}
                            />
                    </div>
                    <div className={style.textContainer}>
                        <h2>
                            Aprendizado Contínuo
                        </h2>
                        <p>
                            Tenho unido aprendizado técnico e prática constante na criação de soluções digitais que geram valor real. Com uma base sólida na camada visual e interativa das aplicações, venho expandindo meu domínio para outras etapas do desenvolvimento, em busca de me tornar um desenvolvedor Full Stack completo.
                        </p>
                    </div>
                </section>

                <section className={style.section1}>
                        <RiLightbulbFill className={style.lightIcon}/>
                    <h1>
                        Vamos transformar ideias em realidade?
                    </h1>
                </section>

            </main>
        </div>
    )
}