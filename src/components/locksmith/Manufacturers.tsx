import React from 'react'
import manufacturers from '@/data/manufacturers';
import manufacturersStyles from "../../styles/locksmith/manufacturers.module.css"
import styles from '../../styles/page.module.css'
import Image from 'next/image';

export default function Manufacturers() {
    return (
        <div>
            <h3 className={manufacturersStyles.title}>We Work With Manufacturers In Our Industry</h3>
            <div className={manufacturersStyles['grid-container']}>
                {
                    manufacturers.map((image, index) => <div key={index}>
                        <div className={styles['grid-item']} >
                            <Image
                                className={manufacturersStyles['image']}
                                src={image.src}
                                alt={image.alt}
                                width={324}
                                height={156}
                                sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                                layout="responsive"
                                priority={true}
                                placeholder="blur"
                                blurDataURL="/default-ui.webp"
                                loading='eager'
                            />
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
