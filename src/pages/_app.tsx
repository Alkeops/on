import AOS from "aos";
import "normalize.css";
import { useEffect } from "react";
import "scss/index.scss";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
