import type { NextPage } from 'next'
import { useState } from 'react';
import ForecastContainer from '../components/ForcastContainer';
import ForecastCard from '../components/ForecastCard';
import HighlightsCard from '../components/HighlightsCard';
import HighlightsContainer from '../components/HighlightsContainer';
import SideBar from '../components/SideBar'
import TempSwitch from '../components/TempSwitch';
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
      <main>
        <SideBar coords={coords} setCoords={setCoords}></SideBar>
        <div>
          <TempSwitch units={['C','F']}></TempSwitch>
          <ForecastContainer>
            <ForecastCard conditionImg='Sleet'></ForecastCard>
            <ForecastCard conditionImg='Hail'></ForecastCard>
            <ForecastCard conditionImg='Clear'></ForecastCard>
            <ForecastCard conditionImg='Sleet'></ForecastCard>
            <ForecastCard conditionImg='Sleet'></ForecastCard>
          </ForecastContainer>
          <HighlightsContainer></HighlightsContainer>
        </div>
      </main>
    </DataContext.Provider>
  )
}




export default Home
