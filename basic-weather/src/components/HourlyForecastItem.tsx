import HourlyForecast from "@/models/HourlyForecast";
import {
  formatDecimalToPercentage,
  formatTemp,
  formatWind,
  timestampToTimeString,
} from "@/util/util";
import React from "react";
import WeatherIcon from "./WeatherIcon";

const HourlyForecastItem = (props: { hourlyForecast: HourlyForecast }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-dark text-nowrap">
        <h5>{timestampToTimeString(props.hourlyForecast.dt)}</h5>
        <WeatherIcon icon={props.hourlyForecast.weather[0].icon} />
        <div>{formatTemp(props.hourlyForecast.temp)}</div>
        <div>{formatWind(props.hourlyForecast.wind_speed)}</div>
        <div>{formatDecimalToPercentage(props.hourlyForecast.pop)}</div>
      </div>
    </div>
  );
};

export default HourlyForecastItem;
