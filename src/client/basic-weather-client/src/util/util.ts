export const timestampToDateString = (UNIX_timestamp: number): string => {
  return new Date(UNIX_timestamp * 1e3).toLocaleDateString([], {
    dateStyle: "medium",
  });
};

export const timestampToShortDateString = (UNIX_timestamp: number): string => {
  const date = new Date(UNIX_timestamp * 1e3);
  return (
    date.toLocaleDateString([], {
      weekday: "long",
    }) +
    ", " +
    date.toLocaleDateString([], {
      month: "long",
      day: "numeric",
    })
  );
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
