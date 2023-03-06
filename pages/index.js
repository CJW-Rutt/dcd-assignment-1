import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Arrows from '@/components/arrows'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Header />
        <div className={styles.body_container}>
          <h1>
            An investment in<br /> knowledge pays the best<br />  interest.
          </h1>
          <div className={styles.underline}></div>
          <p>
            Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
          </p>
          <div className={styles.button_container}> 
            <Link  href="/about" passHref >
              <button className={styles.home_button}>More About Us</button>
            </Link>
            <Link  href="/contact" passHref>
              <button className={styles.home_button}>Contact Us</button>
            </Link>
          </div>
        </div>
        <Arrows />
      </main>
    </>
  )
}
