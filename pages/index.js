import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BMI Calculator</title>
        <meta name="description" content="A simple tool to calculate your ideal weight" />
        <link rel="icon" href="/health.ico" />
      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
