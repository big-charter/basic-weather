import DailyForecast from "@/models/DailyForecast";
import React from "react";
import DailyForecastItem from "./DailyForecastItem";

const DailyForecastList = (props: { daily: DailyForecast[] }) => {
  return (
    <div className="h-50 row row-cols-1 vertical-scrollable g-4 mt-4 mt-sm-0">
      {props.daily.map((dailyForecast: DailyForecast, index: number) => {
        return (
          <div key={index} className={`col ${index == 0 ? 'mt-0' : ''}`}>
            <DailyForecastItem dailyForecast={dailyForecast} />
          </div>
        );
      })}
    </div>
  );
};

export default DailyForecastList;
