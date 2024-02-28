import Layout from '@/components/Layout'
import React from 'react'
import contacts from '../data/contacts'
import styles from '../styles/page.module.css'
import Head from 'next/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head>
                <title>CONTACT US</title>
                <meta name="description" content="Have Questions? Get in Touch!" />
            </Head>
            <div>
                <p className={styles.title}>CONTACT US</p>
                <h1 className={styles.title}>Have Questions? Get in Touch!</h1>
                <div className={styles.description}>
                    <p>{contacts.adress || ""}</p>
                    <p>{contacts.telNumber || ""}</p>
                    <p>{contacts.email || ""}</p>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;
