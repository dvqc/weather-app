/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react"
import styles from "styles/SideBar.module.scss"
import DataContext from "../contexts/DataContext";
import useFetchByCity from "../hooks/useFetchByCity";
import useFetchCities from "../hooks/useFetchCities";
import { ICoords } from "../interfaces";
import { formatDate, setNewCoords, translateCondition } from "../utils";
import CitiesList from "./CitiesList";

const SideBar = ({ setCoords, coords }: { setCoords: Dispatch<SetStateAction<ICoords>>, coords: ICoords }) => {
    const { data, setData } = useContext(DataContext);
    const [searchInput, setSearchInput] = useState('');
    const [searchCity, setSearchCity] = useState('');
    const [searching, setSearching] = useState(false);
    const [searchedCities, setSearchedCitites] = useFetchCities(searchCity)

    const handleLocationClicked = () => {
        setNewCoords(setCoords, coords)
    }

    const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value)
    }

    const handleSearchFocus = () => {
        setSearching(true);
    }
    
    useEffect(() => {
        if (!searching) {
            setSearchInput('');
            setSearchCity('');
            setSearchedCitites(['']);
        }
    }, [searching, setSearchedCitites, setSearchInput, setSearchCity])
    
    const handleSearchUnfocus = () => {
        setSearching(false)
    }

    const handleSearch = () => {
        setSearchCity(searchInput);
    }

    let citiesList;
    searchedCities[0] != '' ? citiesList = <CitiesList cities={searchedCities} onSelect={setSearching} /> : citiesList = <></>
    let searchButton;
    searching ? searchButton = <button className={styles["search-button"]} onClick={handleSearch}>Search</button> : searchButton = <></>

    return (
        <div className={styles['sidebar']}>
            <div className={`${styles["cancel-search"]} ${!searching ? styles["hide"] : ""}`}>
                <button onClick={handleSearchUnfocus}></button>
            </div>
            <div className={styles['topbar']}>
                <input onFocus={handleSearchFocus} onChange={handleSearchChange} type="text" value={searchInput}
                    placeholder="Search for places" className={`${styles["searchbar"]} ${searching ? styles["focused"] : ''}`}>
                </input>
                <button onClick={handleLocationClicked} className={`${styles["location-button"]} ${searching ? styles["hide"] : ""}`}></button>
                {searchButton}
            </div>
            {citiesList}

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