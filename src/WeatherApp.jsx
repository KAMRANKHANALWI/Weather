import React from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bengaluru",
    feelsLike: 22.84,
    humidity: 81,
    temp: 22.43,
    tempMax: 22.8,
    tempMin: 21.84,
    weather: "mist",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
};

export default WeatherApp;
