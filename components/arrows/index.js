import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './arrows.module.css'
import Image from 'next/image'

export default function Arrows() {

    const router = useRouter()
    
    if ( router.pathname == "/") {
      return(
        <div className={styles.arrow_container}>
          <div className={styles.inner_arrow_container}>
            <Link href="/about" passHref >
              <span>
                <Image 
                  src="/icons/downwardArrow.png" 
                  width={40}
                  height={50}
                />
              </span>
            </Link>
          </div>
        </div>
      )
    }

    if ( router.pathname == "/about") {
      return(
        <div className={styles.arrow_container}>
          <div className={styles.inner_arrow_container}>
            <Link href="/" passHref >
              <span>
                <Image 
                  src="/icons/upwardArrow.png" 
                  width={40}
                  height={50}
                />
              </span>
            </Link>
            <Link href="/contact" passHref >
              <span>
                <Image 
                  src="/icons/downwardArrow.png" 
                  width={40}
                  height={50}
                />
              </span>
            </Link>
          </div>
        </div>
      )
    }

    if ( router.pathname == "/contact") {
      return(
        <div className={styles.arrow_container}>
          <div className={styles.inner_arrow_container}>
            <Link href="/about" passHref >
              <span>
                <Image 
                      src="/icons/upwardArrow.png" 
                      width={40}
                      height={50}
                />
              </span>
            </Link>
          </div>
        </div>
      )
    }
  
}
