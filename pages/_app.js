import Script from "next/script";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-252456907-1");
  }, []);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-252456907-1"
      />
      <NextNProgress color="#FFDB84" options={{ easing: "ease", speed: 500 }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
