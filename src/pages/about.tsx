import Layout from '@/components/Layout'
import React from 'react'
import styles from '../styles/about.module.css'
import Head from 'next/head';
import contacts from '../data/contacts'

export default function about() {
    return (
        <Layout>
            <Head>
                <title>About GTADoorSolutions</title>
                <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cumque aspernatur dolores doloribus tempore harum odit molestias esse ratione consequatur quod, ipsa molestiae. Aliquid laborum dolor quasi ad hic quam." />
            </Head>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>About Locksmith</h1>
                <p className={styles.description}>
                    Welcome to GTADoorSolutions – your go-to experts for all things related to security and doors in Toronto and the Greater Toronto Area. We pride ourselves on delivering top-notch locksmith and door services that cater to the needs of homeowners, businesses, and vehicle owners alike.
                </p>
                <h3  className={styles.title}>Who We Are</h3>
                <p className={styles.description}>
                    At GTADoorSolutions, our goal is to provide reliable and expert locksmith and door solutions. Our team of licensed and insured professionals is here to handle all your security and door needs with skill and efficiency.
                </p>
                <div>
                    <h3 className={styles.description}>
                        Our Mission
                    </h3>
                    <p className={styles.description}>We are dedicated to keeping your home, business, and vehicle safe and secure. Our mission is to offer quick, affordable, and high-quality services tailored to your needs. Whether it’s an emergency or a routine service, we’re here to provide the best solutions for you.
                    </p>
                </div>
                <div>
                    <h3 className={styles.description}>
                        Our Services
                    </h3>
                    <ul>
                        <li>
                            <p className={styles.description}>
                                <b>Locksmith Services:</b> From emergency lockouts to lock installations and repairs, our expert locksmiths are available 24/7 to address your needs with precision and care.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Aluminum Storefronts:</b> We specialize in the installation, repair, and maintenance of aluminum storefront systems, enhancing the aesthetics and security of your commercial premises.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Access Control Systems:</b> Our advanced access control solutions provide enhanced security for your property, allowing you to manage and monitor access with ease.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Automatic Doors:</b> We offer installation, repair, and maintenance services for automatic doors, ensuring smooth operation and reliability for both residential and commercial applications.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Commercial Door Repair:</b> Our team handles all types of commercial door repairs, including high-traffic and specialized doors, to keep your business running smoothly.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Metal Fire Rated Doors:</b> We provide installation and maintenance of metal fire-rated doors to ensure safety and compliance with fire regulations.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Garage Doors:</b> Our services include the installation, repair, and maintenance of garage doors, ensuring functionality and security for your property.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Front Entry Doors:</b> Enhance the curb appeal and security of your home with our front entry door solutions, including installation and repair services.
                            </p>
                        </li>
                        <li>
                            <p className={styles.description}>
                                <b>Emergency Lockout Services:</b> Locked out of your home, office, or vehicle? Our 24/7 emergency lockout services will get you back inside quickly and safely.
                            </p>
                        </li>
                    </ul>
                </div>
                <h3 className={styles.description}>
                    Serving the Greater Toronto Area
                </h3>
                <div>
                    <p style={{ paddingBottom: 10 }} className={styles.description}>GTADoorSolutions proudly serves a wide range of locations across Toronto and the GTA, including:</p>
                    <ul>
                        <li className={styles.description}>Toronto</li>
                        <li className={styles.description}>North York</li>
                        <li className={styles.description}>Scarborough</li>
                        <li className={styles.description}>Markham</li>
                        <li className={styles.description}>Pickering</li>
                        <li className={styles.description}>Ajax</li>
                        <li className={styles.description}>Whitby</li>
                        <li className={styles.description}>Oshawa</li>
                        <li className={styles.description}>Vaughan</li>
                        <li className={styles.description}>Richmond Hill</li>
                        <li className={styles.description}>Aurora</li>
                        <li className={styles.description}>Brampton</li>
                        <li className={styles.description}>Mississauga</li>
                        <li className={styles.description}>Newmark</li>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.description}>Why Choose Us?</h3>
                    <ul>
                        <li><p className={styles.description}><b>24/7 Availability:</b> We’re available around the clock to assist you with emergency and non-emergency needs.</p></li>
                        <li><p className={styles.description}><b>Fast Response:</b> We understand the urgency of security issues and offer rapid response times to minimize disruption.</p></li>
                        <li><p className={styles.description}><b>Experienced Professionals:</b> Our team is highly trained and experienced in a wide range of services, ensuring top-notch quality and expertise.</p></li>
                        <li><p className={styles.description}><b>Affordable Rates:</b> We provide high-quality services at competitive rates, offering great value without compromising on quality.</p></li>
                        <li><p className={styles.description}><b>Customer-Centric Approach:</b> Your satisfaction is our priority. We strive to deliver exceptional service and build lasting relationships with our clients.</p></li>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.description}>Get in Touch</h3>
                    <p className={styles.description}>For reliable and comprehensive locksmith and door solutions in Toronto and the GTA, trust GTADoorSolutions. Contact us today at +1 (437) 600-0688 or email us at gtadoorsolution@gmail.com to schedule an appointment or for emergency assistance.</p>
                    <div className={styles.description}>
                        <a href={`tel:${contacts.telNumber}`} style={{ display: "flex" }}>
                            <svg style={{ marginRight: 10 }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" stroke="#a1a1a1" strokeWidth="2" fill="none" />
                            </svg>
                            <div>{contacts.telNumberView || ""}</div>
                        </a>
                        <div style={{ display: "flex" }}>
                            <svg style={{ marginRight: 5 }} width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <text x="0%" y="65%" font-family="Arial" font-size="25" fill="#a1a1a1">@</text>
                            </svg>
                            <a href={`mailto:${contacts.email || ""}`}>{contacts.email || ""}</a>
                        </div>
                    </div>
                    <h5 className={styles.description}>GTADoorSolutions – Securing Your World, One Lock and Door at a Time.</h5>
                </div>
            </div>
        </Layout>
    )
}
