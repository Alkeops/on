import React from "react";
import { Button, Paragraph, Title } from "@atoms";
import { NextRouter, useRouter } from "next/router";
import { Container } from "@templates";
import Manual from "@assets/illustrations/manual.svg";
import Formatos from "@assets/illustrations/formatos.svg";
import Licencias from "@assets/illustrations/licencias.svg";
import Magia from "@assets/illustrations/magia.svg";
const Benefits = () => {
  const router: NextRouter = useRouter();
  const prefix: string = "o-benefits";
  const handleRouter = () => router.push("/producto");
  return (
    <section className={`${prefix}`}>
      <Container full isXlWide>
        <div className={`${prefix}__title`}>
          <Title isHome>
            <span>Beneficios</span> de usar Nubesk
          </Title>
        </div>
        <div className={`${prefix}__points`}>
          <div className={`${prefix}__points-point`}>
            <Manual />
            <Paragraph>
              Olvídate de procesos manuales y errores al utilizar múltiples
              sistemas y decenas de versiones de hojas de cálculo.{" "}
            </Paragraph>
          </div>
          <div className={`${prefix}__points-point left`}>
            <Magia />
            <Paragraph>
              Adapta tus fotos, renómbralas y cambia el fondo de acuerdo a tus
              necesidades.
            </Paragraph>
          </div>
          <div className={`${prefix}__points-point`}>
            <Licencias />
            <Paragraph>
              {" "}
              Controla los derechos de uso de tus fotos y evita costos
              innecesarios.
            </Paragraph>
          </div>
          <div className={`${prefix}__points-point left`}>
            <Formatos />
            <Paragraph>
              Agiliza el acceso, la edición y distribucion de tus fotografías
              para e-commerce.
            </Paragraph>
          </div>
        </div>
        <Button
          data-aos="fade-up"
          className={`${prefix}__button`}
          content="Conoce más beneficios"
          onClick={handleRouter}
        />{" "}
      </Container>
    </section>
  );
};

export default Benefits;
