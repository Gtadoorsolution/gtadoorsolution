// pages/_app.tsx

import dynamic from 'next/dynamic'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import redirectMissingCustomer from '../middleware/redirectMissingCustomer';
import { NextPageContext } from 'next';
import FloatingButton from '@/components/FloatingButton';
import CrispFloatingButton from '@/components/CrispFloatingButton';


// Динамічний імпорт компонента CrispChat з виключенням SSR
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

MyApp.getInitialProps = async ({ Component, ctx }: { Component: any, ctx: NextPageContext }) => {
  // Викликаємо middleware для перевірки статусу сайту
  await redirectMissingCustomer(ctx.req, ctx.res);

  // Визначений компонент буде рендеритися лише якщо статус сайту не maintenance
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
};

export default MyApp;
