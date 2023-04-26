import DailyForecast from "@/models/DailyForecast";
import {
  formatTemp,
  formatWind,
  timestampToShortDateString,
} from "@/util/util";
import React from "react";
import WeatherIcon from "./WeatherIcon";

const DailyForecastItem = (props: { dailyForecast: DailyForecast }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <div className="card-body text-dark">
          <h5>{timestampToShortDateString(props.dailyForecast.dt)}</h5>
          <WeatherIcon icon={props.dailyForecast.weather[0].icon} />
          <div>
            {formatTemp(props.dailyForecast.temp.min)} -{" "}
            {formatTemp(props.dailyForecast.temp.max)}
          </div>
          <div>{formatWind(props.dailyForecast.wind_speed)}</div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecastItem;
