import styles from "styles/Highlights.module.scss"

const HighlightsCard = ({ title, measurement, unit, children }: {
    title: string, measurement: number, unit: string,
    children?: React.ReactNode
}) => {

    return (
        <div className={styles["highlights-card"]}>
            <h2>{title}</h2>
            <p>{measurement}<span className={styles["highlights-unit"]}>{' '}{unit}</span></p>
            {children}
        </div>
    )
}

export default HighlightsCard;