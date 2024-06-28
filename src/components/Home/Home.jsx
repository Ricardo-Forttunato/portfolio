import styles from "./Home.module.css";
import html5 from "/html5-original.svg";
import css3 from "/css3-original.svg";
import js from "/javascript-plain.svg";
import react from "/react-original.svg";

export default function Home() {

  const programingLanguage = [
    {
      id: 1,
      name: "HTML",
      icon: html5,
    },
    {
      id: 2,
      name: "CSS",
      icon: css3,
    },
    {
      id: 3,
      name: "JavaScript",
      icon: js,
    },
    {
      id: 4,
      name: "React",
      icon: react,
    },
  ];

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
