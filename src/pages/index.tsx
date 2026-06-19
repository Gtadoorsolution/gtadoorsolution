import type { NextPage } from 'next';
import HomeContent from '@/components/HomeContent';
import Layout from '@/components/Layout';
import Comments from '@/components/Comments';
import SEO from '@/components/SEO';
import metaTagsData from '@/data/metaTags';

const Home: NextPage = () => {
  const meta = metaTagsData.find(m => m.page === "index");

  return <Layout>
    <SEO 
      title={meta?.title}
      description={meta?.description}
      ogImage={meta?.['og:image']}
      ogUrl={meta?.canonical}
      canonical={meta?.canonical}
    />
    <HomeContent />
    <Comments />
  </Layout>
};

export default Home
