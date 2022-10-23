/* eslint-disable @next/next/no-img-element */
import styles from "styles/Forecast.module.scss"

const ForecastCard = ({ conditionImg }: { conditionImg: string }) => {
    return (
        <div className={styles["forecast-card"]}>
            <p className={styles["forecast-date"]}>tomorrow</p>
            <img src={`/images/conditions/${conditionImg}.png`} alt='forecast weather image' />
            <div className={styles["forecast-temp"]}>
                <p className={styles["day-temp"]}>20°C</p>
                <p className={styles["night-temp"]}>15°C</p>
            </div>
        </div>
    )
}

export default ForecastCard;