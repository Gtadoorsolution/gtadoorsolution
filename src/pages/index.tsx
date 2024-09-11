import type { NextPage } from 'next'
import HomeContent from '@/components/HomeContent';
import Layout from '@/components/Layout';
import Comments from '@/components/Comments';
import Head from 'next/head';

const Home: NextPage = () => {
  return <Layout>
    <Head>
        <title>GTADOORSOLUTIONS</title>
        <meta name="description" content="MAKING SURE THE KEYS ARE IN YOUR HANDS" />
        <meta property="og:title" content="GTADOORSOLUTIONS" />
        <meta property="og:description" content="MAKING SURE THE KEYS ARE IN YOUR HANDS" />
        <meta property="og:image" content="https://locksmith-tau.vercel.app/LogoBaner.png" />
        <meta property="og:url" content="https://locksmith-tau.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GTADOORSOLUTIONS" />
        <meta name="twitter:description" content="MAKING SURE THE KEYS ARE IN YOUR HANDS" />
        <meta name="twitter:image" content="https://locksmith-tau.vercel.app/LogoBaner.png" />
        <meta name="twitter:url" content="https://locksmith-tau.vercel.app/" />
      </Head>
    <HomeContent />
    <Comments />
  </Layout>
};

export default Home
