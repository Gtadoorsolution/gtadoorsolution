import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'
import Link from 'next/link'
import servicesList from '../data/servicesList'
export default function Services() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title2}>OUR SERVICES MAKE YOUR LIFE COMFORTABLE</p>
            <h1 className={styles.title}>Locksmith &amp; Door Repair Services in Toronto &amp; the GTA</h1>
            <div className={styles.grid}>
                {servicesList.map(
                    (service, index) => <div key={service.image} className={styles.element}>
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
                                        priority={index < 2}
                                    />
                                </div>
                                <h2 className={styles.title4}>{service.title}</h2>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
