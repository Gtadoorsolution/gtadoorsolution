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
                        <svg style={{ display: "block", margin: 0, padding: 0, border: 0 }} width="100" height="60" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                            <text x="50%" y="65%" fontFamily="Verdana" fontSize="120" fill="white" textAnchor="middle" alignmentBaseline="middle">DS</text>
                        </svg>
                    </Link>
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
