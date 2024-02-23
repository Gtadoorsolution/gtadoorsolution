import React, { ReactNode } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';
import HeaderContacts from './HeaderContacts';
import UnderFooter from './UnderFooter';
import styles from '../page.module.css'

interface LayoutProps {
    children: ReactNode; // Використовуйте тип ReactNode для властивості children
}

export default function Layout({ children }: LayoutProps) {
    return (
        <main className={styles.main}>
            {/* <HeaderContacts /> */}
            <Navbar />
            <div>{children}</div>
            <Footer />
            {/* <UnderFooter /> */}
        </main>
    );
};
