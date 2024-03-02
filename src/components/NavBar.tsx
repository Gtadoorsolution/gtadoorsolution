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
                        <Image
                            src="/logo-inverse (103x33).webp"
                            alt="Description of the image"
                            width={103}
                            height={33}
                            priority
                            loading='eager'
                        />
                    </div>
                    <div className={styles.burger} onClick={handleMenuToggle}>
                        <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                        <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                        <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                    </div>
                    <ul className={styles.menuPC}>
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <span onClick={handleMenuToggleDesktop}>Services</span>
                            {isMenuOpenDesktop && (
                                <ul className={`${styles.submenu} ${isMenuOpenDesktop && styles.open}`}>
                                    {servicesList.map(service => <li>
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
                                                    // layout="responsive"
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
                                <li className={styles.menuItem}>
                                    <a href="#">About</a>
                                </li>
                                <li className={styles.menuItem}>
                                    <span onClick={handleMenuToggleMobile}>Services</span>
                                    {isMenuOpenMobile && (
                                        <ul className={`${styles.submenu} ${isMenuOpenMobile && styles.open}`}>
                                            {servicesList.map(service => <li>
                                                <Link href={service.link}>
                                                    <p>{service.title}</p>
                                                </Link>
                                            </li>)}
                                        </ul>
                                    )}
                                </li>
                                <li className={styles.menuItem}>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div >
        </nav >
    );
}
