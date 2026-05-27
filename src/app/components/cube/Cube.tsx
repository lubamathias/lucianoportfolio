"use client";

import { useRef, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Modal from "../modal";
import { projects, ProjectProps } from "@/app/projects/data";
import { RiPlayCircleFill } from "react-icons/ri";
import { Background } from "../background";

export default function Cube() {
  const cubeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [initialPosicion, setInicialPosition] = useState<{
    x: number;
    y: number;
  } | null>({ x: 0, y: 0 });

  const resetDragState = () => {
    setIsDragging(false);
    setLastPosition({ x: 0, y: 0 });
    setInicialPosition(null);
  };

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );

  const handleModalOpen = (projectId: number) => {
    const project = projects.find((p) => p.id === projectId);

    if (project) {
      setModalIsOpen(true);
      setSelectedProject(project);
    }
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    resetDragState();
  };

  const handleMove = (x: number, y: number) => {
    const deltaX = x - lastPosition.x;
    const deltaY = y - lastPosition.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.6,
      y: prev.y + deltaX * 0.6,
    }));

    setLastPosition({ x, y });
  };

  const handleMouseMove = (e: React.MouseEvent): void => {
    if (!isDragging) return;
    handleMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    if (!isDragging) return;

    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleMouseDown = (e: React.MouseEvent): void => {
    setIsDragging(true);
    setLastPosition({ x: e.clientX, y: e.clientY });
    setInicialPosition({ x: e.clientX, y: e.clientY });
  };

  const handleTouchStart = (e: React.TouchEvent): void => {
    const touch = e.touches[0];

    setIsDragging(true);
    setLastPosition({ x: touch.clientX, y: touch.clientY });
    setInicialPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleClick = (event: React.MouseEvent, onClick: () => void) => {
    if (!lastPosition || !initialPosicion) {
      return;
    }

    onClick();
  };

  const handleStopDragging = () => setIsDragging(false);

  const buttonControl = (x: number, y: number, projectId: number) => {
    setRotation({ x, y });
    handleModalOpen(projectId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsControl}>
        <button
          onClick={() => buttonControl(90, 0, 1)}
          className={styles.button}
        >
          Portal: <br /> Trendahora
        </button>

        <button
          onClick={() => buttonControl(-90, 0, 2)}
          className={styles.button}
        >
          Projeto: <br /> Repo. GitHub
        </button>

        <button
          onClick={() => buttonControl(0, -90, 3)}
          className={styles.button}
        >
          Cliente: <br /> Corso Moura
        </button>

        <button
          onClick={() => buttonControl(0, 90, 4)}
          className={styles.button}
        >
          Cliente: <br /> Adestrador
        </button>

        <button
          onClick={() => buttonControl(0, 180, 5)}
          className={styles.button}
        >
          Rede Social: <br /> Convexa
        </button>
      </div>

      <div>
        {modalIsOpen && (
          <Modal
            isOpen={modalIsOpen}
            onClose={handleModalClose}
            project={selectedProject}
          />
        )}
      </div>

      <div
        className={styles.scene}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleStopDragging}
        onMouseLeave={handleStopDragging}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleStopDragging}
      >
        <div
          className={styles.cube}
          ref={cubeRef}
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className={`${styles.face} ${styles.front}`}>
            <p>
              <strong>Gire, descubra e inspire-se.</strong>
              <br />
              Este não é um cubo comum, é a porta para o meu mundo.
            </p>
            <Background />
          </div>

          <div className={`${styles.face} ${styles.back}`}>
            <div className={`${styles.face} ${styles.faceButton}`}>
              <button
                draggable="false"
                onMouseDown={(e) => handleClick(e, () => handleModalOpen(5))}
              >
                <RiPlayCircleFill className={styles.iconButton} />
              </button>

              <Background />

              <Image
                alt="Logo do projeto Convexa"
                src="/images/convexaLogo.png"
                fill
                className={styles.projectsImages}
                draggable="false"
              />
            </div>
          </div>

          <div className={`${styles.face} ${styles.left}`}>
            <div className={`${styles.face} ${styles.faceButton}`}>
              <button
                draggable="false"
                onMouseDown={(e) => handleClick(e, () => handleModalOpen(4))}
              >
                <RiPlayCircleFill className={styles.iconButton} />
              </button>

              <Background />

              <Image
                alt="Imagem do projeto Flávio Adestrador"
                src="/images/flavioAdestrador.png"
                fill
                className={styles.projectsImages}
                draggable="false"
              />
            </div>
          </div>

          <div className={`${styles.face} ${styles.right}`}>
            <div className={`${styles.face} ${styles.faceButton}`}>
              <button
                draggable="false"
                onMouseDown={(e) => handleClick(e, () => handleModalOpen(3))}
              >
                <RiPlayCircleFill className={styles.iconButton} />
              </button>

              <Background />

              <Image
                alt="Imagem do projeto Corso Moura Arquitetura"
                src="/images/corsoMoura.png"
                fill
                className={styles.projectsImages}
                draggable="false"
              />
            </div>
          </div>

          <div className={`${styles.face} ${styles.top}`}>
            <div className={`${styles.face} ${styles.faceButton}`}>
              <button
                draggable="false"
                onMouseDown={(e) => handleClick(e, () => handleModalOpen(2))}
              >
                <RiPlayCircleFill className={styles.iconButton} />
              </button>

              <Background />

              <Image
                alt="Imagem do projeto Repositórios GitHub"
                src="/images/gitHubRepositories.jpeg"
                fill
                className={styles.projectsImages}
                draggable="false"
              />
            </div>
          </div>

          <div className={`${styles.face} ${styles.bottom}`}>
            <div className={`${styles.face} ${styles.faceButton}`}>
              <button
                draggable="false"
                onMouseDown={(e) => handleClick(e, () => handleModalOpen(1))}
              >
                <RiPlayCircleFill className={styles.iconButton} />
              </button>

              <Background />

              <Image
                alt="Imagem do projeto Trendahora"
                src="/images/trendahora.png"
                fill
                className={styles.projectsImages}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}