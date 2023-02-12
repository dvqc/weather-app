import { FC, useState } from "react";

import DataContext from "@/contexts/DataContext";
import TempContext from "@/contexts/TempContext";
import useFetchCoords from "@/hooks/useFetchCoords";
import useFetchForecast from "@/hooks/useFetchForecast";
import { ICurrentData, ICoords, TempUnit, IForecastData, WindDirection } from "@/interfaces";
import { DEFAULTDATA, setNewCoords } from "@/utils";

import { ForecastContainer, ForecastCard } from "@/components/forecast";
import { HighlightsCard, HighlightsContainer, ProgressBar, WindIndicator } from "@/components/highlights";
import MainContainer from "@/components/MainContainer";
import { SideBar } from "@/components/sidebar";
import TempSwitch from "@/components/TempSwitch";

const App: FC = () => {
  const [coords, setCoords] = useState<ICoords>({ lat: 48.8566, lon: 2.3522 }); // default to paris
  const [data, setData] = useState<ICurrentData>(DEFAULTDATA);
  const [tempUnit, setTempUnit] = useState<TempUnit>("C");
  const [forecastData, setForecastData] = useState<[IForecastData]>();
  useFetchCoords(coords, setData);
  setNewCoords(setCoords, coords);
  useFetchForecast(data.city, setForecastData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <TempContext.Provider value={tempUnit}>
        <main>
          <SideBar coords={coords} setCoords={setCoords}></SideBar>
          <MainContainer>
            <TempSwitch units={["C", "F"]} selectUnit={setTempUnit}></TempSwitch>
            <ForecastContainer>
              {forecastData ? (
                forecastData.map((entry, key) => <ForecastCard key={key} forecastDay={{ ...entry }}></ForecastCard>)
              ) : (
                <></>
              )}
            </ForecastContainer>
            <HighlightsContainer>
              <HighlightsCard title={"Wind Status"} measurement={data.wind} unit={"mph"}>
                <WindIndicator direction={data.wind_dir as WindDirection}></WindIndicator>
              </HighlightsCard>
              <HighlightsCard title={"Humidity"} measurement={data.humidity} unit={"%"}>
                <ProgressBar percentage={data.humidity}></ProgressBar>
              </HighlightsCard>
              <HighlightsCard title={"Visibility"} measurement={data.vis_miles} unit={"miles"}></HighlightsCard>
              <HighlightsCard title={"Air Pressure"} measurement={data.pressure} unit={"mb"}></HighlightsCard>
            </HighlightsContainer>
          </MainContainer>
        </main>
      </TempContext.Provider>
    </DataContext.Provider>
  );
};

export default App;
