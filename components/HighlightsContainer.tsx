import styles from "styles/Highlights.module.scss"
import HighlightsCard from "./HighlightsCard";

const HighlightsContainer = () => {
    return (
        <div className={styles["highlights-container"]}> 
            <h1 className={styles["highlights-title"]}>Today&apos;s Highlights</h1>
            <div className={styles["highlights-card-container"]}>
                <HighlightsCard title={'Wind Status'} measurement={7} unit={'mph'}></HighlightsCard>
                <HighlightsCard title={'Humidity'} measurement={82} unit={'%'}></HighlightsCard>
                <HighlightsCard title={'Visibility'} measurement={6.4} unit={'miles'}></HighlightsCard>
                <HighlightsCard title={'Air Pressure'} measurement={998} unit={'mb'}></HighlightsCard>
            </div>
        </div>
    )
}

export default HighlightsContainer;