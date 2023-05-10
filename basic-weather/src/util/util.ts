import getConfig from "next/config";

const publicRuntimeConfig = getConfig().publicRuntimeConfig;

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

export const formatDecimalToPercentage = (decimal: number): string => {
  return Math.round(decimal * 100).toString() + "%";
};

// Calculate the refresh interval based on the current time and the configured window in next.config.js
export const calculateRefreshInterval = (): number => {
  const currentTime = new Date();
  let refreshInterval;

  const startTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    publicRuntimeConfig.highDemandWindowStartHour,
    0
  );
  const endTime = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    publicRuntimeConfig.highDemandWindowEndHour,
    0
  );

  // Update the refresh interval based on the current window
  if (currentTime >= startTime && currentTime < endTime) {
    refreshInterval = publicRuntimeConfig.highDemandWindowInterval * 60 * 1000;
  } else {
    refreshInterval = publicRuntimeConfig.lowDemandWindowInterval * 60 * 1000;
  }

  return refreshInterval;
};
