"use client";

import { useRef, useState, type MouseEvent, type TouchEvent } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Modal from "../modal";
import { projects, ProjectProps } from "@/app/projects/data";
import { RiPlayCircleFill } from "react-icons/ri";
import { Background } from "../background";

type Position = {
  x: number;
  y: number;
};

const DRAG_SENSITIVITY = 0.6;

export default function Cube() {
  const lastPositionRef = useRef<Position>({ x: 0, y: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: 14, y: -14 });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );

  const resetDragState = () => {
    setIsDragging(false);
    lastPositionRef.current = { x: 0, y: 0 };
  };

  const handleModalOpen = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);

    if (!project) return;

    setSelectedProject(project);
    setModalIsOpen(true);
    resetDragState();
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    resetDragState();
  };

  const startDrag = (x: number, y: number) => {
    if (modalIsOpen) return;

    setIsDragging(true);
    lastPositionRef.current = { x, y };
  };

  const moveCube = (x: number, y: number) => {
    if (!isDragging || modalIsOpen) return;

    const deltaX = x - lastPositionRef.current.x;
    const deltaY = y - lastPositionRef.current.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * DRAG_SENSITIVITY,
      y: prev.y + deltaX * DRAG_SENSITIVITY,
    }));

    lastPositionRef.current = { x, y };
  };

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    startDrag(event.clientX, event.clientY);
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    moveCube(event.clientX, event.clientY);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;

    startDrag(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    if (!touch) return;

    moveCube(touch.clientX, touch.clientY);
  };

  const handleStopDragging = () => {
    setIsDragging(false);
  };

  const openFaceProject = (
    event: MouseEvent<HTMLButtonElement>,
    projectId: number
  ) => {
    event.stopPropagation();
    handleModalOpen(projectId);
  };

  const stopButtonDrag = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const buttonControl = (x: number, y: number, projectId: number) => {
    setRotation({ x, y });
    handleModalOpen(projectId);
  };

  return (
    <main className={styles.container}>
      <aside className={styles.buttonsControl} aria-label="Controles do cubo">
        <button
          type="button"
          onClick={() => buttonControl(90, 0, 1)}
          className={styles.button}
        >
          <span className={styles.buttonKicker}>Portal</span>
          <span>Trendahora</span>
        </button>

        <button
          type="button"
          onClick={() => buttonControl(-90, 0, 2)}
          className={styles.button}
        >
          <span className={styles.buttonKicker}>Projeto</span>
          <span>GitHub</span>
        </button>

        <button
          type="button"
          onClick={() => buttonControl(0, -90, 3)}
          className={styles.button}
        >
          <span className={styles.buttonKicker}>Cliente</span>
          <span>Corso Moura</span>
        </button>

        <button
          type="button"
          onClick={() => buttonControl(0, 90, 4)}
          className={styles.button}
        >
          <span className={styles.buttonKicker}>Cliente</span>
          <span>Adestrador</span>
        </button>

        <button
          type="button"
          onClick={() => buttonControl(0, 180, 5)}
          className={styles.button}
        >
          <span className={styles.buttonKicker}>Rede social</span>
          <span>Convexa</span>
        </button>
      </aside>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onClose={handleModalClose}
          project={selectedProject}
        />
      )}

      <section
        className={styles.scene}
        aria-label="Cubo interativo com projetos"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleStopDragging}
        onMouseLeave={handleStopDragging}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleStopDragging}
        onTouchCancel={handleStopDragging}
      >
        <div
          className={`${styles.cube} ${isDragging ? styles.dragging : ""}`}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className={`${styles.face} ${styles.front}`}>
            <div className={styles.backgroundLayer}>
              <Background />
            </div>

            <div className={styles.frontContent}>
              <strong>Gire, descubra e inspire-se.</strong>
              <span>Projetos reais, tecnologia e produto digital.</span>
            </div>
          </div>

          <div className={`${styles.face} ${styles.back} ${styles.faceButton}`}>
            <div className={styles.backgroundLayer}>
              <Background />
            </div>

            <Image
              alt="Logo do projeto Convexa"
              src="/images/convexaLogo.png"
              fill
              sizes="(max-width: 678px) 210px, 300px"
              className={styles.projectsImages}
              draggable="false"
            />

            <button
              type="button"
              draggable="false"
              onMouseDown={stopButtonDrag}
              onClick={(event) => openFaceProject(event, 5)}
              className={styles.faceOpenButton}
              aria-label="Abrir projeto Convexa"
            >
              <RiPlayCircleFill className={styles.iconButton} />
            </button>
          </div>

          <div className={`${styles.face} ${styles.left} ${styles.faceButton}`}>
            <div className={styles.backgroundLayer}>
              <Background />
            </div>

            <Image
              alt="Imagem do projeto Flávio Adestrador"
              src="/images/flavioAdestrador.png"
              fill
              sizes="(max-width: 678px) 210px, 300px"
              className={styles.projectsImages}
              draggable="false"
            />

            <button
              type="button"
              draggable="false"
              onMouseDown={stopButtonDrag}
              onClick={(event) => openFaceProject(event, 4)}
              className={styles.faceOpenButton}
              aria-label="Abrir projeto Flávio Adestrador"
            >
              <RiPlayCircleFill className={styles.iconButton} />
            </button>
          </div>

          <div
            className={`${styles.face} ${styles.right} ${styles.faceButton}`}
          >
            <div className={styles.backgroundLayer}>
              <Background />
            </div>

            <Image
              alt="Imagem do projeto Corso Moura Arquitetura"
              src="/images/corsoMoura.png"
              fill
              sizes="(max-width: 678px) 210px, 300px"
              className={styles.projectsImages}
              draggable="false"
            />

            <button
              type="button"
              draggable="false"
              onMouseDown={stopButtonDrag}
              onClick={(event) => openFaceProject(event, 3)}
              className={styles.faceOpenButton}
              aria-label="Abrir projeto Corso Moura Arquitetura"
            >
              <RiPlayCircleFill className={styles.iconButton} />
            </button>
          </div>

          <div className={`${styles.face} ${styles.top} ${styles.faceButton}`}>
            <div className={styles.backgroundLayer}>
              <Background />
            </div>

            <Image
              alt="Imagem do projeto Repositórios GitHub"
              src="/images/gitHubRepositories.jpeg"
              fill
              sizes="(max-width: 678px) 210px, 300px"
              className={styles.projectsImages}
              draggable="false"
            />

            <button
              type="button"
              draggable="false"
              onMouseDown={stopButtonDrag}
              onClick={(event) => openFaceProject(event, 2)}
              className={styles.faceOpenButton}
              aria-label="Abrir projeto Repositórios GitHub"
            >
              <RiPlayCircleFill className={styles.iconButton} />
            </button>
          </div>

          <div
            className={`${styles.face} ${styles.bottom} ${styles.faceButton}`}
          >
            <div className={styles.backgroundLayer}>
              <Background />
            </div>

            <Image
              alt="Imagem do projeto Trendahora"
              src="/images/trendahora.png"
              fill
              sizes="(max-width: 678px) 210px, 300px"
              className={styles.projectsImages}
              draggable="false"
            />

            <button
              type="button"
              draggable="false"
              onMouseDown={stopButtonDrag}
              onClick={(event) => openFaceProject(event, 1)}
              className={styles.faceOpenButton}
              aria-label="Abrir projeto Trendahora"
            >
              <RiPlayCircleFill className={styles.iconButton} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}