import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import locksmithCategoriesStyles from "../../styles/locksmith/locksmithCaterories.module.css"

export default function LocksmithCategories() {
    return (
        <div className={locksmithCategoriesStyles.wrapper}>
            <div  className={locksmithCategoriesStyles.categoriesTitleWrapper}>
                <span className={locksmithCategoriesStyles.span}></span>
                <p className={locksmithCategoriesStyles.categoriesTitle}>Locksmith Services</p>
                <span  className={locksmithCategoriesStyles.span}></span>
            </div>
            <div className={locksmithCategoriesStyles.categories}>
                <Link className={locksmithCategoriesStyles.category} href="/services/locksmith-services/residential/" aria-label="Resedential">
                    <Image
                        className={locksmithCategoriesStyles['image']}
                        src="/services/locksmith/recedential/home-electronic-lock.png"
                        alt="residential"
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
                    <p className={locksmithCategoriesStyles.categoryTitle}>Resedential</p>
                </Link>
                <Link className={locksmithCategoriesStyles.category} href="/services/locksmith-services/commercial/" aria-label="Commertial">
                    <Image
                        className={locksmithCategoriesStyles['image']}
                        src="/services/locksmith/commercial/panic-bar-exit-device.jpg"
                        alt="commercial"
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
                    <p className={locksmithCategoriesStyles.categoryTitle}>Commercial</p>
                </Link>
                <Link className={locksmithCategoriesStyles.category} href="/services/locksmith-services/commercial/" aria-label="Commertial">
                    <Image
                        className={locksmithCategoriesStyles['image']}
                        src="/services/locksmith/emergency/Lock-change-emergency.jpg"
                        alt="commercial"
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
                    <p className={locksmithCategoriesStyles.categoryTitle}>Emergency Locksmith</p>
                </Link>
            </div>
        </div>
    )
}
