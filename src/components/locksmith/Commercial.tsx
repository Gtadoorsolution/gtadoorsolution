import React from 'react'
import locksmithStyles from "../../styles/locksmithServises.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import Image from 'next/image';
import commercialLocksmith from '@/data/commercialLocksmith';
import locksmithSubCategoryStyles from "../../styles/locksmithSubCategory.module.css"
import LocksmithLogo from './LocksmithLogo';
import Breadcrumbs from '../Breadcrumbs';
import Strip from '../Strip';

export default function Commercial() {
    return (
        <div>
            <LocksmithLogo
                title={'Commercial Locksmith'}
                image='/services/locksmith/recedential/locksmithResedentialBaner.jpg'
            />
            {/* <h3>Commercial locksmith</h3> */}
            <Breadcrumbs />
            <div className={locksmithStyles.wrapper}>
                <div className={locksmithStyles.textWrapper}>
                    <p className={locksmithStyles.textBolt}>Founded in 2009, GTADoorSolutions has grown to become a leading name in the locksmith industry. We specialize in providing top-notch commercial locksmith services to a diverse range of clients, including new construction projects, property management firms, real estate agencies, architects, interior designers, retail stores, restaurants, schools, universities, medical facilities, apartment complexes, small businesses, and many other commercial establishments across the city.</p>
                    <p className={locksmithStyles.text}>Whether you’re managing a retail store, warehouse, single office, or an entire office building, GTADoorSolutions is here to deliver high-quality locksmith services and security solutions tailored to your needs.</p>
                    <p className={locksmithStyles.textBolt}>We are fully licensed, bonded, and insured with coverage exceeding $5 million, ensuring that you receive the most reliable and secure service available.</p>
                </div>
                <div className={locksmithStyles.sliderWrapper}>
                    <Swiper
                        style={{ paddingBottom: 30 }}
                        navigation
                        modules={[Pagination, Scrollbar, A11y, Navigation]}
                        // spaceBetween={1}
                        pagination={{ clickable: true }}
                        // slidesPerView={1}
                        autoplay
                        loop={true}
                    >
                        <SwiperSlide>
                            <Image
                                src={"/services/locksmith/commercial/1.jpg"}
                                alt={"default-ui.webp"}
                                width={600}
                                height={419}
                                layout="responsive"
                                sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/services/locksmith/commercial/2.jpg"}
                                alt={"default-ui.webp"}
                                width={600}
                                height={419}
                                layout="responsive"
                                sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/services/locksmith/commercial/3.jpg"}
                                alt={"default-ui.webp"}
                                width={600}
                                height={419}
                                layout="responsive"
                                sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={"/services/locksmith/commercial/4.jpg"}
                                alt={"default-ui.webp"}
                                width={600}
                                height={419}
                                layout="responsive"
                                sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <Strip />
                <div className={locksmithSubCategoryStyles.wrapper}>
                    {
                        commercialLocksmith.map((category, index) => <div
                            key={index}
                        >
                            <div className={locksmithSubCategoryStyles['image-container']}>
                                <Image
                                    className={locksmithSubCategoryStyles.image}
                                    src={category.image || "/default-ui.webp"}
                                    alt={category.title}
                                    width={600}
                                    height={419}
                                    layout="responsive"
                                    sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                                />
                            </div>
                            <p className={locksmithSubCategoryStyles.title}>{category.title}</p>
                            <p className={locksmithSubCategoryStyles.description}>{category.description}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
