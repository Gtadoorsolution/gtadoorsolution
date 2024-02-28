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
                    <Image
                        className={styles.logo}
                        src="/logo-inverse (103x33).webp"
                        alt="Next.js Logo"
                        width={103}
                        height={33}
                        priority
                        loading='eager'
                    />
                </div>
                <div className={styles.card}>
                    <h2>
                        Office
                    </h2>
                    <div>{contacts.adress || "..."}</div>
                    <div>{contacts.telNumber || "..."}</div>
                    <div>{contacts.email || "..."}</div>
                </div>
                <div className={styles.card}>
                    <h2>
                        Links
                    </h2>
                    <ul>
                        <li className={styles.service}><Link href="/">Home</Link></li>
                        <li className={styles.service}><Link href="#">Services</Link></li>
                        <li className={styles.service}><Link href="about">About</Link></li>
                        <li className={styles.service}><Link href="contact">Contact</Link></li>
                    </ul>
                </div>
                <div
                    className={styles.card}>
                    <h2>Newsletter</h2>
                    <p>Enter Your Emaile Adress</p>
                    <p>I agree to the Privacy Policy</p>
                </div>
            </div>
            <UnderFooter />
        </footer>
    )
}
