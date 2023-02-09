import styles from './hamburger.module.css'
import Image from 'next/image'
import {useState} from "react"
import Link from 'next/link'

export default function Hamburger() {
    const [popout, setPopout] = useState(false);
    
    const togglePopout = () => {
        setPopout(!popout);
    }
    
    return (
        <>
        <div className={styles.hamgurger_container} onClick={togglePopout}>
          <Image 
              src="/icons/menu-icon.png"
              width={50}
              height={50}
          />
        </div>
        {popout ? (
          <div className={styles.menu_overlay}>
            <h1 onClick={togglePopout}>X</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        ) : null}
      </>
    )
}
