import Layout from '@/components/Layout'
import React from 'react'
import contacts from '../data/contacts'
import styles from '../styles/contact.module.css'
import Head from 'next/head';
import Image from 'next/image';

const ContactPage = () => {
    return (
        <Layout>
            <Head>
                <title>CONTACT US</title>
                <meta name="description" content="Have Questions? Get in Touch!" />
            </Head>
            <div className={styles.wrapper}>
                <p className={styles.title}>CONTACT US</p>
                <h1 className={styles.title}>Have Questions? Get in Touch!</h1>
                <div className={styles.description}>
                    <p>tel: {contacts.telNumber || ""}</p>
                    <p>email: {contacts.email || ""}</p>
                </div>
                <Image className={styles.map} src="/Service area1.webp" alt="map" width={1024} height={453}/>
            </div>
        </Layout>
    )
}

export default ContactPage;
