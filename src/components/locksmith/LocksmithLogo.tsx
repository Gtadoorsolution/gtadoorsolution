import React from 'react';
import Image from 'next/image';
import locksmithStyles from "../../styles/locksmith/locksmithBaner.module.css";

interface LocksmithLogoProps {
    title: string;
    image: string;
}

const LocksmithLogo: React.FC<LocksmithLogoProps> = ({ title, image }) => {
    return (
        <div className={locksmithStyles.logoContainer}>
            <Image
                src={image}
                alt="Locksmith"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className={locksmithStyles.overlay}></div>
            <h1 className={locksmithStyles.logoText}>{title}</h1>
        </div>
    );
};

export default LocksmithLogo;
