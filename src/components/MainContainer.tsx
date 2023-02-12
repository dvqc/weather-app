import React from "react";
import classes from "@/styles/Main.module.scss";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes["main-container"]}>{children}</div>;
};

export default MainContainer;
