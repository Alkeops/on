import AOS from "aos";
import "normalize.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "scss/index.scss";

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
