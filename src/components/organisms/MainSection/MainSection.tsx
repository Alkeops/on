import React from "react";
import { Button, Paragraph, Title } from "@atoms";
import Man from "@assets/illustrations/manDesk.svg";
import Woman from "@assets/illustrations/woman.svg";
import { Circle } from "@molecules";
import { useRouter } from "next/router";

const MainSection = () => {
  const router = useRouter();
  const prefix: string = "o-main-section";

  const handleRouter = () => router.push("/prueba")
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
        Centraliza, <span>Adapta</span>, Renombra y Distribuye tus <span>fotografías</span> de eCommerce
        </Title>
      <Paragraph>Con Nubesk recupera tiempo perdido, mejora tu Time-to-market,  incrementa la productividad, automatiza procesos repetitivos y enfócate en vender más.</Paragraph>
        <Button
          data-aos="fade-up"
          className={`${prefix}__info-button`}
          content="Prueba gratis ahora"
          onClick={handleRouter}
        />
      </div>
    </section>
  );
};

export default MainSection;
