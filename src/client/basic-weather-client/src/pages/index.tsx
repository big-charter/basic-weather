import Head from "next/head";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [weatherData, setWeatherData] = React.useState<any>();

  const [zipCode, setZipCode] = React.useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http://localhost:3000/weather?zip=${zipCode}`)
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  };

  return (
    <>
      <Head>
        <title>Basic Weather</title>
        <meta name="description" content="The weather, nice and easy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon_io/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon_io/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="favicon_io/site.webmanifest"></link>
      </Head>
      <main className="p-3">
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="zipCode">Zip code:</label>
            <div className="form-group">
              <input
                type="text"
                id="zipCode"
                value={zipCode}
                onChange={(event) => setZipCode(event.target.value)}
              />
              <button className="btn btn-primary mx-3" type="submit">
                Get weather
              </button>
            </div>
          </form>
        </div>

        <div>
          {weatherData && (
            <div>
              <h2>Weather forecast for {zipCode}</h2>
              <pre>{JSON.stringify(weatherData)}</pre>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
