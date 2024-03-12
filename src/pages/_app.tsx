import dynamic from 'next/dynamic'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Динамічний імпорт компонента CrispChat з виключенням SSR
const CrispWithNoSSR = dynamic(() => import('../components/crisp'), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <CrispWithNoSSR />
    <Component {...pageProps} />
  </>
}

export default MyApp
