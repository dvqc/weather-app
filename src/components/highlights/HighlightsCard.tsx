import classes from "@/styles/Highlights.module.scss";

const HighlightsCard = ({
  title,
  measurement,
  unit,
  children
}: {
  title: string;
  measurement: number;
  unit: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={classes["highlights-card"]}>
      <h2>{title}</h2>
      <p>
        {measurement}
        <span className={classes["highlights-unit"]}> {unit}</span>
      </p>
      {children}
    </div>
  );
};

export default HighlightsCard;
