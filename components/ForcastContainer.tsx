import styles from 'styles/Forecast.module.scss'
import ForecastCard from './ForecastCard';

const ForecastContainer = () => {

    return (
        <div className={styles["forecast-container"]}>
            <ForecastCard conditionImg='Sleet'></ForecastCard>
            <ForecastCard conditionImg='Hail'></ForecastCard>
            <ForecastCard conditionImg='Clear'></ForecastCard>
            <ForecastCard conditionImg='Sleet'></ForecastCard>
        </div>
    )
}

export default ForecastContainer;