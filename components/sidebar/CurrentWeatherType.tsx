import styles from "styles/SideBar.module.scss"

export default function CurrentWeatherType({ conditionText, searching }: { conditionText: string, searching: boolean }) {
    return (
        <div className={`${styles["current-weather-type"]} ${searching ? styles["hide"] : ""}`}>
            {conditionText}
        </div>
    )
}