import React from "react";
import styles from "styles/Main.module.scss"

const MainContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles['main-container']}>
            {children}
        </div>
    )
}

export default MainContainer;