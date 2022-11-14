import styles from "styles/SideBar.module.scss"
import { TempUnit } from "interfaces"

export default function CurrentWeatherTemp({ temp, unit, searching }: { temp: number, unit: TempUnit, searching: boolean }) {
    return (
        <div className={`${styles["current-weather-temp"]} ${searching ? styles["hide"] : ""}`}>
            {temp}<span>°{unit}</span>
        </div>
    )
}