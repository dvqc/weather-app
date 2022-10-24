/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import styles from "styles/Forecast.module.scss"
import TempContext from "../contexts/TempContext";

const ForecastCard = ({ conditionImg }: { conditionImg: string }) => {
    const tempUnit = useContext(TempContext);

    return (
        <div className={styles["forecast-card"]}>
            <p className={styles["forecast-date"]}>tomorrow</p>
            <img src={`/images/conditions/${conditionImg}.png`} alt='forecast weather image' />
            <div className={styles["forecast-temp"]}>
                <p className={styles["day-temp"]}>20°{tempUnit}</p>
                <p className={styles["night-temp"]}>15°{tempUnit}</p>
            </div>
        </div>
    )
}

export default ForecastCard;