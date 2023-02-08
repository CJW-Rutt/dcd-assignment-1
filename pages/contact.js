import { useRouter } from 'next/router'
import Arrows from '@/components/arrows'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Header from '@/components/header'



export default function Home() {
    return (
      <>
        <Head>
          <title>Contact Us</title>
          <meta name="author" content="MDIA 2109" />
          <meta property="og:title" content="Assignment #1 - Contact Us Page" />
          <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.main}>
          <Header />
          <div>
            <h1>
              Contact Us
            </h1>
            <p>
              Want to discuss? Lets chat.
            </p>
          </div>
          <div className={styles.form_container}>
            <form>
                <fieldset>
                    <table>
                        <thead>
                            <tr>
                                <label>First Name:</label>
                                <input id="firstname" type="text" />
                                <label>Last Name:</label>
                                <input id="lastname" type="text" />
                            </tr>
                        </thead>
                        <thead>
                                <tr>
                                    <label for="email">Email:</label>
                                    <input id="email" type="text" />
                                </tr>
                        </thead>
                    </table>
                </fieldset>
            </form>
          </div>
          <Arrows />
        </main>
      </>
    )
  }