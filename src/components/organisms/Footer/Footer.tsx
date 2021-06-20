import React from "react";
import { NavItem, Paragraph, Title } from "@atoms";
import { InputSubscribe, BlockTitle } from "@molecules";
import { Container } from "@templates";

const Footer = () => {
  const prefix = "o-footer";
  return (
    <footer className={prefix}>
      <Container>
        <div className={`${prefix}__contacto`}>
          <Title>¿Quieres contratar Nubesk</Title>
          <Paragraph>
            Estamos para atenderte a través de estos medios 24/7 todos los días
            del año
          </Paragraph>
          <div className={`${prefix}__contacto-options`}>
          <NavItem content="Enviar correo" href="/" isFooter />
          </div>
        </div>
        <div className={`${prefix}__input`}>
          <BlockTitle title="Suscribete a nuestro newsletter">
            <p className={`${prefix}__input-p`}>
              Novedades, articulos, recursos y más desde Nubesk directo a tu
              email una vez al mes.
            </p>
          </BlockTitle>
          <InputSubscribe />
        </div>
        <div className={`${prefix}__navegation`}>
          <BlockTitle title="Navegación">
            <div className={`${prefix}__navegation-links`}>
              <NavItem content="Home" href="/" isFooter />
              <NavItem content="Producto" href="/producto" isFooter />
              <NavItem content="Precios" href="/precios" isFooter />
              <NavItem content="Blog" href="/blog" isFooter />
              <NavItem content="Contacto" href="/contacto" isFooter />
            </div>
          </BlockTitle>
          <BlockTitle title="Siguenos">
            <div className={`${prefix}__navegation-links`}>
              <NavItem content="Facebook" href="/" isFooter />
              <NavItem content="Twitter" href="/producto" isFooter />
              <NavItem content="Instagram" href="/precios" isFooter />
              <NavItem content="Tinder" href="/blog" isFooter />
            </div>
          </BlockTitle>
          <BlockTitle title="Contacto">
            {" "}
            <p>Un contacto</p>
          </BlockTitle>
        </div>{" "}
        <h5 className={`${prefix}__copy`}>
          ©2021 Nubesk Todos los derechos reservados
        </h5>
      </Container>
    </footer>
  );
};

export default Footer;
