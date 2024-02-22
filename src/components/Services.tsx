import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'

export default function Services() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title2}>PREMIUM QUALITY</p>
            <h1 className={styles.title}>Our Services Make Your Life Comfortable</h1>
            <div className={styles.grid}>
                <div className={styles.element}>
                    <Image
                        style={{ borderRadius: 100 }}
                        src="/image-3-840x627.jpg"
                        alt="Description of the image"
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <p>Best Sercice</p>
                    <h3>
                        Best Service
                        Interior & Exterior Doors
                    </h3>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.element}>
                    <Image style={{ borderRadius: 100 }}
                        src="/image-2-840x840.jpg"
                        alt="Description of the image"
                        width={200}
                        height={200}
                    />
                    <p>Best Sercice</p>
                    <h3>
                        Stylish & Quality Windows
                    </h3>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.element}>
                    <Image style={{ borderRadius: 100 }}
                        src="/image-1-840x560.jpg"
                        alt="Description of the image"
                        width={200}
                        height={200}
                    />
                    <p>Best Sercice</p>
                    <h3>
                        Parts & Accessories
                    </h3>
                    <p>
                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}
