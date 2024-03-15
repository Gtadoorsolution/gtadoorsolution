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

export default function EmergencyLocksmith() {
    return (
        <div>
            <LocksmithLogo title={"Emergency Locksmith"} />
            {/* <h3>Commercial locksmith</h3> */}
            <Breadcrumbs />
            <div className={locksmithStyles.wrapper}>
                <div className={locksmithStyles.textWrapper}>
                    <p className={locksmithStyles.textBolt}>Mr. Locks was founded in 2003, and has since become one of New York’s leading locksmith companies. We provide commercial locksmith services to new construction projects, property management companies, real estate agencies, architects and interior designers, retail stores,  restaurants, schools, universities, medical facilities, apartment complexes, small businesses and numerous other commercial facilities around the city.</p>
                    <p className={locksmithStyles.text}>Whether you are a business owner or responsible for a retail store, warehouse, single office, entire office building, or other commercial space in New York City, Mr. Locks can provide high-quality commercial locksmith services and security solutions according to your needs and building requirements.</p>
                    <p className={locksmithStyles.textBolt}>We are licensed, bonded and have insurance coverage over $5 million.</p>
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
                                src={"/services/locksmith/commercial/1.jpeg"}
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
                    </Swiper>
                </div>
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
