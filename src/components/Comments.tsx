import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
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
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                // slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
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
