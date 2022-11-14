import styles from "styles/SideBar.module.scss"
import { formatDate } from "utils"

export default function CurrentDate ({ searching }: { searching: boolean }) {
    return (
        <div className={`${styles["current-date"]} ${searching ? styles["hide"] : ""}`}>
            Today<span>·</span>{formatDate(new Date())}
        </div>
    )
}