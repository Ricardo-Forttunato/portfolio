import styles from "./Skills.module.css";
import bannerFront from "/image/background-banner.png";

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.div__move}>
        <img className={styles.banner} src={bannerFront} alt="" />
      </div>
      <h3>Skills</h3>
    </div>
  );
}
