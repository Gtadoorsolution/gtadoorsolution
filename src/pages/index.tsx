import type { NextPage } from 'next'
import styles from '../page.module.css'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HomeContent from '@/components/HomeContent';
// import Image from 'next/image';

const Home: NextPage = () => {
  return <>
    <main className={styles.main}>
      <div>
        <div style={{
          background: "#1d1d1d",
          color: "#cbc9d1",
          height: 30,
          padding: "18px",
          display: "flex",
          alignItems: "center",
          fontSize: 14,
        }}>
          <p>Mon - Fri 00:00 - 00:00 / Sunday 00:00 - 00:00
            |1-000-000-0000|
            00 Locksmith Street, Ontario, CA</p>
        </div>
        <NavBar />
      </div>
      <HomeContent />
      <Footer />
      <div style={{
        backgroundColor: "#0a0300",
        color: "#c5c5c5",
      }}>
        <hr style={{ borderColor: "black", width: "100%", margin: 30, }} />
        <p style={{ margin: 25 }}>© 2024</p>
      </div>
    </main >
  </>
};

export default Home
