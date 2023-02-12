/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import classes from "@/styles/Forecast.module.scss";
import TempContext from "@/contexts/TempContext";
import { IForecastData } from "@/interfaces";
import { checkIfTomorrow, formatDate, translateCondition } from "@/utils";

const ForecastCard = ({ forecastDay }: { forecastDay: IForecastData }) => {
  const tempUnit = useContext(TempContext);
  const date = new Date(forecastDay.date_epoch * 1000);
  const formatedDate = checkIfTomorrow(date) ? "Tomorrow" : formatDate(date);

  return (
    <div className={classes["forecast-card"]}>
      <p className={classes["forecast-date"]}>{formatedDate}</p>
      <img
        src={`/images/conditions/${translateCondition(forecastDay.condition_code)}.png`}
        alt="forecast weather image"
      />
      <div className={classes["forecast-temp"]}>
        <p className={classes["day-temp"]}>
          {tempUnit == "C" ? forecastDay.maxtemp_c : forecastDay.maxtemp_f}°{tempUnit}
        </p>
        <p className={classes["night-temp"]}>
          {tempUnit == "C" ? forecastDay.mintemp_c : forecastDay.mintemp_f}°{tempUnit}
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;
