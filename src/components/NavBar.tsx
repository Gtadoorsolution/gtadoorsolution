import React, { useState, useEffect } from 'react';
import styles from '../styles/nav.module.css';
import Image from 'next/image';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
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
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src="/logo-inverse.webp"
                    alt="Description of the image"
                    width={120}
                    height={35}
                />
            </div>
            <div className={styles.burger} onClick={handleMenuToggle}>
                <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
                <div className={isMenuOpen ? styles.burgerLineOpen : styles.burgerLine}></div>
            </div>
            <ul className={styles.menuPC}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
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
                            <a href="#">Services</a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
