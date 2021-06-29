import AOS from "aos";
import "normalize.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "scss/index.scss";
import { AppProvider } from "@contexts/AppContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: -50,
      duration: 1200,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
