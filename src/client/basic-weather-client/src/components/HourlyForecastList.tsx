import HourlyForecast from "@/models/HourlyForecast";
import React from "react";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecastList = (props: { hourly: HourlyForecast[] }) => {
  return (
    <div>
      {props.hourly.map((hourlyForecast: HourlyForecast) => {
        return <HourlyForecastItem hourlyForecast={hourlyForecast} />;
      })}
    </div>
  );
};

export default HourlyForecastList;
