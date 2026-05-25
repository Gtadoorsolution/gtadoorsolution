import React from 'react'
import manufacturers from '@/data/manufacturers';
import manufacturersStyles from "../../styles/locksmith/manufacturers.module.css"
import styles from '../../styles/page.module.css'

export default function Manufacturers() {
    return (
        <div>
            <h3 className={manufacturersStyles.title}>We Work With Manufacturers In Our Industry</h3>
            <div className={manufacturersStyles['grid-container']}>
                {
                    manufacturers.map((image, index) => <div key={index}>
                        <div className={styles['grid-item']} >
                            <div style={{
                                backgroundImage: `url("${image.src}")`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                width: '100%', 
                                height: '120px'
                            }} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
