import { WEATHER_API_KEY } from "@/utils";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ICurrentData } from "../interfaces";

const useFetchByCity = (city: string, setData: Dispatch<SetStateAction<ICurrentData>> | undefined) => {
  useEffect(() => {
    if (setData && city && city.length > 2) {
      fetch(`https://api.weatherapi.com/v1/current.json?origin=*&q=${city}&key=${WEATHER_API_KEY}`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => {
          if ("error" in data) {
            console.log(data.error);
            return;
          }
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
              vis_miles: data.current.vis_miles,
              wind_dir: data.current.wind_dir
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }, [city, setData]);
};

export default useFetchByCity;
