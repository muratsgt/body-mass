import React from 'react';
import styles from "./style.module.scss";

const Switch = ({ isOn, handleToggle }) => {
    return (
        <div className={styles.container}>
            <p>kg/cm</p>
            <input
                checked={!isOn}
                onChange={handleToggle}
                className={styles.switchcheckbox}
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                style={{ background: isOn && '#64b5f6' }}
                className={styles.switchlabel}
                htmlFor={`react-switch-new`}
            >
                <span className={styles.switchbutton} />
            </label>
            <p>lb/ft</p>
        </div>
    );
};

export default Switch;