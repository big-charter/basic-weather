import HourlyForecast from "@/models/HourlyForecast";
import React from "react";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecastList = (props: { hourly: HourlyForecast[] }) => {
  return (
    <div className="horizontal-scrollable">
      <div className="row flex-nowrap">
        {props.hourly.map((hourlyForecast: HourlyForecast, index: number) => {
          return (
            <div key={index} className="col py-2">
              <HourlyForecastItem hourlyForecast={hourlyForecast} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecastList;
