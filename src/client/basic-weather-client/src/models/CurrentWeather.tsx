type CurrentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
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
  // Not really sure what this is.
  // TODO: Once figured out, break out into its own type.
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};

export default CurrentWeather;
