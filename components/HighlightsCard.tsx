import styles from "styles/Highlights.module.scss"

const HighlightsCard = ({ title, measurement, unit }: { title: string, measurement: number, unit: string }) => {

    return (
        <div className={styles["highlights-card"]}>
            <h2>{title}</h2>
            <p>{measurement}<span className={styles["highlights-unit"]}>{' '}{unit}</span></p>
        </div>
    )
}

export default HighlightsCard;