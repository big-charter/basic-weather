type HourlyForecast = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  // WeatherCondition
  // TODO: Breakout
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  pop: number;
};

export default HourlyForecast;
