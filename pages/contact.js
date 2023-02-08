import { useRouter } from 'next/router'
import Arrows from '@/components/arrows'



export default function Contact() {

    const router = useRouter()

    return (
        <div>
            <h1>{router.pathname}</h1>
            <Arrows />
        </div>
    )
}