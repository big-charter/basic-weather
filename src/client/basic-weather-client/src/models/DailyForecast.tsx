import WeatherCondition from "./WeatherCondition";

type DailyForecast = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  // Brekaout?
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  // Breakout?
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherCondition[];
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};

export default DailyForecast;
