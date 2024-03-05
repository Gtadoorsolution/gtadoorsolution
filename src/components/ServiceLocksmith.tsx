import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import styles from '../styles/page.module.css'
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import manufacturers from '@/data/manufacturers';
import manufacturersStyles from "../styles/manufacturers.module.css"

interface ServiceLocksmithProps {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
}

const ServiceLocksmith: React.FC<ServiceLocksmithProps> = ({ title, description, image }) => {
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
                <h1 className={styles.title}>{title}</h1>
                <div>
                    <p style={{}}> - Access control systems –  installation, change, service and repair</p>
                    <p style={{}}> - Lock installation, repair and re-keying</p>
                    <p style={{}}> - High security locks</p>
                    <p style={{}}> - Master keying solutions</p>
                    <p style={{}}> - Locking devices for a range of different applications</p>
                    <p style={{}}> - Lockout services (any type of doors, cars, desks, safes, mailboxes)</p>
                    <p style={{}}> - Access control including keyless entry systems</p>
                    <p style={{}}> - Locks change to all types doors and window</p>
                    <p style={{}}> - Quality  locksmith service</p>
                    <p style={{}}> - And more</p>
                </div>
                <h2 className={styles.title2}>Residential locksmith</h2>
                <p className={styles.description}>
                    Encountering lock troubles inyour home? Our Residential Locksmith service promptly resolves various door-related issues without causing any harm by forcefully opening them. Whether you need lock fixing, tuning, or substitution, our skilled crew arrives within 15 minutes, guaranteeing your home's safety and operational effectiveness through effective and proficient remedies.</p>
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
                {/* <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat earum atque, alias, voluptatibus voluptate laborum officiis molestiae fuga esse fugit odit aliquid quae mollitia nihil? Natus repellat nam ipsa!</p> */}
                <h3 className={styles.title2}>Commercial locksmith</h3>
                <p className={styles.description}>
                    GTAdoorsolution Locksmith for Toronto and GTA offers Commercial Locksmith Services throughout the Toronto and GTA areas. We provide a diverse array of professional locksmith services, including 24-hour emergency commercial services across the region. Our dependable team of specialists from GTADoorSolution Locksmith is equipped to assist you with any commercial lock repair and installation needs.</p>
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
                <p className={styles.description}>{description}</p>
                <h3 className={styles.title2}>We work with manufacturers in our industry</h3>
                <div className={manufacturersStyles['grid-container']}>
                    {
                        manufacturers.map((image, index) => <div>
                            <div className={styles['grid-item']} key={index}>
                                <Image
                                    className={manufacturersStyles['image']}
                                    src={image.src}
                                    alt={image.alt}
                                    width={324}
                                    height={156}
                                    // fill
                                    sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                                    layout="responsive"
                                    priority={true}
                                    placeholder="blur"
                                    blurDataURL="/default-ui.webp"
                                    loading='eager'
                                />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </Layout>
    )
}

export default ServiceLocksmith
