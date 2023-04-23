import HourlyForecast from "@/models/HourlyForecast";
import React from "react";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecastList = (props: { hourly: HourlyForecast[] }) => {
  return (
    <div className="horizontal-scrollable p-0">
      <div className="row flex-nowrap">
        {props.hourly.map((hourlyForecast: HourlyForecast) => {
          return <HourlyForecastItem hourlyForecast={hourlyForecast} />;
        })}
      </div>
    </div>
  );
};

export default HourlyForecastList;
