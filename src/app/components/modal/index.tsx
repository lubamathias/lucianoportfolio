import styles from "./page.module.scss"
import {ProjectProps } from "@/app/projects/data";
import { RiCloseCircleLine, RiLoginCircleLine, RiCheckboxCircleLine } from "react-icons/ri"
import Link from "next/link";


interface ModalProps {
    isOpen: boolean;
    project: ProjectProps | null;
    onClose: () => void;

}

export default function Modal({project, onClose, isOpen}: ModalProps){


    if (!isOpen) return null;
    
    return (
        
        <div className={styles.container}>
            <div className={styles.title}>
                <h4>Projeto:</h4>
                <h2>{project?.title}</h2>
            </div>
            <div className={styles.description}>
                <p>{project?.description}</p>
            </div>
            <div className={styles.containerSkillsSpecifics}>
                <div className={styles.skills}>
                    <h4>Habilidades:</h4>
                    <ul>
                        {project?.skills.map((skill) => (
                                <div  key={skill.name}>
                                    <li className={styles.skillList}>
                                        <span className={styles.skillIcon} >{skill.icon}</span>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </li>
                                </div>
                        ))}
                    </ul>
                </div>
                <div className={styles.skills}>
                    <h4>Especificidades</h4>
                    <ul>
                        {project?.specifies.map((specifies) => (
                            <li key={specifies} className={styles.skillList}>
                                <span className={styles.specifiesIcon}><RiCheckboxCircleLine className={styles.checkIcon}/></span>
                                <span className={styles.specifiesName}>{specifies}</span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
            <button onClick={onClose} className={styles.closeButton}><RiCloseCircleLine className={styles.closeButtonIcon}/></button>
            {project?.haveURL ? (
                <Link href={`${project?.url}`} target="_blank" className={styles.siteLink}>
                        <button className={styles.siteButton}><RiLoginCircleLine className={styles.siteIcon}/></button>
                </Link>
            ):
            null
            }
        </div>
    )
}