import AOS from "aos";
import "normalize.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "scss/index.scss";
import { AppProvider } from "@contexts/AppContext";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

/* //Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done()); */

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
