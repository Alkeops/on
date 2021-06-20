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
          Beneficios de usar Nubesk
        </Title>
      
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
