import styles from "styles/SideBar.module.scss"

export default function CurrentWeatherImage({ conditionImg, searching }: { conditionImg: string, searching: boolean }) {
    return (
        <div className={`${styles["current-weather-img"]} ${searching ? styles["hide"] : ""}`}>
            <img src={`/images/conditions/${conditionImg}.png`} alt='current weather image' />
        </div>
    )
}