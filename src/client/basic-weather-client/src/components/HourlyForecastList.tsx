import React from "react";

const HourlyForecastList = (props: any) => {
  return (
    <div>
      <p>List</p>
      {props.children}
    </div>
  );
};

export default HourlyForecastList;
