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
import Head from 'next/head';
import contacts from '@/data/contacts';
import metaTagsData from '@/data/metaTags';

export default function EmergencyLocksmith() {
    const meta = metaTagsData.find(m => m.page === "emergency");
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Emergency Locksmith",
        "description": "Locked out of your car, office, condo, house, or store? GTA Door Solutions provides swift and reliable solutions for all your lockout needs.",
        "provider": { "@type": "LocalBusiness", "name": "GTA Door Solutions", "url": "https://gtadoorsolutions.ca", "telephone": contacts.telE164, "priceRange": "$$", "image": "https://gtadoorsolutions.ca/open-graph-logo.jpg" },
        "areaServed": "Greater Toronto Area"
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gtadoorsolutions.ca" },
            { "@type": "ListItem", "position": 2, "name": "Locksmith Services", "item": "https://gtadoorsolutions.ca/services/locksmith-services" },
            { "@type": "ListItem", "position": 3, "name": "Emergency Locksmith", "item": "https://gtadoorsolutions.ca/services/locksmith-services/emergency" }
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
                title={'Emergency Locksmith'}
                image='/services/locksmith/recedential/locksmithResedentialBaner.jpg'
            />
            {/* <h3>Commercial locksmith</h3> */}
            <Breadcrumbs />
            <div className={locksmithStyles.wrapper}>
                <section className={locksmithStyles.textWrapper}>
                    <p className={locksmithStyles.textBolt}>Welcome to GtaDoorSolutions – Your Trusted Lockout and Lock Installation Experts!</p>
                    <p className={locksmithStyles.textBolt}>Our services include:</p>
                    <p className={locksmithStyles.text}>Locked out of your car, office, condo, house, or store? Don't fret, because we've got you covered! GTA Door Solutions, we specialize in providing swift and reliable solutions for all your lockout needs. </p>
                    <p className={locksmithStyles.textBolt}>Whether you're stranded outside your vehicle, locked out of your office during a crucial meeting, or unable to access your home or store, our team of skilled professionals is just a call away.</p>
                    <p className={locksmithStyles.text}>We understand the urgency and inconvenience of being locked out, which is why we prioritize prompt service and efficient solutions.</p>
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
                                src={"/services/locksmith/emergency/categories/1 Car lockout.jpg"}
                                alt={"Emergency locksmith service in Toronto GTA"}
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
                                alt={"Emergency locksmith service in Toronto GTA"}
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
                                alt={"Emergency locksmith service in Toronto GTA"}
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
                        emergencyLocksmith.map((category, index) => <article
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
        </div >
    )
}
