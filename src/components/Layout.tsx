import React, { ReactNode } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import styles from "../page.module.css";
import PageContainer from "./PageContainer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode; // Використовуйте тип ReactNode для властивості children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.main}>
      <Head>
        <title>GTADOORSOLUTIONS</title>
        <meta
          name="description"
          content="MAKING SURE THE KEYS ARE IN YOUR HANDS"
        />
        <meta property="og:image" content="/LogoBaner.svg" />
      </Head>
      <Navbar />
      <PageContainer>
        <div>{children}</div>
      </PageContainer>
      <Footer />
    </main>
  );
}
