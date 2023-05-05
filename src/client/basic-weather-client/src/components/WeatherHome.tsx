import React from "react";
import WeatherDataDisplay from "./WeatherDataDisplay";
import OneCallResponse from "@/models/OneCallResponse";
import getConfig from "next/config";
import { RingLoader } from "react-spinners";

const publicRuntimeConfig = getConfig().publicRuntimeConfig;

const WeatherHome = () => {
  const [weatherData, setWeatherData] = React.useState<OneCallResponse>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [initialZipCode, setInitialZipCode] = React.useState<string>("");
  const zipCodeRef = React.useRef<string>(initialZipCode);

  const fetchWeatherData = () => {
    // Do nothing if we haven't set a zip code
    if (zipCodeRef.current == "") {
      return;
    }
    setLoading(true);
    fetch(`http://localhost:3000/weather?zip=${zipCodeRef.current}`)
      .then((res) => res.json())
      .then((data: OneCallResponse) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
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

  // update the zipCodeRef when the zipCode state changes
  React.useEffect(() => {
    zipCodeRef.current = initialZipCode;
  }, [initialZipCode]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <label className="mb-1" htmlFor="zipCode">
                Zip code
              </label>
              <div className="form-group d-flex">
                <input
                  type="text"
                  id="zipCode"
                  value={initialZipCode}
                  onChange={(event) => setInitialZipCode(event.target.value)}
                />
                <button className="btn btn-dark mx-3" type="submit">
                  Get weather
                </button>
                {loading && <RingLoader size={30} />}
              </div>
            </form>
          </div>
        </div>
      </div>
      {weatherData && (
        <WeatherDataDisplay
          zipCode={zipCodeRef.current}
          weatherData={weatherData}
        />
      )}
    </>
  );
};

export default WeatherHome;
