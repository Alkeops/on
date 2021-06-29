import { UserLayout } from "@templates";
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
const agenda = () => {
  return (
    <UserLayout>
     <div className="t-agenda" style={{height: 800, padding: "0 0 50px"}}><InlineWidget url="https://calendly.com/jprida/nubesk" /></div> 
    </UserLayout>
  );
};

export default agenda;
