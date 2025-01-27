import style from "./header.module.scss";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Header(){
    return (
        <div className={style.conteiner}>
            <header className={style.header}>
                <Link href={'/dashboard'} className={style.link}>
                    <IoArrowBackOutline className={style.arrow}/>
                </Link>
            </header>
        </div>
    )
}