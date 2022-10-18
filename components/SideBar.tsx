/* eslint-disable @next/next/no-img-element */


import { useContext } from "react"
import styles from "styles/SideBar.module.scss"
import DataContext from "../contexts/DataContext"

const SideBar = () => {
    const data = useContext(DataContext);
    console.log(data);

    return (
        <div className={styles.sidebar}>
            <div className={styles.topbar}>
                <input type="text" placeholder="Search for places" className={styles.searchbar}></input>
                <button className={styles["location-button"]}></button>
            </div>
            <CurrentWeatherImage conditionImg={translateCondition(data.condition)} />
            <CurrentWeatherTemp temp={data.temp_c} unit={"C"}></CurrentWeatherTemp>
            <CurrentWeatherType conditionText={data.condition_text} />
            <CurrentDate />
            <CurrentLocation city={data.city} region={data.region} />
        </div>
    )
}
const CurrentWeatherImage = ({ conditionImg }: { conditionImg: string }) => {
    return (
        <div className={styles["current-weather-img"]}>
            <img src={`/images/conditions/${conditionImg}.png`} alt='current weather image' />
        </div>
    )
}

const CurrentWeatherTemp = ({ temp, unit }: { temp: number, unit: "C" | "F" }) => {
    return (
        <div className={styles["current-weather-temp"]}>
            {temp}<span>°{unit}</span>
        </div>
    )
}

const CurrentWeatherType = ({ conditionText }: { conditionText: string }) => {
    return (
        <div className={styles["current-weather-type"]}>
            {conditionText}
        </div>
    )
}

const CurrentDate = () => {
    return (
        <div className={styles["current-date"]}>
            Today<span>·</span>{formatDate(new Date())}
        </div>
    )
}

const CurrentLocation = ({ city, region }: { city: string, region: string }) => {


    return (
        <div className={styles["current-location"]}>
            <span></span>{city}, {region}
        </div>
    )


}

const translateCondition = (code: number) => {
    switch (code) {
        case 1000:
            return 'Clear';

        case 1003:
            return 'LightCloud';

        case 1006:
            return 'HeavyCloud';

        default:
            return 'Sleet'
    }
}



const formatDate = (date: Date) => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${weekDays[date.getDay()]}, ${date.getDate()} ${Months[date.getMonth()]}`
}




export default SideBar