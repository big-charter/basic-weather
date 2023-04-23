import DailyForecast from "@/models/DailyForecast";
import {
  formatTemp,
  formatWind,
  timestampToShortDateString,
} from "@/util/util";
import React from "react";

const DailyForecastItem = (props: { dailyForecast: DailyForecast }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body text-dark">
          <h5>{timestampToShortDateString(props.dailyForecast.dt)}</h5>
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
