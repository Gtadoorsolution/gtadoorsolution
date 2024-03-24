import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/counter.module.css';

const Counter = ({ start = 0, end, duration = 5000 }) => {
    const [count, setCount] = useState(start);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef();
    const incrementTime = duration / end; // Розрахунок часу на інкремент

    const handleScroll = () => {
        if (ref.current && !hasAnimated) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                setHasAnimated(true);
                let currentCount = start;
                const interval = setInterval(() => {
                    currentCount++;
                    setCount(currentCount);
                    if (currentCount >= end) clearInterval(interval);
                }, incrementTime);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasAnimated]);

    return <div ref={ref} className={styles.counter}>{count}</div>;
};

export default Counter;
