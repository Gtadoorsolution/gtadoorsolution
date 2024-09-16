//ServiceTemplate2.tsx
import Image from 'next/image'
import React from 'react'
import locksmithSubCategoryStyles from "../styles/locksmithSubCategory.module.css"
import locksmithStyles from "../styles/locksmithServises.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import LocksmithLogo from '../components/locksmith/LocksmithLogo'
import Breadcrumbs from './Breadcrumbs'
import Strip from './Strip'
import Layout from '../components/Layout'
import Head from 'next/head';

interface ServiceTemplateProps2 {
    title: string | undefined;
    banner: string | undefined;
    sliderImages: string[] | undefined;
    article1: string | undefined;
    article2: string | undefined;
    article3: string | undefined;
    article4: string | undefined;
    categories: {
        image: string | undefined;
        title: string | undefined;
        description: string | undefined;
    }[] | undefined;
    canonical: string;
}

const ServiceTemplate2: React.FC<ServiceTemplateProps2> = ({
    title,
    banner,
    sliderImages,
    article1,
    article2,
    article3,
    article4,
    categories,
    canonical
}) => {

    console.log(categories)

    return (
        <Layout>
            <div>
                <Head>
                    <title>{title || 'GTADOORSOLUTIONS'}</title>
                    <meta
                        name="description"
                        content={article1 || "MAKING SURE THE KEYS ARE IN YOUR HANDS"}
                    />
                    <meta property="og:image" content="/LogoBaner.svg" />
                    {/* <meta property="og:image" content={metaTagsData.find(meta => meta.page === "access-control-system")?.['og:image']} /> */}
                    <link rel="canonical" href={canonical} />
                </Head>
                <LocksmithLogo
                    title={title || 'Residential Locksmith'}
                    image={banner || '/services/locksmith/recedential/locksmithResedentialBaner.jpg'}
                />
                {/* <h2 className={locksmithStyles.headerTitle}>Residential locksmith</h2> */}
                <Breadcrumbs />
                <div style={{ paddingTop: 30 }} className={locksmithStyles.wrapper2} >
                    <div className={locksmithStyles.textWrapper} >
                        <p className={locksmithStyles.textBolt}>{article1 || "Locked out of your home? Need to rekey your lock or install a new one? Doorsolution Locksmith is here to help with all your residential locksmith needs in the Greater Toronto Area (GTA)."} </p>
                        <p className={locksmithStyles.text}>{article2 || "Our comprehensive services cover everything from repairing and replacing door locks, safes, doors, and gates. Whether you're looking for the latest in home security solutions or simply need a cylinder lock changed, we've got you covered."} </p>
                        <p className={locksmithStyles.text}>{article3 || "Rest assured, our professional locksmiths prioritize your family's safety and security. With our 24-hour emergency services, help is always available whenever you need it. "}</p>
                        <p className={locksmithStyles.textBolt}>{article4 || "Get in touch with us today for more information or assistance with your home security concerns."}</p>
                    </div>
                    <div >
                        <Swiper
                            className={locksmithStyles.sliderWrapper}
                            style={{ paddingBottom: 30 }}
                            navigation
                            modules={[Pagination, Scrollbar, A11y, Navigation]}
                            // spaceBetween={0}
                            pagination={{ clickable: true }}
                            // slidesPerView={1}
                            autoplay
                            loop={true}
                        >
                            {
                                sliderImages?.map((image, index) => <SwiperSlide key={index}>
                                    <Image
                                        src={image || "/services/locksmith/recedential/1.jpg"}
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
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                    <Strip />
                    <div className={locksmithSubCategoryStyles.wrapper}>
                        {
                            categories?.map((category, index) => (
                                category && ( // Перевірка на undefined
                                    <div key={index}>
                                        <div className={locksmithSubCategoryStyles['image-container']}>
                                            {category.image && (
                                                <Image
                                                    className={locksmithSubCategoryStyles.image}
                                                    src={category.image}
                                                    alt={category.title || ""}
                                                    width={600}
                                                    height={419}
                                                    layout="responsive"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            )}
                                        </div>
                                        <p className={locksmithSubCategoryStyles.title}>{category.title}</p>
                                        <p className={locksmithSubCategoryStyles.description}>{category.description}</p>
                                    </div>
                                )
                            ))};
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ServiceTemplate2;
