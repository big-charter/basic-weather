import DailyForecast from "@/models/DailyForecast";
import React from "react";
import DailyForecastItem from "./DailyForecastItem";

const DailyForecastList = (props: { daily: DailyForecast[] }) => {
  // Take first 5 days for now
  // TODO: actually select days based on something
  return (
    <div className="row row-cols-1 g-4">
      {props.daily.slice(0, 5).map((dailyForecast: DailyForecast) => {
        return <DailyForecastItem dailyForecast={dailyForecast} />;
      })}
    </div>
  );
};

export default DailyForecastList;
