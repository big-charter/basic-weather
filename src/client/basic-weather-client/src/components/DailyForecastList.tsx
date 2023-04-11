import React from "react";

const DailyForecastList = (props: any) => {
  return (
    <div>
      <p>List</p>
      {props.children}
    </div>
  );
};

export default DailyForecastList;
