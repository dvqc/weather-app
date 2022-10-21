import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar'
import DataContext from '../contexts/DataContext'
import useFetchCoords from '../hooks/useFetchCoords';
import { ICurrentData, ICoords } from '../interfaces';
import { DEFAULTDATA, setNewCoords } from '../utils';

const Home: NextPage = () => {
  const [coords, setCoords] = useState<ICoords>({ lat: 48.8566, lon: 2.3522 });// default to paris 
  const [data, setData] = useState<ICurrentData>(DEFAULTDATA)
  useFetchCoords(coords, setData)
  setNewCoords(setCoords, coords)

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div>
        <SideBar coords={coords} setCoords={setCoords}></SideBar>
      </div>
    </DataContext.Provider>
  )
}




export default Home
