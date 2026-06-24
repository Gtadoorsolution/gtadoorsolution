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
import Head from 'next/head';
import contacts from '@/data/contacts';
import metaTagsData from '@/data/metaTags';

export default function Commercial() {
    const meta = metaTagsData.find(m => m.page === "commercial");
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Locksmith",
        "description": "Founded in 2009, GTA Door Solutions provides top-notch commercial locksmith services to property management firms, real estate agencies, retail stores, schools, medical facilities, and many other commercial establishments across the GTA.",
        "provider": { "@type": "LocalBusiness", "name": "GTA Door Solutions", "url": "https://gtadoorsolutions.ca", "telephone": contacts.telE164, "priceRange": "$$", "image": "https://gtadoorsolutions.ca/open-graph-logo.jpg" },
        "areaServed": "Greater Toronto Area"
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gtadoorsolutions.ca" },
            { "@type": "ListItem", "position": 2, "name": "Locksmith Services", "item": "https://gtadoorsolutions.ca/services/locksmith-services" },
            { "@type": "ListItem", "position": 3, "name": "Commercial Locksmith", "item": "https://gtadoorsolutions.ca/services/locksmith-services/commercial" }
        ]
    };
    return (
        <div>
            <Head>
                <title>{meta?.title}</title>
                <meta name="description" content={meta?.description} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GTA Door Solutions" />
                <meta property="og:locale" content="en_CA" />
                <meta property="og:title" content={meta?.['og:title']} />
                <meta property="og:description" content={meta?.['og:description']} />
                <meta property="og:image" content="https://gtadoorsolutions.ca/open-graph-logo.jpg" />
                <meta property="og:url" content={meta?.canonical} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={meta?.['og:title']} />
                <meta name="twitter:description" content={meta?.['og:description']} />
                <meta name="twitter:image" content="https://gtadoorsolutions.ca/open-graph-logo.jpg" />
                <link rel="canonical" href={meta?.canonical} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            </Head>
            <LocksmithLogo
                title={'Commercial Locksmith'}
                image='/services/locksmith/recedential/locksmithResedentialBaner.jpg'
            />
            {/* <h3>Commercial locksmith</h3> */}
            <Breadcrumbs />
            <div className={locksmithStyles.wrapper}>
                <section className={locksmithStyles.textWrapper}>
                    <p className={locksmithStyles.textBolt}>Founded in 2009, GTADoorSolutions has grown to become a leading name in the locksmith industry. We specialize in providing top-notch commercial locksmith services to a diverse range of clients, including new construction projects, property management firms, real estate agencies, architects, interior designers, retail stores, restaurants, schools, universities, medical facilities, apartment complexes, small businesses, and many other commercial establishments across the city.</p>
                    <p className={locksmithStyles.text}>Whether you’re managing a retail store, warehouse, single office, or an entire office building, GTADoorSolutions is here to deliver high-quality locksmith services and security solutions tailored to your needs.</p>
                    <p className={locksmithStyles.textBolt}>We are fully licensed, bonded, and insured with coverage exceeding $5 million, ensuring that you receive the most reliable and secure service available.</p>
                </section>
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
                                alt={"Commercial locksmith service in Toronto GTA"}
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
                                alt={"Commercial locksmith service in Toronto GTA"}
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
                                alt={"Commercial locksmith service in Toronto GTA"}
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
                                alt={"Commercial locksmith service in Toronto GTA"}
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
                        commercialLocksmith.map((category, index) => <article
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
