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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437135.072632405274!2d-75.72637343453277!3d45.41930932216773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2z0J7RgtGC0LDQstCwLCDQntC90YLQsNGA0ZbQviwg0JrQsNC90LDQtNCw!5e1!3m2!1suk!2sua!4v1710153242810!5m2!1suk!2sua" 
                height="450" 
                style={{border:0, width: "100%"}}
                loading="lazy" 
                ></iframe>
            </div>
        </Layout>
    )
}

export default ContactPage;
