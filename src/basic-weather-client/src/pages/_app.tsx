import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={openSans.className}>
      <Component {...pageProps} />
    </div>
  );
}
