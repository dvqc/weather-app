import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar'
import DataContext from '../contexts/DataContext'
import useFetchCoords from '../hooks/useFetchCoords';
import { ICurrentData, ICoords } from '../interfaces';
import { setNewCoords } from '../utils';

const Home: NextPage = () => {
  const [coords, setCoords] = useState<ICoords>({ lat: 48.8566, lon: 2.3522 });// default to paris 
  const currentData: ICurrentData  = useFetchCoords(coords)

  useEffect(() => {
    setNewCoords(setCoords, coords);
  }, [coords]);

  return (
    <DataContext.Provider value={currentData}>
      <div>
        <SideBar coords={coords} setCoords={setCoords}></SideBar>
      </div>
    </DataContext.Provider>
  )
}




export default Home
