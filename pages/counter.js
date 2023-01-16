import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import styles from '../styles/counter.module.css'

export default function Counter (){
    const [number, setNumber] = useState (0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username')
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])

    return (
        <>
        <main className={styles.main}>
        <div className= {styles.header}>

        <div className= {styles.counter}>COUNTER PAGE</div>
        <div className= {styles.welcome}> Welcome, {isUser}.</div>

        </div>

        <div className={styles.btnnumbers}>

        <div className={styles.numbers}>{number}</div>
        <div className={styles.buttons}>
        <button className={styles.increment} onClick ={() => setNumber (number + 1)}>Increment</button>
        <button className={styles.decrement} onClick ={() => setNumber (number - 1)}>Decrement</button>
        </div>

        </div>
        
      
        
        </main>
        </>

    )
}