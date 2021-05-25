import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frescura Cafe</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <div className={styles.mt10}></div>

      <h1 align="center" className={styles.tonto}>Soy tonto!!</h1>
      <div align="center" >
        <Image src='/tonto.jpeg' width={330} height={300} />
      </div>

      <div className={styles.mt10}></div>
    </div>
  )
}