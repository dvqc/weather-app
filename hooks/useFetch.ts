import { useEffect, useState } from "react";
import { ICoords, ICurrentData } from "../interfaces";

const useFetch = (coord: ICoords | undefined) => {

    const [currentData, setData] = useState<ICurrentData>({
        city: 'Paris' ,
        region: 'Ile-de-France',
        country: 'France',
        condition: 0,
        condition_text: 'Unkown',
        temp_c: 0,
        temp_f: 0,
        wind: 0,
        pressure: 0,
        humidity: 0,
        vis_miles: 0,
    });
    console.log(currentData)
    useEffect(() => {

        if (coord != undefined) {
            const key = process.env.NEXT_PUBLIC_API_KEY_WA;
            fetch(`https://api.weatherapi.com/v1/current.json?origin=*&q=${coord.lat},${coord.lon}&key=${key}`,
                { method: 'GET' }).
                then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if (data != undefined) {
                        setData({
                            city: data.location.name,
                            region: data.location.region,
                            country: data.location.country,
                            condition: data.current.condition.code,
                            condition_text: data.current.condition.text,
                            temp_c: Math.round(data.current.temp_c),
                            temp_f: Math.round(data.current.temp_f),
                            wind: Math.round(data.current.wind_mph),
                            pressure: Math.round(data.current.pressure_mb),
                            humidity: Math.round(data.current.humidity),
                            vis_miles: data.current.vis_miles
                        })
                    }
                })
        }
    }, [coord]);
    return currentData;
}


export default useFetch;