import Head from "next/head";
import React from "react";
import Weather from "@/components/Weather";

export default function Home() {
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
        <Weather />
      </main>
    </>
  );
}
