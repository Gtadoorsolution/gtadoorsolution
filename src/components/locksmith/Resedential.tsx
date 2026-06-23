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
import Strip from '../Strip'
import Head from 'next/head'

export default function Resedential() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Residential Locksmith",
        "description": "Locked out of your home? Need to rekey your lock or install a new one? GTA Door Solutions handles all your residential locksmith needs in the Greater Toronto Area.",
        "provider": { "@type": "LocalBusiness", "name": "GTA Door Solutions", "url": "https://gtadoorsolutions.ca", "telephone": "+14372142768", "priceRange": "$$", "image": "https://gtadoorsolutions.ca/open-graph-logo.jpg" },
        "areaServed": "Greater Toronto Area"
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gtadoorsolutions.ca" },
            { "@type": "ListItem", "position": 2, "name": "Locksmith Services", "item": "https://gtadoorsolutions.ca/services/locksmith-services" },
            { "@type": "ListItem", "position": 3, "name": "Residential Locksmith", "item": "https://gtadoorsolutions.ca/services/locksmith-services/residential" }
        ]
    };
    return (
        <div>
            <Head>
                <title>{'Residential Locksmith'}</title>
                <meta
                    name="description"
                    content={"Locked out of your home? Need to rekey your lock or install a new one? Doorsolution Locksmith is here to help with all your residential locksmith needs in the Greater Toronto Area (GTA)."}
                />
                <meta property="og:image" content="/LogoBaner.svg" />
                <link rel="canonical" href="https://gtadoorsolutions.ca/services/locksmith-services/residential" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            </Head>
            <LocksmithLogo
                title={'Residential Locksmith'}
                image='/services/locksmith/recedential/locksmithResedentialBaner.jpg'
            />
            {/* <h2 className={locksmithStyles.headerTitle}>Residential locksmith</h2> */}
            <Breadcrumbs />
            <div className={locksmithStyles.wrapper}>
                <section className={locksmithStyles.textWrapper}>
                    <p className={locksmithStyles.textBolt}>Locked out of your home? Need to rekey your lock or install a new one? Doorsolution Locksmith is here to help with all your residential locksmith needs in the Greater Toronto Area (GTA). </p>
                    <p className={locksmithStyles.text}>Our comprehensive services cover everything from repairing and replacing door locks, safes, doors, and gates. Whether you're looking for the latest in home security solutions or simply need a cylinder lock changed, we've got you covered. </p>
                    <p className={locksmithStyles.text}>Rest assured, our professional locksmiths prioritize your family's safety and security. With our 24-hour emergency services, help is always available whenever you need it. </p>
                    <p className={locksmithStyles.textBolt}>Get in touch with us today for more information or assistance with your home security concerns.</p>
                </section>
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
                <Strip />
                <div className={locksmithSubCategoryStyles.wrapper}>
                    {
                        residentialLocksmith.map((category, index) => <article
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
                            <h3 className={locksmithSubCategoryStyles.title}>{category.title}</h3>
                            <p className={locksmithSubCategoryStyles.description}>{category.description}</p>
                        </article>)
                    }
                </div>
            </div>
        </div>
    )
}
