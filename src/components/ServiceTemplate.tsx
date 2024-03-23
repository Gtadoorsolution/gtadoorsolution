//ServiceTemplate.tsx
import React, { useState } from 'react';
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
    metaTags: MetaTags | undefined;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ title, description, image, metaTags }) => {
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
                        <p>{description}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat earum atque, alias, voluptatibus voluptate laborum officiis molestiae fuga esse fugit odit aliquid quae mollitia nihil? Natus repellat nam ipsa!</p></div>
                    <h3 className={serviceTemplateStyles.title2}>Lorem ipsum</h3>
                    <p className={serviceTemplateStyles.text}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas consequatur veniam non saepe quod mollitia aliquid debitis quaerat, similique animi ratione autem voluptates. Temporibus sequi consequatur recusandae minima facere!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <p className={serviceTemplateStyles.text}>Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in viverra erat bibendum. Cras turpis urna, vulputate at est vitae, posuere lobortis erat.</p>
                    <Swiper
                        className={serviceTemplateStyles.slider}
                        modules={[Pagination, Scrollbar, A11y, Navigation]}
                        navigation
                        spaceBetween={0}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <Image
                                src={"/default-ui.webp"}
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
                                src={"/default-ui.webp"}
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
                                src={"/default-ui.webp"}
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
                                src={"/default-ui.webp"}
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
                    <p className={serviceTemplateStyles.text}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas consequatur veniam non saepe quod mollitia aliquid debitis quaerat, similique animi ratione autem voluptates. Temporibus sequi consequatur recusandae minima facere!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    <h3 className={serviceTemplateStyles.title2}>Aliquam quis lobortis quam</h3>
                    <p className={serviceTemplateStyles.text}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas consequatur veniam non saepe quod mollitia aliquid debitis quaerat, similique animi ratione autem voluptates. Temporibus sequi consequatur recusandae minima facere!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas consequatur veniam non saepe quod mollitia aliquid debitis quaerat, similique animi ratione autem voluptates. Temporibus sequi consequatur recusandae minima facere!
                    </p>
                    <Image className={serviceTemplateStyles.video}
                        src={"/default-ui.webp"}
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
                    <p className={serviceTemplateStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe voluptas itaque fuga accusamus sed natus, voluptate facere. Quas voluptatum facilis culpa aspernatur perferendis veritatis cumque pariatur minima excepturi vero?</p>
                </div>
                <div className={serviceTemplateStyles.sidebar}></div>
                <GetInTouch />
            </div>
        </Layout>
    );
};

export default ServiceTemplate;
