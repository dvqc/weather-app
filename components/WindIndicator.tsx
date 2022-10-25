/* eslint-disable @next/next/no-img-element */
import { WindDirection, WindDirObj } from "../interfaces";
import styles from '../styles/Highlights.module.scss'
const WindIndicator = ({ direction }: { direction: WindDirection }) => {
    const windDirection = 90 - WindDirObj[direction];
    return (
        <div className={styles["wind-dir-container"]} style={{ transform: `rotate(${windDirection}deg)` }}>
        </div>
    )
}

export default WindIndicator;