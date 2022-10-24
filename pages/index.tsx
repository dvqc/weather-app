import type { NextPage } from 'next'
import { useState } from 'react';
import ForecastContainer from '../components/ForcastContainer';
import ForecastCard from '../components/ForecastCard';
import HighlightsCard from '../components/HighlightsCard';
import HighlightsContainer from '../components/HighlightsContainer';
import MainContainer from '../components/MainContainer';
import SideBar from '../components/SideBar'
import TempSwitch from '../components/TempSwitch';
import DataContext from '../contexts/DataContext'
import TempContext from '../contexts/TempContext';
import useFetchCoords from '../hooks/useFetchCoords';
import { ICurrentData, ICoords, TempUnit } from '../interfaces';
import { DEFAULTDATA, setNewCoords } from '../utils';

const Home: NextPage = () => {
  const [coords, setCoords] = useState<ICoords>({ lat: 48.8566, lon: 2.3522 });// default to paris 
  const [data, setData] = useState<ICurrentData>(DEFAULTDATA);
  const [tempUnit, setTempUnit] = useState<TempUnit>('C');
  useFetchCoords(coords, setData);
  setNewCoords(setCoords, coords);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <TempContext.Provider value={tempUnit}>
        <main>
          <SideBar coords={coords} setCoords={setCoords}></SideBar>
          <MainContainer>
            <TempSwitch units={['C', 'F']} selectUnit={setTempUnit} ></TempSwitch>
            <ForecastContainer>
              <ForecastCard conditionImg='Sleet'></ForecastCard>
              <ForecastCard conditionImg='Hail'></ForecastCard>
              <ForecastCard conditionImg='Clear'></ForecastCard>
              <ForecastCard conditionImg='Sleet'></ForecastCard>
              <ForecastCard conditionImg='Sleet'></ForecastCard>
            </ForecastContainer>
            <HighlightsContainer>
              <HighlightsCard title={'Wind Status'} measurement={data.wind} unit={'mph'}></HighlightsCard>
              <HighlightsCard title={'Humidity'} measurement={data.humidity} unit={'%'}></HighlightsCard>
              <HighlightsCard title={'Visibility'} measurement={data.vis_miles} unit={'miles'}></HighlightsCard>
              <HighlightsCard title={'Air Pressure'} measurement={data.pressure} unit={'mb'}></HighlightsCard>
            </HighlightsContainer>
          </MainContainer>
        </main>
      </TempContext.Provider>
    </DataContext.Provider>
  )
}




export default Home
