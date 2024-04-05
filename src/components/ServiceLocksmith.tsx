import React from 'react'
import Layout from './Layout'
import styles from '../styles/page.module.css'
import Head from 'next/head';
import Manufacturers from './locksmith/Manufacturers';
import LocksmithCategories from './locksmith/LocksmithCategories';
import LocksmithLogo from './locksmith/LocksmithLogo';
import CanTrust from './locksmith/CanTrust';
import Breadcrumbs from './Breadcrumbs';

interface MetaTags {
    page: string,
    title: string,
    description: string,
    'og:type': string,
    'og:title': string,
    'og:description': string,
    'og:image': string,
    'twitter:card': string,
}

interface ServiceLocksmithProps {
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
    metaTags?: MetaTags | undefined; // Зроблено властивість metaTags необов'язковою
}

const ServiceLocksmith: React.FC<ServiceLocksmithProps> = ({ title, description, image, metaTags }) => {
    return (
        <Layout>
            <Head>
                <title>{metaTags?.title || title}</title>
                <meta
                    name="description"
                    content={metaTags?.description || description}
                />
                <meta property="og:type" content={metaTags?.['og:type'] || ''} />
                <meta property="og:title" content={metaTags?.title || title} />
                <meta property="og:description" content={metaTags?.description || description} />
                <meta property="og:image" content={metaTags?.['og:image'] || image} />
                <meta name="image" content={metaTags?.['og:image'] || image}></meta>
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={styles.wrapper}>
                <LocksmithLogo
                    title={'Commercial locksmith'}
                    image='/services/locksmith/recedential/locksmithResedentialBaner.jpg'
                />
                <Breadcrumbs />
                <CanTrust />
                <LocksmithCategories />
                <Manufacturers />
            </div>
        </Layout >
    )
}

export default ServiceLocksmith
