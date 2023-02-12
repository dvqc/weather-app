import classes from "@/styles/Highlights.module.scss";

const ProgressBar = ({ percentage }: { percentage: number }) => {
  if (percentage > 100 || percentage < 0) return <div>Invalid percentage</div>;
  else {
    return (
      <div className={classes["progress-container"]}>
        <div className={classes["progress-percentage"]}>0</div>
        <div className={classes["progress-percentage"]}>50</div>
        <div className={classes["progress-percentage"]}>100</div>
        <div className={classes["progress-bar-empty"]}>
          <div className={classes["progress-bar-full"]} style={{ maxWidth: percentage + "%" }}></div>
        </div>
        <div className={`${classes["progress-percentage"]} ${classes["align-right"]}`}>%</div>
      </div>
    );
  }
};

export default ProgressBar;
