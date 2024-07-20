import type { NextPage } from 'next'
import HomeContent from '@/components/HomeContent';
import Layout from '@/components/Layout';
import Comments from '@/components/Comments';
import Head from 'next/head';

const Home: NextPage = () => {
  return <Layout>
    <Head>
      <title>GTADOORSOLUTION</title>
      <meta name="description" content="MAKING SURE THE KEYS ARE IN YOUR HANDS" />
      <meta property="og:image" content="/LogoBaner.svg" />
      <meta name="twitter:image" content="/LogoBaner.svg" />
    </Head>
    <HomeContent />
    <Comments />
  </Layout>
};

export default Home
