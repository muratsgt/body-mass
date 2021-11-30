import styles from './style.module.css';

export function MetricWeight(props) {
    let kg = Math.floor(props.myW)
    return (<div className={styles.box}>
        <h2>Your Weight (kg)</h2>
        <div>
            <input value={kg} onChange={props.changeW} type="range" name="weight" id="weight" min={40} max={200} />
            <input className={styles.numinput} value={kg} onChange={props.changeW} type="number" name="weight2" id="weight2" min={40} max={200} />
        </div>
    </div>);
}

export function MetricHeight(props) {
    let cm = Math.floor(props.myH);
    return (<div className={styles.box}>
        <h2>Your Height (cm)</h2>
        <div>
            <input value={cm} onChange={props.changeH} type="range" name="height" id="height" min={140} max={220} />
            <input className={styles.numinput} value={cm} onChange={props.changeH} min={140} max={220} type="number" name="height2" id="height2" />
        </div>
    </div>);
}

export function ImperialWeight(props) {
    let pound = Math.floor(props.myW * 2.205)
    return (<div className={styles.box}>
        <h2>Your Weight (lbs)</h2>
        <div>
            <input value={pound} onChange={props.changeW} type="range" name="imW" id="imW" min={88} max={440} />
            <input className={styles.numinput} value={pound} onChange={props.changeW} type="number" name="imW" id="weight2" min={88} max={440} />
        </div>
    </div>);
}

export function ImperialHeight(props) {
    let feet = Math.floor(props.myH / 2.54);
    return (
        <div className={styles.box}>
            <h2>Your Height (ft)</h2>
            <div>
                <input value={feet} onChange={props.changeH} type="range" name="height" id="imH" min={55} max={87} />
                <p>{Math.floor(props.myH / 30.48)}{"'"}{feet % 12}{'"'}</p>
            </div>
        </div>
    );
}
