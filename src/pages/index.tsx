import type { NextPage } from 'next'
import HomeContent from '@/components/HomeContent';
import Layout from '@/components/Layout';
import PageContainer from '@/components/PageContainer';

const Home: NextPage = () => {
  return <Layout>
    <PageContainer>
      <HomeContent />
    </PageContainer>
  </Layout>
};

export default Home
