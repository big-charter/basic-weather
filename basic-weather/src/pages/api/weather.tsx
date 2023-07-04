export const config = {
  api: {
    externalResolver: true,
  },
};

export default async function handler(req: any, res: any) {
  const { zip } = req.query;

  if (!zip) {
    console.error("Did not receive a zip code");
    return res.status(500).json({ message: "Did not receive a zip code" });
  }

  try {
    const apiKey = process.env.API_KEY;

    const zipResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${apiKey}`
    );
    const zipData = await zipResponse.json();

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${zipData.lat}&lon=${zipData.lon}&exclude=minutely&units=imperial&appid=${apiKey}`
    );
    const data = await weatherResponse.json();

    data.name = zipData.name;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: `Error retrieving weather data for zip code ${zip}: ${error}`,
    });
  }
}
