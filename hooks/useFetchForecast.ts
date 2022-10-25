
import { Dispatch, SetStateAction, useEffect } from "react";
import { IForecastData } from "../interfaces";

const useFetchForecast = (city: string, setForecastData: Dispatch<SetStateAction<[IForecastData] | undefined>>) => {
    useEffect(() => {
        if (city && city.length > 2) {
            const key = process.env.NEXT_PUBLIC_API_KEY_WA;
            fetch(`https://api.weatherapi.com/v1/forecast.json?origin=*&q=${city}&key=${key}&days=6&hour=12`,
                { method: 'GET' }).
                then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    if ('error' in data) {
                        console.log(data.error)
                        return
                    }
                    if (data != undefined) {
                        setForecastData(data.forecast.forecastday.map((entry: any) => {
                            return {
                                date: entry.date,
                                date_epoch: entry.date_epoch,
                                maxtemp_c: Math.round(entry.day.maxtemp_c),
                                maxtemp_f: Math.round(entry.day.maxtemp_f),
                                mintemp_c: Math.round(entry.day.mintemp_c),
                                mintemp_f: Math.round(entry.day.mintemp_f),
                                condition_code: Math.round(entry.day.condition.code),
                            }
                        }).slice(1))
                    }
                })
                .catch(err => console.log(err))
        }
    }, [city, setForecastData]);
}


export default useFetchForecast;
