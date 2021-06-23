import React from "react";
import { Button, Paragraph, Title } from "@atoms";
import Man from "@assets/illustrations/manDesk.svg";
import Woman from "@assets/illustrations/woman.svg";
import { Circle } from "@molecules";

const MainSection = () => {
  const prefix: string = "o-main-section";

  return (
    <section className={prefix}>
      <Circle />
      <div className={`${prefix}__app`}>
        <div></div>
        <Man className={`${prefix}__app-man`} />
        <Woman className={`${prefix}__app-woman`} />
      </div>
      <div className={`${prefix}__info`}>
        <Title isHome>
        Centraliza, Adapta, Renombra y Distribuye tus fotografías de eCommerce
        </Title>
      <Paragraph>Con Nubesk recupera tiempo perdido, mejora tu Time-to-market,  incrementa la productividad, automatiza procesos repetitivos y enfócate en vender más.</Paragraph>
        <Button
          data-aos="fade-up"
          className={`${prefix}__info-button`}
          content="Prueba gratis ahora"
        />
      </div>
    </section>
  );
};

export default MainSection;
