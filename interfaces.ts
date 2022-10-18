interface ICurrentData {
    city: string ,
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

interface ICoords {
    lat: number,
    lon: number
}

export type { ICurrentData, ICoords}