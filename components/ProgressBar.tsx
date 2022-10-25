import styles from "styles/Highlights.module.scss"

const ProgressBar = ({ percentage }: { percentage: number }) => {
    if (percentage > 100 || percentage < 0)
        return (
            <div>Invalid percentage</div>
        )
    else {
        return (
            <div className={styles['progress-container']}>
                <div className={styles['progress-percentage']}>0</div>
                <div className={styles['progress-percentage']}>50</div>
                <div className={styles['progress-percentage']}>100</div>
                <div className={styles['progress-bar-empty']}>
                    <div className={styles['progress-bar-full']} style={{maxWidth: percentage+'%'}}></div>
                </div>
                <div className={`${styles['progress-percentage']} ${styles['align-right']}`}>%</div>

            </div >
        )
    }
}

export default ProgressBar;