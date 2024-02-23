import React from 'react'
import styles from '../styles/footer.module.css'
import UnderFooter from './UnderFooter'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className={styles.grid}>
                {/* <div className={styles.card}>
          <Image
            className={styles.logo}
            src="/logo-inverse.webp"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div> */}
                <div className={styles.card}>
                    <h2>
                        Office
                    </h2>
                    <div>0000 Locksmith St, Ontario</div>
                    <div>AA AAA AAAA</div>
                    <div>(000) 000 0000</div>
                    <div>locksmith@gmail.com</div>
                </div>
                <div className={styles.card}>
                    <h2>
                        Links
                    </h2>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="about">About</Link></li>
                    <li><Link href="contact">Contact</Link></li>
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
