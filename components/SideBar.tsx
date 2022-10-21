/* eslint-disable @next/next/no-img-element */
import { Dispatch, SetStateAction, useContext, useState } from "react"
import styles from "styles/SideBar.module.scss"
import DataContext from "../contexts/DataContext";
import useFetchByCity from "../hooks/useFetchByCity";
import useFetchCities from "../hooks/useFetchCities";
import { ICoords } from "../interfaces";
import { formatDate, setNewCoords, translateCondition } from "../utils";

const SideBar = ({ setCoords, coords }: { setCoords: Dispatch<SetStateAction<ICoords>>, coords: ICoords }) => {
    const { data, setData } = useContext(DataContext);
    const [searchCity, setSearchCity] = useState('');
    const [searching, setSearching] = useState(false);

    const handleLocationClicked = () => {
        setNewCoords(setCoords, coords)
    }

    const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchCity(e.currentTarget.value)
    }

    const handleSearchFocus = () => {
        setSearching(true);
    }

    const handleSearchUnfocus = () => {
        setSearching(false);
    }
    
    useFetchByCity(searchCity, setData)

    let searchButton;
    searching ? searchButton = <button className={styles["search-button"]}>Search</button> : searchButton = <></>

    return (
        <div className={styles['sidebar']}>
            <div className={`${styles["cancel-search"]} ${!searching ? styles["hide"] : ""}`}>
                <button onClick={handleSearchUnfocus}></button>
            </div>
            <div className={styles['topbar']}>
                <input value={searchCity} onChange={handleSearchChange} onFocus={handleSearchFocus} type="text"
                    placeholder="Search for places" className={`${styles["searchbar"]} ${searching ? styles["focused"] : ''}`}>
                </input>
                <button onClick={handleLocationClicked} className={`${styles["location-button"]} ${searching ? styles["hide"] : ""}`}></button>
                {searchButton}
            </div>
            <CurrentWeatherImage searching={searching} conditionImg={translateCondition(data.condition)} />
            <CurrentWeatherTemp searching={searching} temp={data.temp_c} unit={"C"}></CurrentWeatherTemp>
            <CurrentWeatherType searching={searching} conditionText={data.condition_text} />
            <CurrentDate searching={searching} />
            <CurrentLocation searching={searching} city={data.city} region={data.region} />
        </div>
    )

}

const CurrentWeatherImage = ({ conditionImg, searching }: { conditionImg: string, searching: boolean }) => {
    return (
        <div className={`${styles["current-weather-img"]} ${searching ? styles["hide"] : ""}`}>
            <img src={`/images/conditions/${conditionImg}.png`} alt='current weather image' />
        </div>
    )
}

const CurrentWeatherTemp = ({ temp, unit, searching }: { temp: number, unit: "C" | "F", searching: boolean }) => {
    return (
        <div className={`${styles["current-weather-temp"]} ${searching ? styles["hide"] : ""}`}>
            {temp}<span>°{unit}</span>
        </div>
    )
}

const CurrentWeatherType = ({ conditionText, searching }: { conditionText: string, searching: boolean }) => {
    return (
        <div className={`${styles["current-weather-type"]} ${searching ? styles["hide"] : ""}`}>
            {conditionText}
        </div>
    )
}

const CurrentDate = ({ searching }: { searching: boolean }) => {
    return (
        <div className={`${styles["current-date"]} ${searching ? styles["hide"] : ""}`}>
            Today<span>·</span>{formatDate(new Date())}
        </div>
    )
}

const CurrentLocation = ({ city, region, searching }: { city: string, region: string, searching: boolean }) => {


    return (
        <div className={`${styles["current-location"]} ${searching ? styles["hide"] : ""}`}>
            <span></span>{city}, {region}
        </div>
    )
}

export default SideBar