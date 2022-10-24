import React from "react";
import styles from "styles/Highlights.module.scss"
import HighlightsCard from "./HighlightsCard";

const HighlightsContainer = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles["highlights-container"]}> 
            <h1 className={styles["highlights-title"]}>Today&apos;s Highlights</h1>
            <div className={styles["highlights-card-container"]}>
                {children}
            </div>
        </div>
    )
}

export default HighlightsContainer;