import React, { useState, useEffect } from 'react';
import styles from '../styles/nav.module.css';
import Image from 'next/image';
import HeaderContacts from './HeaderContacts';
import Link from 'next/link';
import servicesList from '@/data/servicesList';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpenDesktop, setIsMenuOpenDesktop] = useState(false); // Стан для ПК версії
    const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false); // Стан для мобільної версії


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuToggleDesktop = () => {
        setIsMenuOpenDesktop(!isMenuOpenDesktop);
    };

    const handleMenuToggleMobile = () => {
        setIsMenuOpenMobile(!isMenuOpenMobile);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 850) {
                setIsMenuOpen(false); // Закрити меню, якщо ширина вікна більше 850px
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav>
            <div>
                <HeaderContacts />
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <Link href="/" aria-label="Home">
                            <svg style={{ display: "block", margin: 0, padding: 0, border: 0 }} width="100" height="60" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                                <text x="50%" y="65%" fontFamily="Verdana" fontSize="120" fill="white" textAnchor="middle" alignmentBaseline="middle">DS</text>
                            </svg>
                        </Link>
                    </div>
                    <div className={styles.burger} onClick={handleMenuToggle}>
                        <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                        <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                        <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                    </div>
                    <ul className={styles.menuPC}>
                        <li><Link href="/">Home</Link></li>
                        <li style={{ borderBottom: "solid 1px grey" }}>
                            <span onClick={handleMenuToggleDesktop}>Services</span>
                            {isMenuOpenDesktop && (
                                <ul className={`${styles.submenuDesctop} ${isMenuOpenDesktop && styles.open}`}>
                                    {servicesList.map((service, index) => <li key={index}>
                                        <Link href={service.link}>
                                            <div>
                                                <Image
                                                    className={styles.image}
                                                    src={service.image}
                                                    alt={service.title}
                                                    width={60}
                                                    height={60}
                                                    sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                                                    priority={true}
                                                    placeholder="blur"
                                                    blurDataURL="/default-ui.webp"
                                                    loading='eager'
                                                />
                                                <p>{service.title}</p>
                                            </div>
                                        </Link>
                                    </li>)}
                                </ul>
                            )}
                        </li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    {isMenuOpen && (
                        <div className={styles.dropdown}>
                            <ul className={styles.menu}>
                                <li className={styles.menuItem}>
                                    <a href="#">Home</a>
                                </li>
                                <li className={`${styles.menuItem} ${isMenuOpenMobile && styles.open}`}>
                                    <Link href="/about">About</Link>
                                </li>
                                <li className={`${styles.menuItem} ${isMenuOpenMobile && styles.open}`}>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <span onClick={handleMenuToggleMobile}>Services</span>
                                    {isMenuOpenMobile && (
                                        <ul className={`${styles.submenuMobile} ${isMenuOpenMobile && styles.open}`}>
                                            {servicesList.map(service => <li>
                                                <Link href={service.link}>
                                                    <p>{service.title}</p>
                                                </Link>
                                            </li>)}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div >
        </nav >
    );
}
