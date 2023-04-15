import React from "react";

const HourlyForecastList = (props: any) => {
  return (
    <div className="card">
      <div className="card-body text-dark">
        {props.hourlyForecast.map((hour: any) => {
          console.log(hour);
          return <div>{hour}</div>;
        })}
      </div>
    </div>
  );
};

export default HourlyForecastList;
