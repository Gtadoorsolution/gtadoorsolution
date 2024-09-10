import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <Head>
                    <title>Page Not Found | Your Website Name</title>
                    <meta name="description" content="The page you are looking for does not exist. Go back to the homepage to continue browsing." />
                </Head>
                <div>
                    <h1 className={styles.title}>404 - Page Not Found</h1>
                    <p>Sorry, the page you are looking for doesn't exist.</p>
                    <Link href="/" className={styles.linkButton}>{`<`} Go back to the homepage</Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
