import React from "react";
import { PriceSection } from "@organisms";
import { UserLayout, Container } from "@templates";
import Wave from "@assets/illustrations/wave.svg";
const precio = () => {
  return (
    <UserLayout>
      <div className="p-precios">
        <Container full>
          <PriceSection />
        </Container>
      </div>
      <Wave className="p-precios__waves" />
    </UserLayout>
  );
};

export default precio;
