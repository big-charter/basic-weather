import express, { Express, Request, Response } from "express";
// Load .env
require("dotenv").config();

const app: Express = express();
const port = 3000;

// enable CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Please call /weather?zip=ZIPCODE" });
});

// GET /weather?zip=ZIPCODE
app.get("/weather", async (req: Request, res: Response) => {
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
      .then((data) => {
        // Then we can call the one call API
        // Exclude minute-by-minute weather for now
        fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=minutely&units=imperial&appid=${apiKey}`
        )
          .then((response) => response.json())
          .then((data) => {
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
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
