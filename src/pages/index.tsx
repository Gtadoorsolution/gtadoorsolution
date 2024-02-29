import type { NextPage } from 'next'
import HomeContent from '@/components/HomeContent';
import Layout from '@/components/Layout';
import Comments from '@/components/Comments';

const Home: NextPage = () => {
  return <Layout>
      <HomeContent />
      <Comments/>
  </Layout>
};

export default Home
