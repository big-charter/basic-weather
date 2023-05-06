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
  return (
    <div>
      <h2>Weather forecast for {props.name}</h2>
      <div className="card mb-4 shadow-sm">
        <div className="card-body text-dark pb-0">
          <div className="row">
            <div className="col">
              <p>
                {timestampToDateString(props.currentData.dt)}{" "}
                {timestampToTimeString(props.currentData.dt)}
              </p>
              <p>
                <WeatherIcon icon={props.currentData.weather[0].icon} />
              </p>
              <p>
                {props.currentData.weather[0].main &&
                  props.currentData.weather[0].description && (
                    <p>
                      {props.currentData.weather[0].main};{" "}
                      {props.currentData.weather[0].description}
                    </p>
                  )}
              </p>
              <p>Sunrise: {timestampToTimeString(props.currentData.sunrise)}</p>
              <p>Sunset: {timestampToTimeString(props.currentData.sunset)}</p>
            </div>
            <div className="col">
              <p>Current Temp: {formatTemp(props.currentData.temp)}</p>
              <p>Feels Like: {formatTemp(props.currentData.feels_like)}</p>
              <p>Humidity: {props.currentData.humidity}%</p>
              <p>Wind: {formatWind(props.currentData.wind_speed)}</p>
              {props.currentData.wind_gust && (
                <p>Wind Gust: {formatWind(props.currentData.wind_gust)}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentGeneralInfo;
