const WeatherIcon = (props: { icon: string }) => {
  return <img src={`https://openweathermap.org/img/wn/${props.icon}.png`} />;
};

export default WeatherIcon;
