import CurrentGeneralInfo from "./CurrentGeneralInfo";
import DailyForecastList from "./DailyForecastList";
import HourlyForecastList from "./HourlyForecastList";

const WeatherDisplay = (props: { zipCode: string; weatherData: any }) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <div className="row">
            <div className="col">
              <CurrentGeneralInfo
                zipCode={props.zipCode}
                currentData={props.weatherData.current}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <HourlyForecastList
                hourlyForecast={["Hourly Item", "Hourly Item", "Hourly Item"]}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <DailyForecastList
            dailyForecast={["Daily Item", "Daily Item", "Daily Item"]}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
