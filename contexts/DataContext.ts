import { createContext } from "react";
import { ICurrentData } from "../interfaces";
import { DEFAULTDATA } from "../utils";

const DataContext = createContext<ICurrentData>(DEFAULTDATA);

export default DataContext;