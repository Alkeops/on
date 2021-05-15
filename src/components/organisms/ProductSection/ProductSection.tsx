import { Title, Paragraph, Button } from "@atoms";
import { Circle } from "@molecules";
import {Container} from "@templates";
import React from "react";

const ProductSection = () => {
  const prefix: string = "o-product-section";
  return (
    <section className={prefix}>
        <Container full> <div className={`${prefix}__header`}>
        <div>
          {" "}
          <Paragraph>DESCUBRE EL POTENCIAL</Paragraph>
          <Title>
            Una<span>potente</span> herramienta a tu alcance
          </Title>
          <Button content="Pruebala ahora" />
        </div>

        <Circle className={`${prefix}__header-circle`} />
      </div></Container>
     
      <div style={{width: "100%", height: "1500px", background: "red"}}> <div style={{width: "300px", height: 200, background: "yellow", position: "sticky", top: 20}}></div></div>
    </section>
  );
};

export default ProductSection;
