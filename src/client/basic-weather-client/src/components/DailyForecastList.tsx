import DailyForecast from "@/models/DailyForecast";
import React from "react";

const DailyForecastList = (props: { daily: DailyForecast[] }) => {
  return (
    <div className="card">
      <div className="card-body text-dark">
        {props.daily.map((dailyForecast: DailyForecast) => {
          return <div>{JSON.stringify(dailyForecast)}</div>;
        })}
      </div>
    </div>
  );
};

export default DailyForecastList;
