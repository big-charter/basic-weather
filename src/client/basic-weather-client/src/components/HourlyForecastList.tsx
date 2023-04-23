import HourlyForecast from "@/models/HourlyForecast";
import React from "react";

const HourlyForecastList = (props: { hourly: HourlyForecast[] }) => {
  return (
    <div className="card">
      <div className="card-body text-dark">
        {props.hourly.map((hourlyForecast: HourlyForecast) => {
          return <div>{JSON.stringify(hourlyForecast)}</div>;
        })}
      </div>
    </div>
  );
};

export default HourlyForecastList;
