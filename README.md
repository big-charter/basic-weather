# Basic Weather App

This is a basic weather app built using the Next.js framework and the OpenWeatherMap API. The app is written in TypeScript and is designed as a practice project for JavaScript/TypeScript and React development.

## Features

- Get current weather information for a given location by zip code.
- Display weather data including temperature, weather condition, and icon; displays for current, daily, and hourly forecasts.
- Automatically refreshes weather data at specified intervals.

## Technologies Used

- Next.js: A React framework for server-rendered React applications.
- TypeScript: A statically typed superset of JavaScript.
- OpenWeatherMap API: A free API for accessing weather data from around the world.

## Prerequisites

- Node.js: Make sure you have Node.js installed on your local machine.
- OpenWeatherMap API Key: You need to sign up for a free account on OpenWeatherMap and obtain an API key to fetch weather data.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the root folder of the project.
3. Install dependencies by running `npm install` or `yarn install`.
4. Create a `.env` file in src/basic-weather-client and add your OpenWeatherMap API key as follows:

```
API_KEY = YOUR_API_KEY
```

5. Configure the automatic weather data refresh by modifying the `next.config.js` file in the root folder of the project. Set the start time of the high demand window (in hours, using the 24-hour clock) with `highDemandWindowStartHour`, the end time of the high demand window with `highDemandWindowEndHour`, the number of minutes to wait in between refreshes during the high demand window with `highDemandWindowInterval`, and the number of minutes to wait in between refreshes outside of the high demand window with `lowDemandWindowInterval`.
6. Start the Next.js app by running `npm run dev` or `yarn dev`.
7. Open your web browser and go to `http://localhost:3000` to access the app.

## Usage

- Enter the zip code in the search input field.
- Click the "Get Weather" button or press Enter to fetch weather data for the specified location.
- The weather data including temperature, weather condition, and icon, for current, daily, and hourly forecasts will be displayed on the screen.
- Weather data will be automatically refreshed at the intervals specified in the `next.config.js` file.

## Contributing

If you would like to contribute to the development of the Basic Weather App, feel free to fork the repository, make changes, and submit a pull request. Please follow the standard coding conventions and commit guidelines.

## License

This project is open-source and available under the MIT License.

## Acknowledgements

- Next.js
- TypeScript
- OpenWeatherMap API
