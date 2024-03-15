import React from 'react'
import locksmithStyles from "../../styles/locksmithServises.module.css"

interface LocksmithLogoProps {
    title: string;
}

const LocksmithLogo: React.FC<LocksmithLogoProps> = ({ title }) => {
    return (
        <div className={locksmithStyles.logo}>
            <h1 className={locksmithStyles.logoText}>{title}</h1>
        </div>
    );
};

export default LocksmithLogo;
