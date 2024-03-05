import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import styles from '../styles/page.module.css'
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'

interface ServiceTemplateProps {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ title, description, image }) => {
    return (
        <Layout>
            <Head>
                {title}
                <meta
                    name="description"
                    content="Короткий опис вашої сторінки, який підсумовує її зміст."
                />
            </Head>
            <div className={styles.wrapper}>
                {/* <div className={styles.imageWrapper}>
                    <Image
                        src={image || '/default-ui.webp'}
                        alt={title || 'alt'}
                        width={300}
                        height={300}
                        layout="responsive"
                        sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                        priority
                        loading='eager'
                    />
                </div> */}
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <h2  className={styles.title}>Lorem ipsum dolor sit</h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At explicabo sit dicta. Facere blanditiis quam eius molestiae consectetur doloremque voluptates perspiciatis veniam accusantium repellendus, iste culpa assumenda magnam maiores voluptatibus.</p>
                <div>
                    <Swiper
                        style={{ paddingBottom: 40 }}
                        modules={[Pagination, Scrollbar, A11y]}
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
                                slidesPerView: 3,
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
                </div>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat earum atque, alias, voluptatibus voluptate laborum officiis molestiae fuga esse fugit odit aliquid quae mollitia nihil? Natus repellat nam ipsa!</p>
                <h3 className={styles.title}>Lorem ipsum</h3>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas consequatur veniam non saepe quod mollitia aliquid debitis quaerat, similique animi ratione autem voluptates. Temporibus sequi consequatur recusandae minima facere!</p>
                <Image
                    // style={{paddingBottom: 100}}
                    // className={styles.image}
                    src={"/default-ui.webp"}
                    alt={"default-ui.webp"}
                    width={600}
                    height={419}
                    layout="responsive"
                    // fill
                    sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                />
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe voluptas itaque fuga accusamus sed natus, voluptate facere. Quas voluptatum facilis culpa aspernatur perferendis veritatis cumque pariatur minima excepturi vero?</p>
            </div>
        </Layout>
    )
}

export default ServiceTemplate
