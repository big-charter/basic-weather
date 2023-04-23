import CurrentWeather from "@/models/CurrentWeather";
import {
  formatTemp,
  formatWind,
  timestampToDateString,
  timestampToTimeString,
} from "@/util/util";

import React from "react";

const CurrentGeneralInfo = (props: {
  zipCode: string;
  currentData: CurrentWeather;
}) => {
  const basicDisplay = (data: any) => {
    const currentDateString = timestampToDateString(data.dt);
    const currentTimeString = timestampToTimeString(data.dt);
    const sunriseTimeString = timestampToTimeString(data.sunrise);
    const sunsetTimeString = timestampToTimeString(data.sunset);
    return (
      <>
        <p>
          {currentDateString} {currentTimeString}
        </p>
        <p>Sunrise: {sunriseTimeString}</p>
        <p>Sunset: {sunsetTimeString}</p>
        <p>Current Temp: {formatTemp(data.temp)}</p>
        <p>Feels Like: {formatTemp(data.feels_like)}</p>
        <p>Wind: {formatWind(data.wind_speed)}</p>
      </>
    );
  };

  return (
    <div>
      <h2>Weather forecast for {props.zipCode}</h2>
      <div className="card mb-4">
        <div className="card-body text-dark pb-0">
          {basicDisplay(props.currentData)}
        </div>
      </div>
    </div>
  );
};

export default CurrentGeneralInfo;
