import CurrentWeather from "@/models/CurrentWeather";
import {
  formatTemp,
  formatWind,
  timestampToDateString,
  timestampToTimeString,
} from "@/util/util";

import React from "react";
import WeatherIcon from "./WeatherIcon";

const CurrentGeneralInfo = (props: {
  name: string;
  currentData: CurrentWeather;
}) => {
  const basicDisplay = (data: CurrentWeather) => {
    const currentDateString = timestampToDateString(data.dt);
    const currentTimeString = timestampToTimeString(data.dt);
    const sunriseTimeString = timestampToTimeString(data.sunrise);
    const sunsetTimeString = timestampToTimeString(data.sunset);
    console.log(data);
    return (
      <div className="row">
        <div className="col">
          <p>
            {currentDateString} {currentTimeString}
          </p>
          <p>
            <WeatherIcon icon={data.weather[0].icon} />
          </p>
          <p>
            {data.weather[0].main && data.weather[0].description && (
              <p>
                {data.weather[0].main}; {data.weather[0].description}
              </p>
            )}
          </p>
          <p>Sunrise: {sunriseTimeString}</p>
          <p>Sunset: {sunsetTimeString}</p>
        </div>
        <div className="col">
          <p>Current Temp: {formatTemp(data.temp)}</p>
          <p>Feels Like: {formatTemp(data.feels_like)}</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Wind: {formatWind(data.wind_speed)}</p>
          {data.wind_gust && <p>Wind Gust: {formatWind(data.wind_gust)}</p>}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2>Weather forecast for {props.name}</h2>
      <div className="card mb-4 shadow-sm">
        <div className="card-body text-dark pb-0">
          {basicDisplay(props.currentData)}
        </div>
      </div>
    </div>
  );
};

export default CurrentGeneralInfo;
