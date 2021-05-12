import { useState, useEffect } from "react";

const useWindowScroll = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname !== "/") {
      setColor(true);
    } else {
      window.addEventListener("scroll", handleScroll);
    }
    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      ); /*TODO ¿limpiar states? Comprobar*/
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset < 10) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  return {
    color,
  };
};

export default useWindowScroll;
