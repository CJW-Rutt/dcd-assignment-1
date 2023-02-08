import styles from './header.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <header>
                <Image 
                    src="/icons/graduation-hat.png"
                    width={50}
                    height={50}
                />
            </header>
        </>
    )
}