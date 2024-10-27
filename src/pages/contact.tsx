import Layout from '@/components/Layout'
import React from 'react'
import contacts from '../data/contacts'
import styles from '../styles/contact.module.css'
import Head from 'next/head';
import Image from 'next/image';
import GetInTouch from '@/components/GetInTouch';
import Strip from '@/components/Strip';

const ContactPage = () => {
    return (
        <Layout>
            <Head>
                <meta name="robots" content="noindex"/>
                <title>CONTACT US</title>
                <meta name="description" content="Have Questions? Get in Touch!" />
            </Head>
            <div className={styles.wrapper}>
                <p className={styles.title}>CONTACT US</p>
                <h1 className={styles.title}>Have Questions? Get in Touch!</h1>
                <div className={styles.description}>
                    <a href={`tel:${contacts.telNumber}`} style={{ display: "flex" }}>
                        <svg style={{ marginRight: 10 }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" stroke="#a1a1a1" strokeWidth="2" fill="none" />
                        </svg>
                        <div>{contacts.telNumber || ""}</div>
                    </a>
                    <div style={{ display: "flex" }}>
                        <svg style={{ marginRight: 5 }} width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                            <text x="0%" y="65%" font-family="Arial" font-size="25" fill="#a1a1a1">@</text>
                        </svg>
                        <a href={`mailto:${contacts.email || ""}`}>{contacts.email || ""}</a>
                    </div>
                </div>
                <GetInTouch sticky={true} />
                <Image className={styles.map} src="/Service area1.webp" alt="map" width={1024} height={453} />
                <Strip />
            </div>
        </Layout >
    )
}

export default ContactPage;
