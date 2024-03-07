import React from 'react'
import styles from '../styles/headerContacts.module.css'
import contacts from '@/data/contacts'

export default function HeaderContacts() {
    return (
        <div className={styles.wrapper}>
            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#a1a1a1" strokeWidth="2" fill="none" />
                <line x1="12" y1="12" x2="12" y2="7" stroke="#a1a1a1" strokeWidth="2" />
                <line x1="12" y1="12" x2="16.5" y2="16.5" stroke="#a1a1a1" strokeWidth="2" />
            </svg>
            <p className={styles.text}>
                {contacts.schedule}
            </p>
            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" stroke="#a1a1a1" strokeWidth="2" fill="none" />
            </svg>
            <p className={styles.text}>
                {contacts.telNumber}
            </p>
            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="none" stroke="#a1a1a1" strokeWidth="2" />
                <circle cx="12" cy="9" r="2.5" fill="none" stroke="#a1a1a1" strokeWidth="2" />
            </svg>
            <p className={styles.text}>
                {contacts.adress}
            </p>
        </div>
    )
}
