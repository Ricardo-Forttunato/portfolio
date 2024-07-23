import styles from "./Skills.module.css";
import TimeLine from "../TimeLine/TimeLine";
import { content2022, content2023, content2024 } from "../../TimeLineContent";

export default function Skills() { 

  function handleContent(content) {
    return (
      <TimeLine 
        key={content.id}
        title={content.title}
        icon1={content.icon1}
        icon2={content.icon2}
        icon3={content.icon3}
        icon4={content.icon4}
        icon5={content.icon5}
        icon6={content.icon6}
        icon7={content.icon7}
        icon8={content.icon8}
        icon9={content.icon9}
        certification={content.certificationUrl}
      />
    )
  }

  return (
    <main className={styles.skills}>

      <div className={styles.container}>
        <div className={styles.skills_container}>
          <div className={styles.year_container}>
            <div className={styles.year_title}>2022</div>
          </div>
          <div className={styles.line_container}>
            <div className={styles.line_left_container}>
              <div className={styles.left_line}></div>
            </div>
            <div className={styles.polygon}></div>
            <div className={styles.line_right_container}>
              <div className={styles.right_line}></div>
            </div>
          </div>
          <div className={styles.content}>
            {content2022.map(handleContent)}
          </div>
        </div>
        <div className={styles.skills_container}>
          <div className={styles.content_reverse}>
            {content2023.map(handleContent)}
          </div>
          <div className={styles.line_container_reverse}>
            <div className={`${styles.line_left_container_reverse} ${styles.eixo_colorLight}`}>
              <div className={`${styles.left_line_reverse} ${styles.line_colorLight}`}></div>
            </div>
            <div className={styles.polygon_reverse}></div>
            <div className={`${styles.line_right_container_reverse} ${styles.eixo_colorLight}`}>
              <div className={`${styles.right_line_reverse} ${styles.line_colorLight}`}></div>
            </div>
          </div>
          <div className={styles.year_container_reverse}>
            <div className={`${styles.year_title_reverse} ${styles.title_colorLight}`}>2023</div>
          </div>
        </div>
        <div className={styles.skills_container}>
          <div className={styles.year_container}>
            <div className={`${styles.year_title} ${styles.title_colorDark}`}>2024</div>
          </div>
          <div className={styles.line_container}>
            <div className={`${styles.line_left_container} ${styles.eixo_colorDark}`}>
              <div className={`${styles.left_line} ${styles.line_colorDark}`}></div>
            </div>
            <div className={styles.polygon_colorDark}></div>
            <div className={`${styles.line_right_container} ${styles.eixo_colorDark}`} >
              <div className={`${styles.right_line} ${styles.line_colorDark}`}></div>
            </div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.content}>
            {content2024.map(handleContent)}
          </div>
        </div>
      </div>
      <h1 className={styles.title}>Skills Learning Timeline</h1>
      
    </main>
  );
}
