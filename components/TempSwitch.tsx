import { useState } from "react";
import { TempUnit } from "interfaces";
import styles from "styles/Main.module.scss"

const TempSwitch = ({ units, selectUnit }: {
    units: TempUnit[],
    selectUnit: React.Dispatch<React.SetStateAction<TempUnit>>
}) => {

    const [selectedUnit, setSelectedUnit] = useState(0)

    const handleSelectTemp = (e: React.MouseEvent<HTMLButtonElement>, key: number) => {
        setSelectedUnit(key)
        selectUnit(units[key])
    }
    
    return (
        <div className={styles['temp-switch']}>
            {units.map((u, i) => <button key={i} className={i == selectedUnit ? `${styles['temp-unit-select']}` : `${styles['temp-unit']}`}
                onClick={((e) => handleSelectTemp(e, i))}>°{u}</button>)}
        </div>
    )
}

export default TempSwitch;