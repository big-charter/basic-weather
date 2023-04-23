import DailyForecast from "@/models/DailyForecast";
import React from "react";

const DailyForecastItem = (props: { dailyForecast: DailyForecast }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body text-dark">
          <div>Time: {props.dailyForecast.dt}</div>
          <div>Temp: {props.dailyForecast.temp.day}</div>
          <div>Wind: {props.dailyForecast.wind_speed}</div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecastItem;
