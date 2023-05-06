import React from "react";
import WeatherDataDisplay from "./WeatherDataDisplay";
import OneCallResponse from "@/models/OneCallResponse";
import { RingLoader } from "react-spinners";
import { calculateRefreshInterval } from "@/util/util";

const WeatherHome = () => {
  const [weatherData, setWeatherData] = React.useState<OneCallResponse>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [hasError, setHasError] = React.useState<boolean>(false);
  const [initialZipCode, setInitialZipCode] = React.useState<string>("");
  // useRef to persist the zip code through refreshes
  const zipCodeRef = React.useRef<string>(initialZipCode);

  const fetchWeatherData = () => {
    // Do nothing if we haven't set a zip code
    if (zipCodeRef.current == "") {
      return;
    }
    setLoading(true);
    fetch(`/api/weather?zip=${zipCodeRef.current}`)
      .then((res) => res.json())
      .then((data: OneCallResponse) => {
        // There's probably a better way to check for an error
        if (!data || data.cod == "400") {
          setHasError(true);
        } else {
          setWeatherData(data);
          setHasError(false);
        }
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

  // Update the zipCodeRef when the zipCode state changes
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
        {hasError && (
          <div className="alert alert-danger mt-3 p-2">
            There was an error. Please try a different zip code.
          </div>
        )}
      </div>

      {weatherData && !hasError && (
        <WeatherDataDisplay
          zipCode={zipCodeRef.current}
          weatherData={weatherData}
        />
      )}
    </>
  );
};

export default WeatherHome;
