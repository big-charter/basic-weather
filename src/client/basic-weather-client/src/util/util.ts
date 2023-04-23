export const timestampToDateString = (UNIX_timestamp: number): string => {
  const date = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const dateString = month + " " + day + ", " + year;
  return dateString;
};

export const timestampToTimeString = (UNIX_timestamp: number): string => {
  return new Date(UNIX_timestamp * 1e3).toLocaleTimeString([], {
    timeStyle: "short",
  });
};

export const formatTemp = (temp: number): string => {
  return Math.round(temp).toString() + String.fromCharCode(8457);
};

export const formatWind = (wind: number): string => {
  return Math.round(wind).toString() + " mph";
};
