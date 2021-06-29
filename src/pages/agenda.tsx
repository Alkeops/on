import { UserLayout } from "@templates";
import React, { useEffect } from "react";
import { InlineWidget } from "react-calendly";
const agenda = () => {
  return (
    <UserLayout>
      <InlineWidget url="https://calendly.com/jprida/nubesk" />
    </UserLayout>
  );
};

export default agenda;
