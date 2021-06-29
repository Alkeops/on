import { UserLayout } from "@templates";
import React, { useEffect } from "react";

const agenda = () => {
  useEffect(() => {
    Calendly.initInlineWidget({
      url: "https://calendly.com/jprida/nubesk",
      parentElement: document.getElementById("calendy"),
      prefill: {},
      utm: {},
    });
  }, []);
  return (
    <UserLayout>
      <div id="calendy" className="t-agenda"></div>
    </UserLayout>
  );
};

export default agenda;
