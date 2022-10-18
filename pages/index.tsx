import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar'
import DataContext from '../contexts/DataContext'
import useFetch from '../hooks/useFetch';
import { ICurrentData, ICoords } from '../interfaces';

const Home: NextPage = () => {
  const [coords, setCoords] = useState<ICoords>({ lat: 48.8566, lon: 2.3522 });// default to paris 
  const currentData: ICurrentData = useFetch(coords)

  useEffect(() => {
    getCoords().then((newCoords) => {
      if (newCoords != undefined && JSON.stringify(newCoords) != JSON.stringify(coords)) {
        setCoords(newCoords)
        console.log(coords)
      }
    })
  }, [coords]);

  return (
    <DataContext.Provider value={currentData}>
      <div>
        <SideBar></SideBar>
      </div>
    </DataContext.Provider>
  )
}

async function getCoords(): Promise<ICoords | undefined> {
  if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
    if (navigator.geolocation != undefined) {
      const pos: any = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      console.log(pos)
      return {
        lat: 37, //pos.coords.latitude,
        lon: 1 //pos.coords.longitude,
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



export default Home
