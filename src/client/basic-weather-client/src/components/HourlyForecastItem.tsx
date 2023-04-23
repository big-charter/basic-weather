import HourlyForecast from "@/models/HourlyForecast";
import React from "react";

const HourlyForecastItem = (props: { hourlyForecast: HourlyForecast }) => {
  return (
    <div className="card">
      <div className="card-body text-dark">
        <div>Time: {props.hourlyForecast.dt}</div>
        <div>Temp: {props.hourlyForecast.temp}</div>
        <div>Wind: {props.hourlyForecast.wind_speed}</div>
      </div>
    </div>
  );
};

export default HourlyForecastItem;
