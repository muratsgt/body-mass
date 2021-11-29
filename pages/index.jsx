import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Button from '../components/Button'
import { useState } from 'react'
import ResultModal from '../components/ResultModal'

export default function Home() {
  const [myW, setMyW] = useState(70);
  const [myH, setMyH] = useState(170);
  const [modalOn, setModalOn] = useState(false);
  let bmi = 10000 * myW / (myH * myH);

  const onClose = () => {
    setModalOn(false);
  }

  const changeH = (e) => {
    setMyH(e.target.value);
  }

  const changeW = (e) => {
    setMyW(e.target.value);
  }

  const handleClick = () => {
    setModalOn(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BMI Calculator</title>
        <meta name="description" content="A simple tool to calculate your ideal weight" />
        <link rel="icon" href="/health.ico" />
      </Head>

      <main className={styles.main}>
        <Image alt="title" src="/fit.png" width={100} height={100}></Image>
        <h1>What is your BMI?</h1>
        <div>
          <h2>Your Height (cm)</h2>
          <input
            value={myH}
            onChange={changeH}
            type="range"
            name="height"
            id="height"
            min={140}
            max={220}
          />
          <input
            className={styles.numinput}
            value={myH}
            onChange={changeH}
            min={140}
            max={220}
            type="number"
            name="height2"
            id="height2" />
        </div>
        <div>
          <h2>Your Weight (kg)</h2>
          <input
            value={myW}
            onChange={changeW}
            type="range"
            name="weight"
            id="weight"
            min={40}
            max={200}
          />
          <input
            className={styles.numinput}
            value={myW}
            onChange={changeW}
            type="number"
            name="weight2"
            id="weight2"
            min={40}
            max={200}/>
        </div>
        <Button onClick={handleClick}>Hit me!</Button>
        <ResultModal isOn={modalOn} result={bmi} onClose={onClose}></ResultModal>
      </main>

      <footer className={styles.footer}>
        Created by Murat @ MIT
      </footer>
    </div>
  )
}
