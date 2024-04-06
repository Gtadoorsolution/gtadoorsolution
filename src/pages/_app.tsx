// pages/_app.tsx

import dynamic from 'next/dynamic'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import redirectMissingCustomer from '../middleware/redirectMissingCustomer';
import { NextPageContext } from 'next';
import phoneStyles from "../styles/phone.module.css"
import contacts from '@/data/contacts';

// Динамічний імпорт компонента CrispChat з виключенням SSR
const CrispWithNoSSR = dynamic(() => import('../components/crisp'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CrispWithNoSSR />
      <div>
        <a href={contacts.telNumber} className={phoneStyles["phone-call-button"]}>
          <svg className={phoneStyles["phone-icon"]} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" stroke="none" fill="white" />
          </svg>
        </a>
      </div>
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
