import { Dispatch, SetStateAction } from "react"

interface ICurrentData {
    city: string,
    region: string,
    country: string,
    condition: number,
    condition_text: string,
    temp_c: number,
    temp_f: number,
    wind: number,
    pressure: number,
    humidity: number,
    vis_miles: number,
    wind_dir: string
}

interface IForecastData {
    date: string,
    date_epoch: number,
    maxtemp_c: number,
    maxtemp_f: number,
    mintemp_c: number,
    mintemp_f: number,
    condition_code: number
}

interface ISetData {
    (data: ICurrentData): void
}

interface IDataContext {
    data: ICurrentData,
    setData: Dispatch<SetStateAction<ICurrentData>> | undefined
}

interface ICoords {
    lat: number,
    lon: number
}

type TempUnit = "C" | "F";

const WindDirObj = {
    N: { dir: 'N', angle: 90 },
    NEN: { dir: 'NEN', angle: 67.5 },
    NE: { dir: 'NE', angle: 45 },
    NEE: { dir: 'NEE', angle: 22.5 },
    E: { dir: 'E', angle: 0 },
    SEE: { dir: 'SEE', angle: 337.5 },
    SE: { dir: 'SE', angle: 315 },
    SES: { dir: 'SES', angle: 292.5 },
    S: { dir: 'S', angle: 270 },
    SWS: { dir: 'SWS', angle: 247.5 },
    SW: { dir: 'SW', angle: 225 },
    SWW: { dir: 'SWW', angle: 202.5 },
    W: { dir: 'W', angle: 180 },
    NWW: { dir: 'NWW', angle: 157.5 },
    NW: { dir: 'NW', angle: 135 },
    NWN: { dir: 'NWN', angle: 112.5 },
} as const;



type WindDirection = typeof WindDirObj[keyof typeof WindDirObj];


export type { ICurrentData, ICoords, IDataContext, ISetData, TempUnit, IForecastData }