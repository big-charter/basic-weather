import OneCallResponse from "@/models/OneCallResponse";
import CurrentGeneralInfo from "./CurrentGeneralInfo";
import DailyForecastList from "./DailyForecastList";
import HourlyForecastList from "./HourlyForecastList";

const WeatherDataDisplay = (props: {
  zipCode: string;
  weatherData: OneCallResponse;
}) => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col w-50">
          <div className="row">
            <div className="col">
              <CurrentGeneralInfo
                name={props.weatherData.name}
                currentData={props.weatherData.current}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <HourlyForecastList hourly={props.weatherData.hourly} />
            </div>
          </div>
        </div>
        <div className="col">
          <DailyForecastList daily={props.weatherData.daily} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDataDisplay;
