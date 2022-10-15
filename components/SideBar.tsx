/* eslint-disable @next/next/no-img-element */
interface ICurrentData {
    region: string,
    country: string,
    condition: string,
    temp_c: number,
    temp_f: number,
    wind: number,
    pressure: number,
    humidity: number,
}

interface ICoords {
    lat: number,
    lon: number
}

import { useEffect, useRef, useState } from "react"
import styles from "styles/SideBar.module.scss"

const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.topbar}>
                <input type="text" placeholder="Search for places" className={styles.searchbar}></input>
                <button className={styles["location-button"]}></button>
            </div>
            <CurrentWeatherImage />
            <CurrentWeatherTemp temp={15} unit={"C"}></CurrentWeatherTemp>
            <CurrentWeatherType type={"Shower"} />
            <CurrentDate />
            <CurrentLocation />
        </div>
    )
}
const CurrentWeatherImage = () => {
    return (
        <div className={styles["current-weather-img"]}>
            <img src="/images/weather_types/Shower.png" alt='current weather image' />
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

const CurrentWeatherType = ({ type }: { type: string }) => {
    return (
        <div className={styles["current-weather-type"]}>
            {type}
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
// 1- render default city 
// 2- get location
// 3- fetch data 
// 4- render new data
// 
const CurrentLocation = () => {
    const [coord, setCoord] = useState<ICoords>({ lat: 48.8566, lon: 2.3522 });// default to paris 
    const [location, setLocation] = useState('');

    useEffect(() => {
        fetchData(coord);
        getCoords().then((coords) => {
            if (coords != undefined && JSON.stringify(coords) != JSON.stringify(coord))
                setCoord(coords)
        })
    }, [coord]);

    return (
        <div className={styles["current-location"]}>
            <span></span>{location}
        </div>
    )

    async function getCoords(): Promise<ICoords | undefined> {
        if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
            if (navigator.geolocation != undefined) {
                const pos: any = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                console.log('pos' + pos)
                return {
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                };
            }
            else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
        else {
            console.log("Could not get browser object");
        }
    };
    
    function fetchData(coord: ICoords | undefined) {
        if (coord != undefined) {
            const key = process.env.NEXT_PUBLIC_API_KEY_WA;
            fetch(`https://api.weatherapi.com/v1/current.json?origin=*&q=${coord.lat},${coord.lon}&key=${key}`,
                { method: 'GET' })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    setLocation(data.location.region)
                });
        }
    }
}




const formatDate = (date: Date) => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${weekDays[date.getDay()]}, ${date.getDate()} ${Months[date.getMonth()]}`
}




export default SideBar