import Layout from '@/components/Layout'
import React from 'react'
import styles from '../styles/page.module.css'
import Head from 'next/head';


export default function about() {
    return (
        <Layout>
            <Head>
            <title>About Locksmith</title>
            <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam." />
            </Head>
            <h1 className={styles.title}>About Locksmith</h1>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam.
            </p>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam.
            </p>
            <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam.
            </p>
        </Layout>
    )
}
