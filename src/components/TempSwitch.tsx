import { useState } from "react";
import { TempUnit } from "../interfaces";
import classes from "@/styles/Main.module.scss";

const TempSwitch = ({
  units,
  selectUnit
}: {
  units: TempUnit[];
  selectUnit: React.Dispatch<React.SetStateAction<TempUnit>>;
}) => {
  const [selectedUnit, setSelectedUnit] = useState(0);

  const handleSelectTemp = (e: React.MouseEvent<HTMLButtonElement>, key: number) => {
    setSelectedUnit(key);
    selectUnit(units[key]);
  };

  return (
    <div className={classes["temp-switch"]}>
      {units.map((u, i) => (
        <button
          key={i}
          className={i == selectedUnit ? `${classes["temp-unit-select"]}` : `${classes["temp-unit"]}`}
          onClick={(e) => handleSelectTemp(e, i)}
        >
          °{u}
        </button>
      ))}
    </div>
  );
};

export default TempSwitch;
