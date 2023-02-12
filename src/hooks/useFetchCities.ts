import { WEATHER_API_KEY } from "@/utils";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useFetchCities = (city: string): [[string], Dispatch<SetStateAction<[string]>>] => {
  const [currentCititesData, setCitiesData] = useState<[string]>([""]);
  useEffect(() => {
    if (city && city.length > 2) {
      fetch(`https://api.weatherapi.com/v1/search.json?origin=*&q=${city}&key=${WEATHER_API_KEY}`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          if (data != undefined) {
            setCitiesData(data.map((entry: any) => entry.name));
          }
        })
        .catch((err) => console.log(err));
    }
  }, [city]);
  return [currentCititesData, setCitiesData];
};

export default useFetchCities;
