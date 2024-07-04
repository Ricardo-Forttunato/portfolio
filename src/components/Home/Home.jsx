import styles from "./Home.module.css";

export default function Home() {

  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <div className={styles.subtitle}>
          <div className={styles.frontEnd}></div>
          <h3> João Ricardo Fortunato</h3>
        </div>
      </div>
      <div className={styles.animation}></div>
    </main>
  );
}
