import residentialLocksmith from '@/data/residentialLocksmith'
import Image from 'next/image'
import React from 'react'
import locksmithSubCategoryStyles from "../../styles/locksmithSubCategory.module.css"
import locksmithStyles from "../../styles/locksmithServises.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import LocksmithLogo from './LocksmithLogo'
import Breadcrumbs from '../Breadcrumbs'
import LoksmithSubCategoryStrip from './LoksmithSubCategoryStrip'

export default function Resedential() {
    return (
        <div>
            <LocksmithLogo
                title={'Residential locksmith'}
                image='/services/locksmith/recedential/locksmithResedentialBaner.jpg'
            />
            {/* <h2 className={locksmithStyles.headerTitle}>Residential locksmith</h2> */}
            <Breadcrumbs />
            <div className={locksmithStyles.wrapper}>
                <div className={locksmithStyles.textWrapper}>
                    <p className={locksmithStyles.textBolt}>Locked out of your home? Need to rekey your lock or install a new one? Doorsolution Locksmith is here to help with all your residential locksmith needs in the Greater Toronto Area (GTA). </p>
                    <p className={locksmithStyles.text}>Our comprehensive services cover everything from repairing and replacing door locks, safes, doors, and gates. Whether you're looking for the latest in home security solutions or simply need a cylinder lock changed, we've got you covered. </p>
                    <p className={locksmithStyles.text}>Rest assured, our professional locksmiths prioritize your family's safety and security. With our 24-hour emergency services, help is always available whenever you need it. </p>
                    <p className={locksmithStyles.textBolt}>Get in touch with us today for more information or assistance with your home security concerns.</p>
                </div>
                <div className={locksmithStyles.sliderWrapper}>
                    <Swiper
                        style={{ paddingBottom: 30 }}
                        navigation
                        modules={[Pagination, Scrollbar, A11y, Navigation]}
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        loop={true}
                    >
                        <SwiperSlide>
                            <Image
                                src={"/services/locksmith/recedential/1.jpg"}
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
                                src={"/services/locksmith/recedential/2.jpg"}
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
                                src={"/services/locksmith/recedential/3.jpg"}
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
                <LoksmithSubCategoryStrip />
                <div className={locksmithSubCategoryStyles.wrapper}>
                    {
                        residentialLocksmith.map((category, index) => <div
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
