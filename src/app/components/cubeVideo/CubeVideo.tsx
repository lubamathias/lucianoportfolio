import styles from './page.module.scss'

export function CubeVideo(){
    return(
        <video
          src="/videos/galaxy.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
          />
    )
}