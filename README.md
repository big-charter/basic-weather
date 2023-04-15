# Basic Weather App

This is a basic weather app built using an Express API and called by a Next.js app, all written in TypeScript. The app is a little over-engineered to serve as a practice project for JavaScript/TypeScript and React development. It utilizes the OpenWeatherMap API to fetch weather data.

## Features

- Get current weather information for a given location by zip code
- Display weather data including temperature, weather condition, and icon; displays for current, daily, and hourly forecasts.
- Supports searching for weather data for multiple locations

## Technologies Used

- Express: A fast and minimal web application framework for Node.js
- Next.js: A React framework for server-rendered React applications
- TypeScript: A statically typed superset of JavaScript
- OpenWeatherMap API: A free API for accessing weather data from around the world

## Prerequisites

- Node.js: Make sure you have Node.js installed on your local machine.
- OpenWeatherMap API Key: You need to sign up for a free account on OpenWeatherMap and obtain an API key to fetch weather data.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the root folder of the project.
3. Install dependencies by running `npm install` or `yarn install`.
4. Create a `.env` file in the root folder of the project and add your OpenWeatherMap API key as follows:

```
API_KEY = YOUR_API_KEY
```

5. Start the Express server by running `npm run start:server` or `yarn start:server`.
6. Start the Next.js app by running `npm run dev` or `yarn dev`.
7. Open your web browser and go to `http://localhost:3001` to access the Next App.

## Usage

- Enter the zip code in the search input field.
- Click the "Get Weather" button or press Enter to fetch weather data for the specified location.
- The weather data including temperature, weather condition, and icon, for current, daily, and hourly forecasts will be displayed on the screen.
- You can search for weather data for multiple locations by repeating the above steps.

## Contributing

If you would like to contribute to the development of the Basic Weather App, feel free to fork the repository, make changes, and submit a pull request. Please follow the standard coding conventions and commit guidelines.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Express](https://expressjs.com/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [OpenWeatherMap API](https://openweathermap.org/api)
