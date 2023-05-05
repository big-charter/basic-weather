import DailyForecast from "@/models/DailyForecast";
import React from "react";
import DailyForecastItem from "./DailyForecastItem";

const DailyForecastList = (props: { daily: DailyForecast[] }) => {
  return (
    <div className="h-50 row row-cols-1 vertical-scrollable g-4">
      {props.daily.map((dailyForecast: DailyForecast) => {
        return (
          <div className="col">
            <DailyForecastItem dailyForecast={dailyForecast} />
          </div>
        );
      })}
    </div>
  );
};

export default DailyForecastList;
