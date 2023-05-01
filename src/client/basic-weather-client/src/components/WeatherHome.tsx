import React from "react";
import WeatherDataDisplay from "./WeatherDataDisplay";
import OneCallResponse from "@/models/OneCallResponse";
import getConfig from "next/config";

const publicRuntimeConfig = getConfig().publicRuntimeConfig;

const WeatherHome = () => {
  const [weatherData, setWeatherData] = React.useState<OneCallResponse>();
  const [zipCode, setZipCode] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchWeatherData = () => {
    setLoading(true);
    fetch(`http://localhost:3000/weather?zip=${zipCode || "43215"}`)
      .then((res) => res.json())
      .then((data: OneCallResponse) => {
        setWeatherData(data);
        setLoading(false);
      });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchWeatherData();
  };

  // Poll for data based on configurable high demand window
  React.useEffect(() => {
    const interval = setInterval(() => {
      fetchWeatherData();
    }, calculateRefreshInterval());

    // clear the interval on unmount
    return () => clearInterval(interval);
  }, []);

  // calculate the refresh interval based on the current time and the configured periods
  function calculateRefreshInterval() {
    const currentTime = new Date();
    let refreshInterval;

    const startTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      publicRuntimeConfig.highDemandWindowStartHour,
      0
    );
    const endTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      publicRuntimeConfig.highDemandWindowEndHour,
      0
    );

    // Update the refresh interval based on the current window
    if (currentTime >= startTime && currentTime < endTime) {
      refreshInterval =
        publicRuntimeConfig.highDemandWindowInterval * 60 * 1000;
    } else {
      refreshInterval = publicRuntimeConfig.lowDemandWindowInterval * 60 * 1000;
    }

    return refreshInterval;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <label htmlFor="zipCode">Zip code</label>
              <div className="form-group">
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={(event) => setZipCode(event.target.value)}
                />
                <button className="btn btn-dark mx-3" type="submit">
                  Get weather
                </button>
              </div>
            </form>
          </div>
        </div>
        {loading && <div className="mt-3">Loading...</div>}
      </div>
      {weatherData && !loading && (
        <WeatherDataDisplay zipCode={zipCode} weatherData={weatherData} />
      )}
    </>
  );
};

export default WeatherHome;
