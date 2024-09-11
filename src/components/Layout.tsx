import React, { ReactNode } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import styles from "../page.module.css";
import PageContainer from "./PageContainer";

interface LayoutProps {
  children: ReactNode; // Використовуйте тип ReactNode для властивості children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.main}>
      <Navbar />
      <PageContainer>
        <div>{children}</div>
      </PageContainer>
      <Footer />
    </main>
  );
}
