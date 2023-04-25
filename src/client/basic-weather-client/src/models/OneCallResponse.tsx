import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import MinutelyForecast from "./MinutelyForecast";
import WeatherAlert from "./WeatherAlert";

type OneCallResponse = {
  lat: number;
  lon: number;
  name: string;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
  minutely: MinutelyForecast[];
  hourly: HourlyForecast[];
  daily: DailyForecast[];
  alerts: WeatherAlert[];
};

export default OneCallResponse;
