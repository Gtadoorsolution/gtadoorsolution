import React from 'react'
import Services from './Services'
import Counter from './Counter';
import styles from '../styles/counter.module.css';

export default function HomeContent() {
    return <>
        <Services />
        <div className={styles.counterWrapper}>
                <div className={styles.counterContainer}>
                    <Counter end={100} />
                    <span className={styles.counterLabel}>Offices</span>
                </div>
                <div className={styles.counterContainer}>
                    <Counter end={2548} />
                    <span className={styles.counterLabel}>Happy Clients</span>
                </div>
                <div className={styles.counterContainer}>
                    <Counter end={25} />
                    <span className={styles.counterLabel}>Years</span>
                </div>
                <div className={styles.counterContainer}>
                    <Counter end={256} />
                    <span className={styles.counterLabel}>Projects</span>
                </div>
            </div>
    </>
}
