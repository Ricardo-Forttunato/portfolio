import styles from "./Portfolio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Parallax, Pagination, Navigation } from "swiper/modules";

import portfolio from "/image/portfolio.png"
import candidatoPage from "/image/candidatoSPA.png"
import aluraFlix from "/image/aluraFlix.png"
import aluraGeek from "/image/aluraGeek.png"
import cineTag from "/image/cineTag.png"
import organo from "/image/organo.png"
import xyz from "/image/xyz.png"


export default function Portfolio() {

	return (
		<main className={styles.portfolio}>
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
				className={styles.mySwiper}
			>
				<div slot="container-start" className={styles.parallax_bg}></div>

				<SwiperSlide style={{ 
					backgroundImage: `url(${portfolio})`, 
					backgroundPosition: 'center top',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%'
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
					backgroundImage: `url(${candidatoPage})`, 
					backgroundPosition: 'center top',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 100%'
				}} className={styles.swiper_slide}>
					<div className={styles.card}>
						<div className={styles.title} data-swiper-parralax='-300'>Slide 2</div>
						<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
						<div className={styles.text} data-swiper-parralax='-100'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide 
					style={{ 
						backgroundImage: `url(${aluraFlix})`,
						backgroundPosition: 'center top',
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%'
					}} 
					className={styles.swiper_slide}>
					<div className={styles.card}>
						<div className={styles.title} data-swiper-parralax='-300'>Slide 3</div>
						<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
						<div className={styles.text} data-swiper-parralax='-100'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide 
					style={{ 
						backgroundImage: `url(${cineTag})`,
						backgroundPosition: 'center top',
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%'
					}} 
					className={styles.swiper_slide}>
					<div className={styles.card}>
						<div className={styles.title} data-swiper-parralax='-300'>Slide 4</div>
						<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
						<div className={styles.text} data-swiper-parralax='-100'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide 
					style={{ 
						backgroundImage: `url(${aluraGeek})`,
						backgroundPosition: 'center top',
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%'
					}} 
					className={styles.swiper_slide}>
					<div className={styles.card}>
						<div className={styles.title} data-swiper-parralax='-300'>Slide 5</div>
						<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
						<div className={styles.text} data-swiper-parralax='-100'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide 
					style={{ 
						backgroundImage: `url(${organo})`,
						backgroundPosition: 'center top',
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%'
					}} 
					className={styles.swiper_slide}>
					<div className={styles.card}>
						<div className={styles.title} data-swiper-parralax='-300'>Slide 6</div>
						<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
						<div className={styles.text} data-swiper-parralax='-100'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide 
					style={{ 
						backgroundImage: `url(${xyz})`,
						backgroundPosition: 'center top',
						backgroundRepeat: 'no-repeat',
						backgroundSize: '100% 100%'
					}} 
					className={styles.swiper_slide}>
					<div className={styles.card}>
						<div className={styles.title} data-swiper-parralax='-300'>Slide 7</div>
						<div className={styles.sutitle} data-swiper-parralax='-200'>Subtitle</div>
						<div className={styles.text} data-swiper-parralax='-100'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
						</div>
					</div>
				</SwiperSlide>							
			</Swiper>
		</main>
	)
}
