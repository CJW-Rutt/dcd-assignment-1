import styles from './header.module.css'
import Image from 'next/image'
import Hamburger from '@/components/hamburger'

export default function Header() {
    return (
        <>
            <header className={styles.header_container}>
                <Hamburger />
                <Image 
                    src="/icons/graduation-hat.png"
                    width={50}
                    height={50}
                />
            </header>
        </>
    )
}