import { createContext } from "react";
import { TempUnit } from "../interfaces";

const TempContext = createContext<TempUnit>("C");

export default TempContext;
