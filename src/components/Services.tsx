import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'
import Link from 'next/link'
import servicesList from '../data/servicesList'
import Head from 'next/head';

export default function Services() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>Locksmith</title>
                <meta
                    name="description"
                    content="description"
                />
            </Head>
            <p className={styles.title2}>PREMIUM QUALITY</p>
            <h1 className={styles.title}>Our Services Make Your Life Comfortable</h1>
            <div className={styles.grid}>
                {servicesList.map(
                    service => <div key={service.image} className={styles.element}>
                        <Link href={service.link}>
                            <div style={{ paddingBottom: 30, paddingTop: 30 }}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        className={styles.image}
                                        src={service.image}
                                        alt={service.title}
                                        // fill
                                        width={"250"}
                                        height={"250"}
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
                                <p className={styles.title3}>Best Sercice</p>
                                <h2 className={styles.title4}>{service.title}</h2>
                                <p className={styles.description}>{service.description}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
