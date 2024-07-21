import React from 'react'
import styles from '../styles/footer.module.css'
import UnderFooter from './UnderFooter'
import Link from 'next/link'
import Image from 'next/image'
import contacts from '@/data/contacts'

export default function Footer() {
    return (
        <footer>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <Link href="/" aria-label="Home">
                        <img src="/logoShort.svg" height={70} />
                    </Link>
                </div>
                <div className={styles.card}>
                    <h2>
                        Office
                    </h2>
                    <div>{contacts.telNumber || "..."}</div>
                    <div>{contacts.email || "..."}</div>
                </div>
                <div className={styles.card}>
                    <h2>
                        Links
                    </h2>
                    <ul>
                        <li className={styles.service}><Link href="/">Home</Link></li>
                        <li className={styles.service}><Link href="/about">About</Link></li>
                        <li className={styles.service}><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div
                    className={styles.card}>
                    <h2>
                        Locksmith Services
                    </h2>
                    <ul>
                        <li className={styles.service}><Link href="/services/locksmith-services/residential">Residential</Link></li>
                        <li className={styles.service}><Link href="/services/locksmith-services/commercial">Commercial</Link></li>
                        <li className={styles.service}><Link href="/services/locksmith-services/commercial">Emergency</Link></li>
                    </ul>
                </div>
            </div>
            <UnderFooter />
        </footer>
    )
}
