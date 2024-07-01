import styles from "./Skills.module.css";
import bannerFront from "/image/background-banner.png";

import { IoSchool } from "react-icons/io5" ;
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { SiUdemy } from "react-icons/si";
import { SiCisco } from "react-icons/si";
import { LiaFreeCodeCamp } from "react-icons/lia";
import { SiPython } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoSass } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  return (
    <main className={styles.skills}>
      <div className={styles.year}>

      </div>

      <div className={styles.moving_banner}>
        <img className={styles.banner} src={bannerFront} alt="" />
      </div>

      <div className={styles.school}>
        <IoSchool className={styles.icon} />
      </div>
      <div className={styles.udemy}>
        <SiUdemy className={styles.icon} />
      </div>
      <div className={styles.cisco}>
        <SiCisco className={styles.icon} />
      </div>
      <div className={styles.freeCodeCamp}>
        <LiaFreeCodeCamp className={styles.icon} />
      </div>

      <div className={styles.html}>
        <FaHtml5 className={styles.icon} />
      </div>
      <div className={styles.css}>
        <IoLogoCss3 className={styles.icon} />
      </div>
      <div className={styles.javascript}>
        <IoLogoJavascript className={styles.icon} />
      </div>

      <div className={styles.react}>
        <FaNode className={styles.icon} />
      </div>
      <div className={styles.react}>
        <SiPython className={styles.icon} />
      </div>
      <div className={styles.react}>
        <SiCsharp className={styles.icon} />
      </div>


      <div className={styles.react}>
        <FaReact className={styles.icon} />
      </div>
      <div className={styles.react}>
        <FaBootstrap className={styles.icon} />
      </div>
      <div className={styles.react}>
        <IoLogoSass className={styles.icon} />
      </div>

      <div className={styles.react}>
        <FaGitAlt className={styles.icon} />
      </div>
      <div className={styles.react}>
        <FaGithub className={styles.icon} />
      </div>
      <div className={styles.react}>
        <VscVscode className={styles.icon} />
      </div>

    </main>
  );
}
