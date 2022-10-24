import styles from 'styles/Forecast.module.scss'
import ForecastCard from './ForecastCard';

const ForecastContainer = ({children}: {  children?: React.ReactNode;}) => {

    return (
        <div className={styles["forecast-container"]}>
            {children}
        </div>
    )
}

export default ForecastContainer;