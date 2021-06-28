import React from "react";
import { Button, Paragraph, Title } from "@atoms";
import Man from "@assets/illustrations/manDesk.svg";
import Woman from "@assets/illustrations/woman.svg";
import { Circle } from "@molecules";
import { useAppContext } from "@contexts/AppContext";

const MainSection = () => {
  const { openModal, emailSubject } = useAppContext();
  const prefix: string = "o-main-section";

  return (
    <section className={prefix}>
      <Circle />
      <div className={`${prefix}__app`}>
        <div>
          <video playsInline autoPlay loop muted>
            <source src={`/videos/Adapta.mp4`} type="video/mp4" />
          </video>
        </div>
        <Man className={`${prefix}__app-man`} />
        <Woman className={`${prefix}__app-woman`} />
      </div>
      <div className={`${prefix}__info`}>
        <Title isHome>
          Centraliza, <span>Adapta</span>, Renombra y Distribuye tus{" "}
          <span>fotografías</span> de eCommerce
        </Title>
        <Paragraph>
          Con Nubesk recupera tiempo perdido, mejora tu Time-to-market,
          incrementa la productividad, automatiza procesos repetitivos y
          enfócate en vender más.
        </Paragraph>
        <Button
          data-aos="fade-up"
          className={`${prefix}__info-button`}
          content="Prueba gratis ahora"
          onClick={() => { emailSubject("Este usuario quiere ser contactado"); openModal();}}
        />
      </div>
    </section>
  );
};

export default MainSection;
