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
                        <img src="/logoShort.svg" height={70} alt="Logo image GTADOORSOLUTIONS." />
                    </Link>
                </div>
                <div className={styles.card}>
                    <h2>
                        Office
                    </h2>
                    <a href={`tel:${contacts.telNumber}`} style={{ display: "flex" }}>
                        <svg style={{ marginRight: 10 }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" stroke="#a1a1a1" strokeWidth="2" fill="none" />
                        </svg>
                        <div>{contacts.telNumberView || ""}</div>
                    </a>
                    <div style={{ display: "flex" }}>
                        <svg style={{ marginRight: 5 }} width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                            <text x="0%" y="65%" font-family="Arial" font-size="25" fill="#a1a1a1">@</text>
                        </svg>
                        <a href={`mailto:${contacts.email || ""}`}>{contacts.email || ""}</a>
                    </div>
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
