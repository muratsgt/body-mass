import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Button from '../components/Button'
import { useState } from 'react'

export default function Home() {
  const [myW, setMyW] = useState(70);
  const [myH, setMyH] = useState(170);

  const changeH = (e) => {
    setMyH(e.target.value);
  }

  const changeW = (e) => {
    setMyW(e.target.value);
  }

  const handleClick = () => {
    const bmi = 10000 * myW / (myH * myH);
    alert(bmi)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BMI Calculator</title>
        <meta name="description" content="A simple tool to calculate your ideal weight" />
        <link rel="icon" href="/health.ico" />
      </Head>

      <main className={styles.main}>
        <h1>What is your BMI?</h1>
        <div>
          <h2>Your Height</h2>
          <input
            value={myH}
            onChange={changeH}
            type="range"
            name="height"
            id="height"
            min={140}
            max={220}
            step={1}
          />
          <span>{myH}</span>
        </div>
        <div>
          <h2>Your Weight</h2>
          <input
            value={myW}
            onChange={changeW}
            type="range"
            name="weight"
            id="weight"
            min={40}
            max={200}
            step={1} />
          <span>{myW}</span>
        </div>
        <Button onClick={handleClick}>Hit me!</Button>
      </main>

      <footer className={styles.footer}>
        Created by Murat @ MIT
      </footer>
    </div>
  )
}
