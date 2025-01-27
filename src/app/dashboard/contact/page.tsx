"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

import style from "./page.module.scss";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.currentTarget);

        try {
            const response = await fetch("https://getform.io/f/apjjqloa", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setSuccess("Mensagem enviada! Obrigado pelo contato.");
        } catch (error) {
            setSuccess("Erro ao enviar a mensagem.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={style.section}>
            <div className={style.container}>
                <form
                    className={style.form}
                    onSubmit={handleSubmit}
                    action="https://getform.io/f/apjjqloa"
                    method="POST"
                >
                    <div className={style.titleContainer}>
                        <h3>Contato</h3>
                    </div>
                    <div className={style.formContainer}>
                        <div className={style.label}>
                            <label>
                                Nome: <input type="text" name="nome" className={style.input} required />
                            </label>
                            <label>
                                Número: <input type="tel" name="numero" className={style.input} required />
                            </label>
                            <label>
                                Email: <input type="email" name="email" className={style.input} required />
                            </label>
                        </div>
                        <div className={style.message}>
                            <textarea
                                name="mensagem"
                                className={style.textArea}
                                rows={10}
                                placeholder="mensagem..."
                                required
                            ></textarea>
                        </div>
                    </div>
                    <button type="submit" name="submit" className={style.submitButton} disabled={loading}>
                        {loading ? "Enviando..." : <RiMailSendFill className={style.submitIcon} />}
                    </button>
                    {success && (
                        <div>
                            <p>{success}</p>
                        </div>
                    )}
                </form>
                <div className={style.whatsContainer}>
                    <Link
                        href={`https://wa.me/${+5511934319096}`}
                        className={style.whatsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={style.whatsButton}>
                            <FaWhatsapp className={style.whatsIcon} />
                        </button>
                    </Link>
                    <Link href={"https://github.com/lubamathias"} target="_blank" rel="noopener noreferrer">
                        <button className={style.whatsButton}>
                            <FaGithub className={style.whatsIcon} />
                        </button>
                    </Link>
                    <Link
                        href={"https://www.linkedin.com/in/lucianomathiasamorim/"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={style.whatsButton}>
                            <FaLinkedin className={style.whatsIcon} />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
