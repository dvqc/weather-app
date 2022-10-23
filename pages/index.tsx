import type { NextPage } from 'next'
import { useState } from 'react';
import ForecastContainer from '../components/ForcastContainer';
import ForecastCard from '../components/ForecastCard';
import HighlightsCard from '../components/HighlightsCard';
import HighlightsContainer from '../components/HighlightsContainer';
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
        <ForecastContainer></ForecastContainer>
      </div>
    </DataContext.Provider>
  )
}




export default Home
