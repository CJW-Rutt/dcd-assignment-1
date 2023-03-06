import Arrows from '@/components/arrows'
import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import Header from '@/components/header'
import { useState } from 'react'



export default function Contact() {

  const [firstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState('');
  const [firstNamePass, setFirstNamePass] = useState(0);
  
  const [lastName, setLastName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');
  const [lastNamePass, setLastNamePass] = useState(0);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [emailPass, setEmailPass] = useState(0);

  const [validatedFirstName, setValidatedFirstName] = useState(false);
  const [validatedLastName, setValidatedLastName] = useState(false);
  const [validatedEmail, setValidatedEmail] = useState(false);

  function isValidFirstName( firstName ) {
      return /^\p{Lu}/u.test( firstName );
  }

  function isValidLastName( lastName ) {
      return /^\p{Lu}/u.test( lastName );
  } 

  function isValidEmail( email ) {
      return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test( email );
  } 

  const handleChangeFirstName = ( event ) => {
      let firstNameInputField = document.querySelector("#firstName");

      if( !isValidFirstName( event.target.value ) ) {
          setErrorFirstName('First name error. First letter must be capital. Must use alphabets only.');

          if( firstName == 0 ) {
              setFirstNamePass( firstNamePass + 1 );
              setValidatedFirstName( false );
          }
          firstNameInputField.style.border = "2px solid red";
      } 
      else {
          setErrorFirstName('');
          setValidatedFirstName( true );

          if( firstNamePass == 1 ) {
              setFirstNamePass( firstNamePass - 1 );
          }
          firstNameInputField.style.border = "1px solid gray";
      }
      setFirstName( event.target.value );
      console.log( firstNamePass );
  }

  const handleChangeLastName = ( event ) => {
      let lastNameInputField = document.querySelector("#lastName");

      if( !isValidLastName( event.target.value ) ) {
          setErrorLastName('Last name error. First letter must be capital. Must use alphabets only.');

          if( lastName == 0 ) {
              setLastNamePass( lastNamePass + 1 );
              setValidatedLastName( false );
          }
          lastNameInputField.style.border = "2px solid red";
      } 
      else {
          setErrorLastName('');
          setValidatedLastName( true );

          if( lastNamePass == 1 ) {
              setLastNamePass( lastNamePass - 1 );
          }
          lastNameInputField.style.border = "1px solid gray";
      }
      setLastName( event.target.value );
      console.log( lastNamePass );
  }

  const handleChangeEmail = ( event ) => {
    let emailInputField = document.querySelector("#email");

    if( !isValidEmail( event.target.value ) ) {
      console.log('got here');
        setErrorEmail('Email is invalid.');

        if( email == 0 ) {
            setEmail( emailPass + 1 );
            setValidatedEmail( false );
        }
        emailInputField.style.border = "2px solid red";
    } 
    else {
        setErrorEmail('');
        setValidatedEmail( true );

        if( emailPass == 1 ) {
            setEmailPass( emailPass - 1 );
        }
        emailInputField.style.border = "1px solid gray";
    }
    setEmail( event.target.value );
  }

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
          <h1 className={styles.h1}>
            Contact Us
          </h1>
          <p>
            Want to discuss? Lets chat.
          </p>
        </div>
        <div className={styles.form_outer_container}>
          <div className={styles.form_container}>
            <form className={styles.form}>
                <fieldset className={styles.fieldSet}>
                    <table>
                        <thead>
                            <tr>
                                <label className={styles.first_name}>First Name:</label>
                                <label className={styles.last_name}>Last Name:</label>
                                <input 
                                  id="firstName" 
                                  className={styles.first_name_input} 
                                  type="text"
                                  value={firstName} 
                                  onChange={handleChangeFirstName}
                                />
                                <input 
                                  id="lastName" 
                                  className={styles.last_name_input} 
                                  type="text" 
                                  value={lastName} 
                                  onChange={handleChangeLastName}
                                />
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <label className={styles.email}>Email:</label>
                                <input 
                                  id="email" 
                                  className={styles.email_input} 
                                  value={email}
                                  type="text" 
                                  onChange={handleChangeEmail}
                                />
                            </tr>
                        </thead>
                    </table>
                </fieldset>
                {
                  validatedFirstName && validatedLastName && validatedEmail ? 
                      <button type="button">Submit</button>
                      : <></>
                }
            </form>
            {
              errorFirstName && <p style={{color: '#B22222', fontWeight: 500, textAlign: 'left'}}>{errorFirstName}</p>
            }
            {
              errorLastName && <p style={{color: '#B22222', fontWeight: 500, textAlign: 'left'}}>{errorLastName}</p>
            }
            {
              errorEmail && <p style={{color: '#B22222', fontWeight: 500, textAlign: 'left'}}>{errorEmail}</p>
            }
          </div>
        </div>
        <Arrows />
      </main>
    </>
  )
}