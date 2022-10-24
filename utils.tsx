import { cp } from "fs";
import { Dispatch, SetStateAction } from "react";
import { ICoords } from "./interfaces";

const DEFAULTDATA = {
  city: 'Paris',
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
}

async function getCoords(): Promise<ICoords | undefined> {
  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    if (navigator.geolocation != undefined) {
      const pos: any = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      return {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
    }
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  else {
    console.log("Could not get browser object");
  }
};

const formatDate = (date: Date) => {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${weekDays[date.getDay()]}, ${date.getDate()} ${Months[date.getMonth()]}`
}

const checkIfTomorrow = (date: Date) => {
  const oneDay = 1000 * 60 * 60 * 24;

  function getMidnight(day: Date) {
    const date = new Date(day);
    date.setMilliseconds(999);
    date.setSeconds(59);
    date.setMinutes(59);
    date.setHours(23);
    return date;
  }

  const midnightTonight = getMidnight(new Date());
  const midnightTomorrow = new Date(midnightTonight.getTime() + oneDay);
  
  return date > midnightTonight && date < midnightTomorrow;
}

const translateCondition = (code: number) => {
  if (code == 1000)
    return 'Clear';
  else if (code == 1003)
    return 'LightCloud';
  else if ([1006, 1009, 1030, 1135, 1147].includes(code))
    return 'HeavyCloud';
  else if (code == 1237)
    return 'Hail';
  else if (code == 1195)
    return 'HeavyRain';
  else if ([1180, 1183, 1186, 1189].includes(code))
    return 'LightRain';
  else if ([1186, 1063, 1192, 1240, 1243, 1246, 1249, 1252, 1255, 1258, 1261, 1264].includes(code))
    return 'Shower';
  else if ([1069, 1198, 1201, 1204, 1207].includes(code))
    return 'Sleet';
  else if ([1066, 1072, 1114, 1117, 1150, 1153, 1168, 1171, 1210, 1213, 1216, 1219, 1222, 1225].includes(code))
    return 'Snow';
  else if ([1087, 1273, 1276, 1279, 1282].includes(code))
    return 'Thunderstorm';
  else
    return 'Clear'
}

const setNewCoords = (setCoords: Dispatch<SetStateAction<ICoords>>, coords: ICoords) => {
  getCoords().then((newCoords) => {
    if (newCoords != undefined && JSON.stringify(newCoords) != JSON.stringify(coords)) {
      setCoords(newCoords)
    }
  })
}

export { formatDate, translateCondition, setNewCoords, checkIfTomorrow, DEFAULTDATA }