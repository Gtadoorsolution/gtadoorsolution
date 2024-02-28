import React from 'react'
import Layout from './Layout'
import Image from 'next/image'
import styles from '../styles/page.module.css'
import Head from 'next/head';

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
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.image}
                        src={image || '/default-ui.webp'}
                        alt={title || 'alt'}
                        fill
                        sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                    // className="rounded"
                    />
                </div>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <h2></h2>
                <p></p>
                <div>
                    {/* <Image
                    className={styles.image}
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                />
                <Image
                    className={styles.image}
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                /> */}
                </div>
                <p></p>
                <h3></h3>
                <p></p>
                {/* <Image
                className={styles.image}
                src={service.image}
                alt={service.title}
                fill
                sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
            /> */}
                <p></p>
            </div>
        </Layout>
    )
}

export default ServiceTemplate
