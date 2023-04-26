import React from "react";
import WeatherDataDisplay from "./WeatherDataDisplay";
import OneCallResponse from "@/models/OneCallResponse";

const WeatherHome = () => {
  const [weatherData, setWeatherData] = React.useState<OneCallResponse>();
  const [zipCode, setZipCode] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    fetch(`http://localhost:3000/weather?zip=${zipCode}`)
      .then((res) => res.json())
      .then((data: OneCallResponse) => {
        setWeatherData(data);
        setLoading(false);
      });
  };

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
