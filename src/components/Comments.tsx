import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import Comment from './Comment';
import styles from '../styles/comments.module.css'
import comments from '@/data/coments';

export default function Comments() {
    return (
        <div className={styles.wrapper}>
            <div>
                <p className={styles.aboutUs}>PEOPLE SAY ABOUT US</p>
                <p className={styles.clientsTestimonials}>Clients' Testimonials</p>
            </div>
            <Swiper
                style={{ paddingBottom: 40 }}
                navigation
                modules={[Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={0}
                pagination={{ clickable: true }}
                breakpoints={{
                    500: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                loop={true}
            >
                {comments.map((comment, index) => (
                    <SwiperSlide key={index}>
                        <Comment comment={comment} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
