import React from 'react'
import styles from '../styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.grid}>
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
                <p>Home</p>
                <p>Services</p>
                <p>About Us</p>
                <p>Contact</p>
            </div>
            <div
                className={styles.card}>
                <h2>Newsletter</h2>
                <p>Enter Your Emaile Adress</p>
                <p>I agree to the Privacy Policy</p>
            </div>
        </footer>
    )
}
