import type { NextPage } from 'next'
import HomeContent from '@/components/HomeContent';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return <Layout>
      <HomeContent />
  </Layout>
};

export default Home
