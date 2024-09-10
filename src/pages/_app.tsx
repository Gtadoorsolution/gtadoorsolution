// pages/_app.tsx

import dynamic from 'next/dynamic'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import FloatingButton from '@/components/FloatingButton';
import CrispFloatingButton from '@/components/CrispFloatingButton';

const CrispWithNoSSR = dynamic(() => import('../components/crisp'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CrispWithNoSSR />
      <CrispFloatingButton />
      <FloatingButton />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
