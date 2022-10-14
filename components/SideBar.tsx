import type { NextComponentType } from "next"
import styles from "styles/SideBar.module.scss"
const SideBar: NextComponentType = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.topbar}>
                <input type="text" placeholder="Search for places" className={styles.searchbar}></input>
                <button className={styles["location-button"]}></button>

            </div>
            <div className={styles["current_weather"]}>

            </div>
        </div>
    )
}

export default SideBar