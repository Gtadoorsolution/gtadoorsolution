//ServiceTemplate.tsx
import React from 'react';
import Layout from './Layout';
import Image from 'next/image';
import serviceTemplateStyles from '../styles/serviceTemplate.module.css';
import Head from 'next/head';
import GetInTouch from './GetInTouch'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

interface MetaTags {
    page: string;
    title: string;
    description: string;
    'og:type': string;
    'og:title': string;
    'og:description': string;
    'og:image': string;
    'twitter:card': string;
}

interface ServiceTemplateProps {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
    lastImage: string | undefined;
    sliderImages: string[] | undefined;
    metaTags: MetaTags | undefined;
    article1: string | undefined;
    article2: string | undefined;
    article3: string | undefined;
    article4: string | undefined;
    article5: string | undefined;
    title2: string | undefined;
    title3: string | undefined;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
    title,
    description,
    image,
    sliderImages,
    lastImage,
    metaTags,
    article1,
    article2,
    article3,
    article4,
    article5,
    title2,
    title3,
}) => {
    return (
        <Layout>
            <Head>
                <title>{metaTags?.title || ''}</title>
                <meta
                    name="description"
                    content={metaTags?.description || ''}
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={metaTags?.title || ''} />
                <meta property="og:description" content={metaTags?.description || ''} />
                <meta property="og:image" content={image} />
                <meta name="image" content={image}></meta>
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={serviceTemplateStyles.container}>
                <div className={serviceTemplateStyles.sidebar}>
                    <div>
                        <div>
                            <Image className={serviceTemplateStyles.image}
                                src={image || '/default-ui.webp'}
                                alt={title || 'alt'}
                                width={300}
                                height={300}
                                layout="responsive"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                priority
                                loading='eager'
                            />
                        </div>
                        <h1 className={serviceTemplateStyles.title}>{title}</h1>
                    </div>
                    <div className={serviceTemplateStyles.text}>
                        <p>{article1}</p>
                    </div>
                    <h3 className={serviceTemplateStyles.title2}>Lorem ipsum</h3>
                    <p className={serviceTemplateStyles.text}>
                        {article2}
                    </p>
                    <p className={serviceTemplateStyles.text}>
                        {article3}
                    </p>
                    <Swiper
                        className={serviceTemplateStyles.slider}
                        modules={[Pagination, Scrollbar, A11y, Navigation]}
                        navigation
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1200: {
                                slidesPerView: 1,
                            },
                        }}
                        loop={true}
                    >
                        {sliderImages?.map((image, index) => <SwiperSlide key={index}>
                            <Image
                                src={image || "/default-ui.webp"}
                                alt={"image"}
                                width={600}
                                height={419}
                                layout="responsive"
                                sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                            />
                        </SwiperSlide>)}
                    </Swiper>
                    <p className={serviceTemplateStyles.text}>
                        {article4}
                    </p>
                    <h3 className={serviceTemplateStyles.title2}>Aliquam quis lobortis quam</h3>
                    <p className={serviceTemplateStyles.text}>
                        {article5}
                    </p>
                    <Image className={serviceTemplateStyles.video}
                        src={lastImage || "/default-ui.webp"}
                        alt={"image"}
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
                <div className={serviceTemplateStyles.sidebar}></div>
                <GetInTouch />
            </div>
        </Layout>
    );
};

export default ServiceTemplate;
