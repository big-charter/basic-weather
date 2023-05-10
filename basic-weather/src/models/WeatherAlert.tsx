type WeatherAlert = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  // Not good documentation on this
  tags: any;
};

export default WeatherAlert;
