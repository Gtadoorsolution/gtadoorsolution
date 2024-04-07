import React from 'react'
import locksmithStyles from "../../styles/locksmithServises.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import Image from 'next/image';
import emergencyLocksmith from '@/data/emergencyLocksmith';
import locksmithSubCategoryStyles from "../../styles/locksmithSubCategory.module.css"
import LocksmithLogo from './LocksmithLogo';
import Breadcrumbs from '../Breadcrumbs';
import Strip from '../Strip';

export default function EmergencyLocksmith() {
    return (
        <div>
            <LocksmithLogo
                title={'Emergency Locksmith'}
                image='/services/locksmith/recedential/locksmithResedentialBaner.jpg'
            />
            {/* <h3>Commercial locksmith</h3> */}
            <Breadcrumbs />
            <div className={locksmithStyles.wrapper}>
                <div className={locksmithStyles.textWrapper}>
                    <p className={locksmithStyles.textBolt}>Welcome to GtaDoorSolutions – Your Trusted Lockout and Lock Installation Experts!</p>
                    <p className={locksmithStyles.textBolt}>Our services include:</p>
                    <p className={locksmithStyles.text}>Locked out of your car, office, condo, house, or store? Don't fret, because we've got you covered! At Lockout Solutions, we specialize in providing swift and reliable solutions for all your lockout needs. </p>
                    <p className={locksmithStyles.textBolt}>Whether you're stranded outside your vehicle, locked out of your office during a crucial meeting, or unable to access your home or store, our team of skilled professionals is just a call away.</p>
                    <p className={locksmithStyles.text}>We understand the urgency and inconvenience of being locked out, which is why we prioritize prompt service and efficient solutions.</p>
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
                                src={"/services/locksmith/emergency/categories/1 Car lockout.jpg"}
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
                <Strip />
                <div className={locksmithSubCategoryStyles.wrapper}>
                    {
                        emergencyLocksmith.map((category, index) => <div
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
        </div >
    )
}
