import React from "react";
import { NavItem, Paragraph, Title, SocialNetworks } from "@atoms";
import { InputSubscribe, BlockTitle, FooterContact } from "@molecules";
import { Container } from "@templates";

const Footer = () => {
  const prefix = "o-footer";
  return (
    <footer className={prefix}>
      <Container>
        <div className={`${prefix}__contacto`}>
          <Title>¿Quieres contratar Nubesk</Title>
          <Paragraph>
            Estamos para atenderte a través de estos medios todos los días
            del año
          </Paragraph>
          <div className={`${prefix}__contacto-options`}>
            <FooterContact
              icon="MailIcon"
              textButton="Enviar correo"
              p="Correo electrónico"
              href="mailto:correo@correo.com"
            />
            <FooterContact
              icon="Whatsapp"
              textButton="55 6393 2323"
              p="WhatsApp"
              href="https://wa.me/525563932323"
            />
            <FooterContact
              icon="Headset"
              textButton="55 6393 2323"
              p="Teléfono"
              href="tel:+525563932323"
            />
            <div className={`${prefix}__contacto-network`}>
              <p>Redes sociales</p>
              <div className={`${prefix}__contacto-network-options`}>
                <SocialNetworks href="/" network="Facebook" />
                <SocialNetworks href="/" network="Twitter" />
                <SocialNetworks href="/" network="Linkedin" />
                <SocialNetworks href="/" network="Youtube" />
                <SocialNetworks href="/" network="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <div className={`${prefix}__input`}>
          <BlockTitle title="Suscribete a nuestro newsletter">
            <p className={`${prefix}__input-p`}>
            Recibe las mejores noticias de e-commerce, marketing, fotografía y tecnología directo en tu correo.
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
         {/*  <BlockTitle title="Compañia">
            <div className={`${prefix}__navegation-links`}>
              <NavItem content="¿Quiénes somos?" href="/" isFooter />
              <NavItem content="Prensa" href="/" isFooter />
              <NavItem content="Únete al equipo" href="/" isFooter />
              <NavItem content="Contáctanos" href="/" isFooter />
            </div>
          </BlockTitle>
          <BlockTitle title="Centro de Ayuda">
            <div className={`${prefix}__navegation-links`}>
              <NavItem content="Preguntas Frecuentes" href="/" isFooter />
              <NavItem content="Videos Tutoriales" href="/" isFooter />
            </div>
          </BlockTitle>
          <BlockTitle title="Blog">
            <div className={`${prefix}__navegation-links`}>
              <NavItem content="Articulos" href="/" isFooter />
              <NavItem content="Webinars" href="/" isFooter />
              <NavItem content="Podcast" href="/" isFooter />
              <NavItem content="Ebooks" href="/" isFooter />
            </div>
          </BlockTitle>
          <BlockTitle title="Legales">
            <div className={`${prefix}__navegation-links`}>
              <NavItem content="Términos y Condiciones" href="/" isFooter />
              <NavItem content="Aviso de Privacidad" href="/" isFooter />
            </div>
          </BlockTitle>
          <BlockTitle title="Vende Nubesk">
            <div className={`${prefix}__navegation-links`}>
              <NavItem content="Distribuidores" href="/" isFooter />
              <NavItem content="Afiliados" href="/" isFooter />
            </div>
          </BlockTitle> */}
          
         
        </div>{" "}
        <h5 className={`${prefix}__copy`}>
          ©2021 Nubesk Todos los derechos reservados
        </h5>
      </Container>
    </footer>
  );
};

export default Footer;
