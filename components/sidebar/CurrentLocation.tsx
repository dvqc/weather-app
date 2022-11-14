import styles from "styles/SideBar.module.scss"

export default function CurrentLocation ({ city, region, searching }: { city: string, region: string, searching: boolean }) {
    return (
        <div className={`${styles["current-location"]} ${searching ? styles["hide"] : ""}`}>
            <span></span>{city}, {region}
        </div>
    )
}