import DailyForecast from "@/models/DailyForecast";
import React from "react";
import DailyForecastItem from "./DailyForecastItem";

const DailyForecastList = (props: { daily: DailyForecast[] }) => {
  return (
    <div>
      {props.daily.map((dailyForecast: DailyForecast) => {
        return <DailyForecastItem dailyForecast={dailyForecast} />;
      })}
    </div>
  );
};

export default DailyForecastList;
