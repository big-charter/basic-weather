import DailyForecast from "@/models/DailyForecast";
import {
  formatDecimalToPercentage,
  formatTemp,
  formatWind,
  timestampToShortDateString,
} from "@/util/util";
import React from "react";
import WeatherIcon from "./WeatherIcon";

const DailyForecastItem = (props: { dailyForecast: DailyForecast }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body text-dark">
        <div className="row">
          <div className="col">
            <h5>{timestampToShortDateString(props.dailyForecast.dt)}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <WeatherIcon icon={props.dailyForecast.weather[0].icon} />
            <div>
              {formatTemp(props.dailyForecast.temp.min)} -{" "}
              {formatTemp(props.dailyForecast.temp.max)}
            </div>
            <div>{formatWind(props.dailyForecast.wind_speed)}</div>
          </div>
          <div className="col">
            <p>
              {formatDecimalToPercentage(props.dailyForecast.pop)} chance of
              precipitation
            </p>
            <p>
              Daytime Feels Like:{" "}
              {formatTemp(props.dailyForecast.feels_like.day)}
            </p>
            <p>Humidity: {props.dailyForecast.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecastItem;
