import styles from 'styles/Forecast.module.scss'

const ForecastContainer = ({children}: {  children?: React.ReactNode;}) => {

    return (
        <div className={styles["forecast-container"]}>
            {children}
        </div>
    )
}

export default ForecastContainer;