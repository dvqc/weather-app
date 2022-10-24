import { useContext, useState } from "react"
import styles from "styles/SideBar.module.scss"
import DataContext from "../contexts/DataContext"
import useFetchByCity from "../hooks/useFetchByCity"


const CitiesList = ({ cities, setIsSearching }: { cities: [string], setIsSearching: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [selectedCity, setSelectedCity] = useState(-1);
    const { setData } = useContext(DataContext);
    useFetchByCity(cities[selectedCity], setData)

    const handleSelectCity = (e: React.MouseEvent<HTMLDivElement>, key: number) => {
        setSelectedCity(key)
        setIsSearching(false);
    }

    return (
        <div className={styles["cities-list"]}>
            {cities.slice(0, 5).map((city, i) => <CityItem key={i} cityName={city}
                selectCity={((e: React.MouseEvent<HTMLDivElement>) => handleSelectCity(e, i))} />)}
        </div>
    )
}

const CityItem = ({ cityName, selectCity }: { cityName: string, selectCity: React.MouseEventHandler<HTMLDivElement> }) => {

    return (
        <div className={styles["city-item"]} onClick={selectCity} >
            {cityName}
        </div>
    )
}
export default CitiesList;