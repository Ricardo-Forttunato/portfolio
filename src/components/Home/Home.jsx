import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.home}>
                <h1 className={styles.title}>João Ricardo Forttunato</h1>
                <h3>Front-end Developer</h3>
            <div className={styles.content}></div>
            <div className={styles.animation}></div>
        </div>
        
    );
}