/* eslint-disable @next/next/no-img-element */
import React, { Dispatch, SetStateAction, useContext, useEffect, useRef, useState } from "react";
import classes from "@/styles/SideBar.module.scss";
import DataContext from "@/contexts/DataContext";
import TempContext from "@/contexts/TempContext";
import useFetchCities from "@/hooks/useFetchCities";
import { ICoords, TempUnit } from "@/interfaces";
import { formatDate, setNewCoords, translateCondition } from "@/utils";
import CitiesList from "./CitiesList";

const SideBar = ({ setCoords, coords }: { setCoords: Dispatch<SetStateAction<ICoords>>; coords: ICoords }) => {
  const { data, setData } = useContext(DataContext);
  const tempUnit = useContext(TempContext);

  const [searchInput, setSearchInput] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searching, setIsSearching] = useState(false);
  const [searchedCities, setSearchedCitites] = useFetchCities(searchCity);

  const handleLocationClicked = () => {
    setNewCoords(setCoords, coords);
  };

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value);
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchUnfocus = () => {
    setIsSearching(false);
  };

  const handleSearch = () => {
    setSearchCity(searchInput);
  };

  useEffect(() => {
    if (!searching) {
      setSearchInput("");
      setSearchCity("");
      setSearchedCitites([""]);
    }
  }, [searching, setSearchedCitites, setSearchInput, setSearchCity]);

  let citiesList;
  searchedCities[0] != ""
    ? (citiesList = <CitiesList cities={searchedCities} setIsSearching={setIsSearching} />)
    : (citiesList = <></>);
  let searchButton;
  searching
    ? (searchButton = (
        <button className={classes["search-button"]} onClick={handleSearch}>
          Search
        </button>
      ))
    : (searchButton = <></>);

  return (
    <div className={`${classes["sidebar"]} ${searching ? classes["focused"] : ""}`}>
      <div className={`${classes["cancel-search"]} ${!searching ? classes["hide"] : ""}`}>
        <button onClick={handleSearchUnfocus}></button>
      </div>
      <div className={classes["topbar"]}>
        <input
          onFocus={handleSearchFocus}
          onChange={handleSearchChange}
          type="text"
          value={searchInput}
          placeholder="Search for places"
          className={`${classes["searchbar"]} ${searching ? classes["focused"] : ""}`}
        ></input>
        <button
          onClick={handleLocationClicked}
          className={`${classes["location-button"]} ${searching ? classes["hide"] : ""}`}
        ></button>
        {searchButton}
      </div>
      {citiesList}

      <CurrentWeatherImage searching={searching} conditionImg={translateCondition(data.condition)} />
      <div>
        <CurrentWeatherTemp
          searching={searching}
          temp={tempUnit == "C" ? data.temp_c : data.temp_f}
          unit={tempUnit}
        ></CurrentWeatherTemp>
        <CurrentWeatherType searching={searching} conditionText={data.condition_text} />
      </div>
      <div>
        <CurrentDate searching={searching} />
        <CurrentLocation searching={searching} city={data.city} region={data.region} />
      </div>
    </div>
  );
};

const CurrentWeatherImage = ({ conditionImg, searching }: { conditionImg: string; searching: boolean }) => {
  return (
    <div className={`${classes["current-weather-img"]} ${searching ? classes["hide"] : ""}`}>
      <img src={`/images/conditions/${conditionImg}.png`} alt="current weather image" />
    </div>
  );
};

const CurrentWeatherTemp = ({ temp, unit, searching }: { temp: number; unit: TempUnit; searching: boolean }) => {
  return (
    <div className={`${classes["current-weather-temp"]} ${searching ? classes["hide"] : ""}`}>
      {temp}
      <span>°{unit}</span>
    </div>
  );
};

const CurrentWeatherType = ({ conditionText, searching }: { conditionText: string; searching: boolean }) => {
  return (
    <div className={`${classes["current-weather-type"]} ${searching ? classes["hide"] : ""}`}>{conditionText}</div>
  );
};

const CurrentDate = ({ searching }: { searching: boolean }) => {
  return (
    <div className={`${classes["current-date"]} ${searching ? classes["hide"] : ""}`}>
      Today<span>·</span>
      {formatDate(new Date())}
    </div>
  );
};

const CurrentLocation = ({ city, region, searching }: { city: string; region: string; searching: boolean }) => {
  return (
    <div className={`${classes["current-location"]} ${searching ? classes["hide"] : ""}`}>
      <span></span>
      {city}, {region}
    </div>
  );
};

export default SideBar;
