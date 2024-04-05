import Layout from '@/components/Layout'
import React from 'react'
import contacts from '../data/contacts'
import styles from '../styles/contact.module.css'
import Head from 'next/head';

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
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d621583.5473622468!2d-79.6638166550695!3d43.63844929862597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1710359706059!5m2!1sen!2sca"
                height="450" 
                loading="lazy"
                className={styles.map}
                ></iframe>
            </div>
        </Layout>
    )
}

export default ContactPage;
