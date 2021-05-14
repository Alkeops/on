import React from "react";
import { Button, Paragraph, Title } from "@atoms";
import Man from "@assets/illustrations/manDesk.svg";
import Woman from "@assets/illustrations/woman.svg";
import {Circle} from "@molecules";

const MainSection = () => {
  const prefix: string = "o-main-section";

  return (
    <section className={prefix}>
      <Circle />
      <div className={`${prefix}__app`}>
          <div></div>
        <Man className={`${prefix}__app-man`}/>
        <Woman className={`${prefix}__app-woman`}/>
      </div>
      <div className={`${prefix}__info`}>
        <Title>
          La <span>mejor</span> herramienta para organizar tus productos
        </Title>
        <Paragraph>
          Con <span>NUBESK</span> crea, edita, adapta, renombra, categoriza,
          guarda, importa, exporta y comparte todo lo que necesites.
        </Paragraph>
        <Button
          className={`${prefix}__info-button`}
          content="Prueba gratis ahora"
        />
      </div>
    </section>
  );
};

export default MainSection;
