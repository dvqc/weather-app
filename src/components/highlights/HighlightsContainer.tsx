import React from "react";
import classes from "@/styles/Highlights.module.scss";

const HighlightsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes["highlights-container"]}>
      <h1 className={classes["highlights-title"]}>Today&apos;s Highlights</h1>
      <div className={classes["highlights-card-container"]}>{children}</div>
    </div>
  );
};

export default HighlightsContainer;
