import styles from "./TimeLine.module.css";

export default function TimeLine(props) {
  return (
    <div className={styles.skills_content}>
      <div className={styles.title_content}>
        <div className={styles.icon}>{props.icon1}</div>
        <h3 className={styles.title}>{props.title}</h3>
        <a href={props.certification} className={styles.certification} target="_blank"><div className={styles.icon}>{props.icon2}</div></a>
      </div>
      <div className={styles.icon_container}>
        <div className={styles.icon}> {props.icon3}</div>
        <div className={styles.icon}> {props.icon4}</div>
        <div className={styles.icon}> {props.icon5}</div>
        <div className={styles.icon}> {props.icon6}</div>
        <div className={styles.icon}> {props.icon7}</div>
        <div className={styles.icon}> {props.icon8}</div>
        <div className={styles.icon}> {props.icon9}</div>
      </div>
    </div>
  );
}
