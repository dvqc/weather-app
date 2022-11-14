/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import styles from "styles/Forecast.module.scss"
import TempContext from "contexts/TempContext";
import { IForecastData } from "interfaces";
import { checkIfTomorrow, formatDate, translateCondition } from "utils";

const ForecastCard = ({ forecastDay }:
    {
        forecastDay: IForecastData
    }) => {
    const tempUnit = useContext(TempContext);
    const date = new Date(forecastDay.date_epoch * 1000);
    const formatedDate = checkIfTomorrow(date) ? 'Tomorrow' : formatDate(date);

    return (
        <div className={styles["forecast-card"]}>
            <p className={styles["forecast-date"]}>{formatedDate}</p>
            <img src={`/images/conditions/${translateCondition(forecastDay.condition_code)}.png`}
                alt='forecast weather image' />
            <div className={styles["forecast-temp"]}>
                <p className={styles["day-temp"]}>{tempUnit == 'C' ? forecastDay.maxtemp_c : forecastDay.maxtemp_f}
                    °{tempUnit}</p>
                <p className={styles["night-temp"]}>{tempUnit == 'C' ? forecastDay.mintemp_c : forecastDay.mintemp_f}
                    °{tempUnit}</p>
            </div>
        </div>
    )
}

export default ForecastCard;