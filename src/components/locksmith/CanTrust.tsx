import Link from 'next/link'
import React from 'react'
import canTrustStyles from '../../styles/locksmith/canTrust.module.css'
import locksmithStyles from "../../styles/locksmithServises.module.css"
import contacts from '@/data/contacts'

export default function CanTrust() {
    return (
        <div className={canTrustStyles.wrapper}>
            <p className={canTrustStyles.title}>LOCKSMITH SERVICES YOU CAN TRUST!</p>
            <p className={locksmithStyles.textBolt}>We’re equipped to handle all your locksmith needs with professionalism and efficiency.</p> 
            <p className={locksmithStyles.text}>Whether you need a new lock installed on your apartment door, require lock changes for your business, need a new car key, or find yourself locked out in an emergency, you can rely on us for swift and reliable assistance.</p> 
            <p className={locksmithStyles.text}>Our team provides 24/7 locksmith services for commercial, residential, and automotive needs throughout the Toronto GTA area.</p>
            <p className={locksmithStyles.textBolt}>Wherever you are, you can count on us to be there when you need us!</p>
            <div className={canTrustStyles.buttonsWrapper}>
                <Link href='/contact'>
                    <button style={{ backgroundColor: "black" }} className={canTrustStyles.button}>Contact Us</button>
                </Link>
                <button style={{ backgroundColor: "red" }} className={canTrustStyles.button}>
                    <a href={contacts.telNumber}>{contacts.telNumber}</a>
                </button>
            </div>
        </div>
    )
}
