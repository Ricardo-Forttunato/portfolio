import styles from "./Portfolio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Parallax, Pagination, Navigation } from "swiper/modules";

import aboutPage from "/image/personal-webpage-about.png"
import marceloPage from "/image/marcelo-web-page.png"

export default function Portfolio() {

  return (
	<main className={styles.portfolio}>
		<Swiper
			style={{
				'--swiper-navigation-color': '#0e222b',
				'--swiper-pagination-color': '#0e222b',
			}}
			speed={600}
			spaceBetween={30}
			loop={true}
			parallax={true}
			pagination={{clickable: true}}
			navigation={true}
			modules={[ Parallax, Pagination, Navigation ]}
			className={styles.mySwiper}
		>
			<div slot="container-start" className={styles.parallax_bg}></div>

			<SwiperSlide style={{ 
				backgroundImage: `url(${aboutPage})`, 
				backgroundPosition: 'center top',
				backgroundSize: 'cover'
			}} 
				className={styles.swiper_slide}>
				<div className={styles.card}>
					<div className={styles.title} data-swiper-parralax='-300'>Slide 1</div>
					<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
					<div className={styles.text} data-swiper-parralax='-100'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide style={{ 
				backgroundImage: `url(${marceloPage})`, 
				backgroundPosition: 'center top',
				backgroundSize: 'cover'
			}} className={styles.swiper_slide}>
				<div className={styles.card}>
					<div className={styles.title} data-swiper-parralax='-300'>Slide 2</div>
					<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
					<div className={styles.text} data-swiper-parralax='-100'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide style={{ backgroundImage: `url()` }} className={styles.swiper_slide}>
				<div className={styles.card}>
					<div className={styles.title} data-swiper-parralax='-300'>Slide 3</div>
					<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
					<div className={styles.text} data-swiper-parralax='-100'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
					</div>
				</div>
			</SwiperSlide>

		</Swiper>
	</main>)
}
