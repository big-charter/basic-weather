export default function handler(req, res) {
  const { zip } = req.query;
  if (!zip) {
    console.error("Did not receive a zip code");
    res.status(500).json({ message: "Did not receive a zip code" });
    return;
  }

  try {
    const apiKey = process.env.API_KEY;
    // We have to get the lat and long from the zip code
    fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((zipData) => {
        // Then we can call the one call API
        // Exclude minute-by-minute weather for now
        fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${zipData.lat}&lon=${zipData.lon}&exclude=minutely&units=imperial&appid=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
            data.name = zipData.name;
            res.json(data);
          });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message:
        "Error retrieving weather data for zip code " + zip + ": " + error,
    });
  }
}
