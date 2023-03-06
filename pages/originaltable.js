import Arrows from '@/components/arrows'
import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import Header from '@/components/header'



export default function Contact() {

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
          <div className={styles.main_title}>
            <h1>
              Contact Us
            </h1>
            <p>
              Want to discuss? Lets chat.
            </p>
          </div>
          <div className={styles.form_container}>
            <form className={styles.form}>
                <fieldset>
                    <table>
                        <thead>
                            <tr>
                                <label className={styles.first_name}>First Name:</label>
                                <label className={styles.last_name}>Last Name:</label>
                                <input id="firstname" className={styles.first_name_input} type="text" />
                                <input id="lastname" className={styles.last_name_input} type="text" />
                            </tr>
                        </thead>
                        <thead>
                                <tr>
                                    <label className={styles.email}>Email:</label>
                                    <input id="email" className={styles.email_input} type="text" />
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