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

const TempUnitArr = ["C", "F"] as const;
type TempUnit = typeof TempUnitArr[number];

const WindDirObj = {
    N: 90,
    NEN: 67.5,
    NE: 45,
    NEE: 22.5,
    E: 0,
    SEE: 337.5,
    SE: 315,
    SES: 292.5,
    S: 270,
    SWS: 247.5,
    SW: 225,
    SWW: 202.5,
    W: 180,
    NWW: 157.5,
    NW: 135,
    NWN: 112.5,
} as const;

const WindDirkeys = ['N', 'NEN', 'NE', 'NEE', 'E', 'SEE', 'SE', 'SES', 'S', 'SWS',
    'SW', 'SWW', 'W', 'NWW', 'NW', 'NWN'] as const;

type WindDirection = typeof WindDirkeys[number];

export type { ICurrentData, ICoords, IDataContext, ISetData, TempUnit, IForecastData, WindDirection }
export { WindDirObj, TempUnitArr }