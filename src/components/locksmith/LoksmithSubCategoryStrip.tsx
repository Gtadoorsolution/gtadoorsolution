import React from 'react'
import styles from '../../styles/locksmith/strip.module.css'
import Link from 'next/link'

export default function LoksmithSubCategoryStrip() {
    return (
        <div className={styles.strip}>
            <p className={styles.text}>Get More Information And Prices From Our Experts</p>
            <div className={styles.buttonsWrapper}>
                <Link href='/contact'>
                    <button className={styles.button}>Contact Us</button>
                </Link>
                <button className={styles.button}>
                    <a href="tel:0000000000">000-000-0000</a>
                </button>
            </div>
        </div>
    )
}
