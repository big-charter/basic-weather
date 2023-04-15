import React from "react";

const DailyForecastList = (props: any) => {
  return (
    <div className="card">
      <div className="card-body text-dark">
        {props.dailyForecast.map((day: any) => {
          console.log(day);
          return <div>{day}</div>;
        })}
      </div>
    </div>
  );
};

export default DailyForecastList;
