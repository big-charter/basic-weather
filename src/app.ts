import express, { Express, Request, Response } from "express";
// Load .env
require("dotenv").config();

const app: Express = express();
const port = 3000;

// Serve the static directory
app.use(express.static("src"));

// Handle GET /weather?zip=ZIPCODE
app.get("/weather", async (req: Request, res: Response) => {
  const { zip } = req.query;
  if (!zip) {
    console.error("Did not receive a zip code");
    res.status(500).json({ message: "Did not receive a zip code" });
    return;
  }

  try {
    const apiKey = process.env.API_KEY;
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
