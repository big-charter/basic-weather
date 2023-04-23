import HourlyForecast from "@/models/HourlyForecast";
import React from "react";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecastList = (props: { hourly: HourlyForecast[] }) => {
  // Take first 4 hours for now
  // TODO: actually select hours based on something
  return (
    <div className="row">
      {props.hourly.slice(0, 4).map((hourlyForecast: HourlyForecast) => {
        return <HourlyForecastItem hourlyForecast={hourlyForecast} />;
      })}
    </div>
  );
};

export default HourlyForecastList;
