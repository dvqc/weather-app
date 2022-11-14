import { useState } from 'react';
import type { NextPage } from 'next'

import { MainContainer, TempSwitch, WindIndicator, ProgressBar } from 'components';
import { ForecastCard } from 'components/forecast';
import ForecastContainer from 'components/forecast/ForcastContainer';
import { HighlightsContainer, HighlightsCard } from 'components/highlights';
import SideBar from 'components/sidebar/SideBar';
import { DataContext, TempContext } from 'contexts';
import { useFetchCoords, useFetchForecast } from 'hooks';
import { ICurrentData, ICoords, TempUnit, IForecastData, WindDirection } from 'interfaces';
import { DEFAULTDATA, setNewCoords } from 'utils';

const Home: NextPage = () => {
  const [coords, setCoords] = useState<ICoords>({ lat: 48.8566, lon: 2.3522 });// default to paris 
  const [data, setData] = useState<ICurrentData>(DEFAULTDATA);
  const [tempUnit, setTempUnit] = useState<TempUnit>('C');
  const [forecastData, setForecastData] = useState<[IForecastData]>()
  useFetchCoords(coords, setData);
  setNewCoords(setCoords, coords);
  useFetchForecast(data.city, setForecastData)

  return (
    <DataContext.Provider value={{ data, setData }}>
      <TempContext.Provider value={tempUnit}>
        <main>
          <SideBar coords={coords} setCoords={setCoords}></SideBar>
          <MainContainer>
            <TempSwitch units={['C', 'F']} selectUnit={setTempUnit} ></TempSwitch>
            <ForecastContainer>
              {forecastData ? forecastData.map((entry, key) => <ForecastCard key={key}
                forecastDay={{ ...entry }}></ForecastCard>) : <></>}
            </ForecastContainer>
            <HighlightsContainer>
              <HighlightsCard title={'Wind Status'} measurement={data.wind} unit={'mph'}>
                <WindIndicator direction={data.wind_dir as WindDirection}></WindIndicator>
              </HighlightsCard>
              <HighlightsCard title={'Humidity'} measurement={data.humidity} unit={'%'}>
                <ProgressBar percentage={data.humidity}></ProgressBar>
              </HighlightsCard>
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
