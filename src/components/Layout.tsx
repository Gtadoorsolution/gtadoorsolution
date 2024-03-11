import React, { ReactNode } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import HeaderContacts from './HeaderContacts';
import UnderFooter from './UnderFooter';
import styles from '../page.module.css'
import PageContainer from './PageContainer';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode; // Використовуйте тип ReactNode для властивості children
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className={styles.main}>
            {/* <HeaderContacts /> */}
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="${process.env.CRISP_WEBSITE_ID}";
            (function(){
              var d=document;
              var s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `,
                    }}
                />
            </Head>
            <Navbar />
            <PageContainer>
                <div>{children}</div>
            </PageContainer>
            <Footer />
            {/* <UnderFooter /> */}
        </main>
    );
};
