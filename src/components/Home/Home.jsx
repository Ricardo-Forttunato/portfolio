import styles from "./Home.module.css";

/*--- Start Import icons ---*/
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
/*--- End Import icons ---*/

/*--- Start Import Swiper ----*/
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/*---- End Import Swiper ----*/ 

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
            <img
              height="200em"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=Ricardo-Forttunato&layout=donut&langs=count=16&show_icons=true&bg_color=00000000&theme=onedark"
            />
            <img
              height="200em"
              src="https://github-readme-stats.vercel.app/api?username=Ricardo-Forttunato&show_icons=true&bg_color=00000000&theme=onedark"
            />
          </div>
          <div className={styles.container_right}>
            <Swiper
              style={{
                '--swiper-navigation-color': '#c99526',
                '--swiper-pagination-color': '#c99526',
              }}
              modules={[ Parallax, Pagination, Navigation ]}
              speed={600}
              spaceBetween={30}
              loop={true}
              parallax={true}
              pagination={{clickable: true}}
              navigation={true}
            >
              <div slot="container-start" className={styles.parallax_bg}></div>

              <SwiperSlide>
                <h3 className={styles.card_title}>Sites Vitrine</h3>
                <img src="image/vitrineSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>Landing pages</p>
                <img src="image/landingPageSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>Portfolios</p>
                <img src="image/portfolioSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>Blogs</p>
                <img src="image/blogSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>Site de Noticias</p>
                <img src="image/noticiasSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>SPA</p>
                <img src="image/landingPageSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>PWA</p>
                <img src="image/landingPageSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>DashBoards</p>
                <img src="image/dashBoardSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
              <SwiperSlide>
                <p className={styles.card_title}>Lojas Virtuais</p>
                <img src="image/landingPageSample.png" alt="" className={styles.sample}/>
              </SwiperSlide>
            </Swiper>
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
