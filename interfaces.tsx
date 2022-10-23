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
type TempUnit = "C" | "F"

export type { ICurrentData, ICoords, IDataContext, ISetData, TempUnit }