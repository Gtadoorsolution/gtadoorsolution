import Link from 'next/link'
import React from 'react'
import canTrustStyles from '../../styles/locksmith/canTrust.module.css'

export default function CanTrust() {
    return (
        <div className={canTrustStyles.wrapper}>
            <p className={canTrustStyles.title}>LOCKSMITH SERVICES YOU CAN TRUST!</p>
            <p className={canTrustStyles.description}>We are prepared to handle any locksmith service you may require. Whether it's installing a new lock on your apartment door, changing commercial locks, replacing car keys, or needing emergency locksmith assistance, you can trust that we'll assist you. Our team offers 24/7 commercial, residential, and automotive locksmith services in New York City. Wherever you are in NYC, count on us to be there for you!</p>
            <div className={canTrustStyles.buttonsWrapper}>
                <Link href='/contact'>
                    <button style={{ backgroundColor: "black" }} className={canTrustStyles.button}>Contact Us</button>
                </Link>
                <button style={{ backgroundColor: "red" }} className={canTrustStyles.button}>
                    <a href="tel:0000000000">000-000-0000</a>
                </button>
            </div>
        </div>
    )
}
