import { PriceSection } from "@organisms";
import { UserLayout, Container } from "@templates";
import React from "react";

const precio = () => {
  return (
    <UserLayout>
      <Container full>
        <PriceSection />
      </Container>
    </UserLayout>
  );
};

export default precio;
