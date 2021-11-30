import { useState, useEffect } from 'react';
import styles from "./style.module.scss";
import Button from '../Button';
import { format } from 'date-fns'
import Image from 'next/image'

function ResultRow({ bmi }) {
    return (
        <div className={styles.results}>
            {format(bmi.time, "dd MMMM")}
            <p>{bmi.result}</p>
        </div>
    );
}

function ResultModal({ isOn, result, children, onClose, ...props }) {
    const [bmiset, setbmiset] = useState([]);

    useEffect(() => {
        const temp = localStorage.getItem("bmiset");
        setbmiset(JSON.parse(temp));
    }, [])

    const handleOut = () => {
        onClose();
    }

    const saveResult = () => {
        const currentObj = { time: Date.now(), result: result.toFixed(2) }
        const tempObj = bmiset ? [currentObj, ...bmiset] : [currentObj];
        setbmiset(tempObj);
        localStorage.setItem("bmiset", JSON.stringify(tempObj));
        console.log(`tempObj`, tempObj)
    }

    const cleanStorage = () => {
        localStorage.removeItem("bmiset");
        setbmiset([]);
    }
    return (
        isOn &&
        < div className={styles.container}>
            <div className={styles.modal} {...props}>
                <div className={styles.current}>
                    {
                        result < 18.5 && <h3 color="yellow">its time to eat 🙂</h3> ||
                        result < 25 && <Image alt="ok"
                            src="/ok.png" width={50} height={50}></Image> ||
                        result < 30 && <h3 color="yellow">its time to move 🏃‍♂️🏃‍♀️</h3> ||
                        result < 100 && <h3 color="red">time to start a new diet 🍅🥦</h3>
                    }
                    <h2>Your body mass index is</h2>
                    <h1>{result.toFixed(2)}</h1>
                    <Button onClick={saveResult}>Save</Button>
                </div>
                <div className={styles.resulttable}>
                    {bmiset && <div className={styles.results}>
                        Date<p>Result</p></div>}
                    {bmiset?.slice(0, 7).map(
                        (bmi) => <ResultRow key={bmi.time} bmi={bmi}></ResultRow>
                    )}
                    <button onClick={cleanStorage}>delete all</button>
                </div>
                {children}
            </div>
            <div className={styles.goback} onClick={handleOut}> ❰❰ GO BACK</div>
        </div>
    )
};

export default ResultModal;