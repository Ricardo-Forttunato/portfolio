import styles from "./Home.module.css";

/*--- Start Import icons ---*/
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { useEffect, useState } from "react";

/*--- End Import icons ---*/

export default function Home() {

  return (
    <main className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>João Ricardo Fortunato</h2>
            <h3>
              Desenvolvedor Fr<div className={styles.box_animation}></div>nt-end
            </h3>
          </div>
        </div>
        <div className={styles.working}>
          <div className={styles.container_left}>
            <p>
              Sou um desenvolvedor front-end em crescimento profissional com
              experiencia em HTML5, CSS3, Javascript, bibioteca React e Frameworks como
              bootstrap e Sass e também ofereço meus serviços para profissionais
              e empresas.
            </p>
          </div>
          <div className={styles.container_right}>
            <ul className={styles.list_container}>
              <li>
                <p className={styles.card_title}>Sites Vitrine</p>
                <img src="public/image/vitrineSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>Landing pages</p>
                <img src="public/image/landingPageSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>Portfolios</p>
                <img src="public/image/portfolioSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>Blogs</p>
                <img src="public/image/blogSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>Site de Noticias</p>
                <img src="public/image/noticiasSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>SPA</p>
                <img src="public/image/landingPageSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>PWA</p>
                <img src="public/image/landingPageSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>Members WebSites</p>
                <img src="public/image/landingPageSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>DashBoards</p>
                <img src="public/image/dashBoardSample.png" alt="" className={styles.sample}/>
              </li>
              <li>
                <p className={styles.card_title}>Lojas Virtuais</p>
                <img src="public/image/landingPageSample.png" alt="" className={styles.sample}/>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.social_media}>
          <a href="https://github.com/Ricardo-Forttunato" target="_blank">
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-fortunato"
            target="_blank"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagramSquare className={styles.icon} />
          </a>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebookSquare className={styles.icon} />
          </a>
        </div>
      </div>
    </main>
  );
}
