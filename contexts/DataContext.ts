import { createContext } from "react";
import { ICurrentData } from "../interfaces";

const DataContext = createContext<ICurrentData>({
    city: 'Paris' ,
    region: 'Ile-de-France',
    country: 'France',
    condition: 0,
    condition_text: 'Uknown',
    temp_c: 0,
    temp_f: 0,
    wind: 0,
    pressure: 0,
    humidity: 0,
    vis_miles:0,
});

export default DataContext;