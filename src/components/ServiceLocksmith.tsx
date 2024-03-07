import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import styles from '../styles/page.module.css'
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import manufacturers from '@/data/manufacturers';
import manufacturersStyles from "../styles/manufacturers.module.css"
import locksmithStyles from "../styles/locksmithServises.module.css"
import locksmithSubCategoryStyles from "../styles/locksmithSubCategory.module.css"
import residentialLocksmith from '@/data/residentialLocksmith';
import commercialLocksmith from '@/data/commercialLocksmith';

interface ServiceLocksmithProps {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
}

const ServiceLocksmith: React.FC<ServiceLocksmithProps> = ({ title, description, image }) => {
    return (
        <Layout>
            <Head>
                <title>LOCKSMITH SERVICES</title>
                <meta
                    name="description"
                    content="Короткий опис вашої сторінки, який підсумовує її зміст."
                />
            </Head>
            <div className={styles.wrapper}>
                <div className={locksmithStyles.logo}>
                    <h1 className={locksmithStyles.logoText}>LOCKSMITH SERVICES</h1>
                </div>
                <h2 className={locksmithStyles.title2}>Residential locksmith</h2>
                <div className={locksmithStyles.wrapper}>
                    <div className={locksmithStyles.textWrapper}>
                        <p className={locksmithStyles.textBolt}>Have you locked yourself out of your house? Need a lock rekey for your new apartment, install a new door lock, or duplicate keys? Whatever your door locks and keys needs, you can count on Mr. Locks to serve you.</p>
                        <p className={locksmithStyles.text}>Mr. Locks provides a complete range of residential locksmith services and solutions for the residents of New York City. We install, repair and replace any types of door locks, safes, doors, and gates.</p>
                        <p className={locksmithStyles.text}>If you interested to get more information about the latest solutions in home security, or just need a cylinder lock changed, we can help. Our professional locksmiths can handle all your home security problems to make sure that your family will be safe and secure.</p>
                        <p className={locksmithStyles.textBolt}>Our 24 hour emergency locksmiths are available any time, day or night. Contact Us.</p>
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
                {/* <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, repellat earum atque, alias, voluptatibus voluptate laborum officiis molestiae fuga esse fugit odit aliquid quae mollitia nihil? Natus repellat nam ipsa!</p> */}
                <h3 className={locksmithStyles.title2}>Commercial locksmith</h3>
                <div className={locksmithStyles.wrapper}>
                    <div className={locksmithStyles.textWrapper}>
                        <p className={locksmithStyles.textBolt}>Mr. Locks was founded in 2003, and has since become one of New York’s leading locksmith companies. We provide commercial locksmith services to new construction projects, property management companies, real estate agencies, architects and interior designers, retail stores,  restaurants, schools, universities, medical facilities, apartment complexes, small businesses and numerous other commercial facilities around the city.</p>
                        <p className={locksmithStyles.text}>Whether you are a business owner or responsible for a retail store, warehouse, single office, entire office building, or other commercial space in New York City, Mr. Locks can provide high-quality commercial locksmith services and security solutions according to your needs and building requirements.</p>
                        <p className={locksmithStyles.textBolt}>We are licensed, bonded and have insurance coverage over $5 million.</p>
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
                    <div className={locksmithSubCategoryStyles.wrapper}>
                        {
                            commercialLocksmith.map((category, index) => <div
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
                {/* <p className={styles.description}>{description}</p> */}
                <h3 className={locksmithStyles.title2}>We work with manufacturers in our industry</h3>
                <div className={manufacturersStyles['grid-container']}>
                    {
                        manufacturers.map((image, index) => <div key={index}>
                            <div className={styles['grid-item']} >
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
        </Layout >
    )
}

export default ServiceLocksmith
