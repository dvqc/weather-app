import classes from "@/styles/Forecast.module.scss";

const ForecastContainer = ({ children }: { children?: React.ReactNode }) => {
  return <div className={classes["forecast-container"]}>{children}</div>;
};

export default ForecastContainer;
