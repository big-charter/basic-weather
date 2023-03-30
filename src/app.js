const express = require("express");

const app = express();
const port = 3000;

// Serve the static directory
app.use(express.static("src"));

// Create a route for handling GET requests to the API endpoint
app.get("/weather", async (req, res) => {
  const { zip } = req.query;
  if (!zip) {
    console.error("Did not receive a zip code");
    res.status(500).json({ message: "Did not receive a zip code" });
    return;
  }

  try {
    const apiKey = "foo";
    fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=minutely&appid=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => res.json(data));
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error retrieving weather data for zip code" + zip });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
