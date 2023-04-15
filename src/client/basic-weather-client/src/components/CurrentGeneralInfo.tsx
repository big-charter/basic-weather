import React from "react";

const CurrentGeneralInfo = (props: { zipCode: string; currentData: any }) => {
  const timestampToDateString = (UNIX_timestamp: number) => {
    const date = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const dateString = month + " " + day + ", " + year;
    return dateString;
  };

  const timestampToTimeString = (UNIX_timestamp: number) => {
    return new Date(UNIX_timestamp * 1e3).toLocaleTimeString();
  };

  const basicDisplay = (data: any) => {
    const currentDateString = timestampToDateString(data.dt);
    const currentTimeString = timestampToTimeString(data.dt);
    const sunriseTimeString = timestampToTimeString(data.sunrise);
    const sunsetTimeString = timestampToTimeString(data.sunset);
    const currentTemp = Math.round(data.temp);
    const feelsLike = Math.round(data.feels_like);
    return (
      <>
        <p>
          {currentDateString} {currentTimeString}
        </p>
        <p>Sunrise: {sunriseTimeString}</p>
        <p>Sunset: {sunsetTimeString}</p>
        <p>Current Temp: {currentTemp}&#8457;</p>
        <p>Feels Like: {feelsLike}&#8457;</p>
      </>
    );
  };

  return (
    <div>
      <h2>Weather forecast for {props.zipCode}</h2>
      {basicDisplay(props.currentData)}
    </div>
  );
};

export default CurrentGeneralInfo;
