import React from 'react';
import styles from '../styles/strip.module.css';
import Link from 'next/link';
import contacts from '@/data/contacts';
import { useRouter } from 'next/router';

export default function Strip() {
    const router = useRouter();

    return (
        <div className={styles.strip}>
            <p className={styles.text}>Get More Information And Prices From Our Experts</p>
            <div className={styles.buttonsWrapper}>
                {router.pathname !== '/contact' && (
                    <Link href='/contact'>
                        <button className={styles.button}>Contact Us</button>
                    </Link>
                )}
                {router.pathname === '/contact' && (
                    <button className={styles.button}>
                        <a href={`mailto:${contacts.email || ""}`}>{contacts.email || ""}</a>
                    </button>
                )}
                <button className={styles.button}>
                    <a href={`tel:${contacts.telNumber}`}>{contacts.telNumberView}</a>
                </button>
            </div>
        </div>
    );
}
