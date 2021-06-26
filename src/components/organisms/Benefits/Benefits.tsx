import React from "react";
import { Button, Paragraph, Title } from "@atoms";
import { useRouter } from "next/router";
import { Container } from "@templates";
const Benefits = () => {
  const router = useRouter();
  const prefix: string = "o-benefits";
  const handleRouter = () => router.push("/producto");
  return (
    <section className={`${prefix}`}>
      <Container full isXlWide>
        <div className={`${prefix}__title`}>
          <Title isHome>
            Beneficios de usar
            <span>Nubesk</span>
          </Title>
        </div>
        <div className={`${prefix}__points`}>
          <span>
            Olvídate de procesos manuales y errores al utilizar múltiples
            sistemas y decenas de versiones de hojas de cálculo.{" "}
          </span>

          <span>
            Adapta tus fotos, renómbralas y cambia el fondo de acuerdo a tus
            necesidades.
          </span>
          <span>
            {" "}
            Controla los derechos de uso de tus fotos y evita costos
            innecesarios.
          </span>
          <span>
            Agiliza el acceso, la edición y distribucion de tus fotografías para
            e-commerce.
          </span>
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
