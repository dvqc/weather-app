import { useEffect, useState } from "react";

const useFetchCities = (city: string) => {
    const [currentCititesData, setCitiesData] = useState<[string]>(['']);
    useEffect(() => {
        const key = process.env.NEXT_PUBLIC_API_KEY_WA;
        fetch(`https://api.weatherapi.com/v1/search.json?origin=*&q=${city}&key=${key}`,
            { method: 'GET' }).
            then((response) => response.json())
            .then((data) => {
                if (data != undefined) {
                    setCitiesData({ ...data.map((entry: any) => entry.location.city) })
                }
            })
            .catch(err => console.log(err))
    }, [city]);
    return currentCititesData;
}


export default useFetchCities;