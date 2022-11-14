import { createContext } from "react";
import {  IDataContext } from "interfaces";
import { DEFAULTDATA } from "utils";

const DataContext = createContext<IDataContext>({
    data: { ...DEFAULTDATA },
    setData: undefined
});

export default DataContext;