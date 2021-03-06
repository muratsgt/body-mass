import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import ResultModal from '../components/ResultModal'
import { MetricHeight, MetricWeight, ImperialWeight, ImperialHeight } from '../components/InputBars'
import Switch from '../components/SwitchButton'

export default function Home() {
  const [myW, setMyW] = useState(70);
  const [myH, setMyH] = useState(170);
  const [modalOn, setModalOn] = useState(false);
  const [ismetric, setMetric] = useState(true);

  let bmi = 10000 * myW / (myH * myH);

  useEffect(() => {
    const lastW = localStorage.getItem("lastW");
    const lastH = localStorage.getItem("lastH");
    lastW && setMyW(lastW);
    lastH && setMyH(lastH);
  }, [])

  const onClose = () => {
    setModalOn(false);
  }

  const changeH = (e) => {
    if (e.target.id === "imH") {
      setMyH(e.target.value * 2.54)
    }
    else
      setMyH(e.target.value);
  }

  const changeW = (e) => {
    if (e.target.name === "imW") {
      setMyW(e.target.value / 2.205);
    } else {
      setMyW(e.target.value);
    }
  }

  const handleClick = () => {
    setModalOn(true);
    localStorage.setItem("lastW", myW);
    localStorage.setItem("lastH", myH);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>BMI Calculator</title>
        <meta name="description" content="A simple tool to calculate your ideal weight" />
        <link rel="icon" href="/health.ico" />
      </Head>
      <main className={styles.main}>
        <Switch
          isOn={ismetric}
          handleToggle={() => setMetric(!ismetric)}
        />
        <Image alt="title" src="/fit2.png" width={100} height={100}></Image>
        <div>
          <h1>What is your BMI? </h1>
          <h2>(body mass index)<span className={styles.tooltip}> ⓘ
            <h3> <b>What does the index mean?</b> <br />
              0 - 18: Underweight <br />
              18 – 25: Healthy Weight <br />
              25 – 30: Overweight <br />
              30 - 99: Obesity</h3>
          </span> </h2>
        </div>
        {ismetric ? <MetricHeight myH={myH} changeH={changeH}></MetricHeight>
          : <ImperialHeight myH={myH} changeH={changeH}></ImperialHeight>
        }
        {ismetric ? <MetricWeight myW={myW} changeW={changeW}></MetricWeight>
          : <ImperialWeight myW={myW} changeW={changeW}></ImperialWeight>
        }
        <Button onClick={handleClick}>Calculate</Button>
        <ResultModal isOn={modalOn} result={bmi} onClose={onClose}></ResultModal>
      </main>

      <footer className={styles.footer}>
        designed by <a href="https://muratakca.vercel.app/">makca</a>
      </footer>
    </div>
  )
}
