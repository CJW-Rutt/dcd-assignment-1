import styles from './hamburger.module.css'
import Image from 'next/image'
import {useState} from "react"
import Link from 'next/link'



export default function Hamburger() {
    return (
        <>
            <div className={styles.hamgurger_container}>
                <Image 
                    src="/icons/menu-icon.png"
                    width={50}
                    height={50}
                />
                <div className={styles.menu_overlay}>
                    <h1>X</h1>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
