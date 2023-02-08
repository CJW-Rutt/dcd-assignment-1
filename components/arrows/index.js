import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './arrows.module.css'
import Image from 'next/image'

export default function Arrows() {

    const router = useRouter()
    
    if ( router.pathname == "/") {
      return(
        <Link href="/about" passHref >
          <span>
            <Image 
              src="/icons/downwardArrow.png" 
              width={40}
              height={50}
            />
          </span>
        </Link>
      )
    }

    if ( router.pathname == "/about") {
      return(
        <div>
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
      )
    }

    if ( router.pathname == "/contact") {
      return(
        <Link href="/about" passHref >
          <span>
            <Image 
                  src="/icons/upwardArrow.png" 
                  width={40}
                  height={50}
            />
          </span>
        </Link>
      )
    }
  
}
