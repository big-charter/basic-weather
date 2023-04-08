import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

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
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Description</p>
        </div>

        <div className={styles.center}>
          <p>Center</p>
        </div>

        <div className={styles.grid}>
          <p>Item1</p>

          <p>Item2</p>

          <p>Item3</p>

          <p>Item4</p>
        </div>
      </main>
    </>
  );
}
