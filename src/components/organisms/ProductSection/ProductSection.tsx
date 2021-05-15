import { Title, Paragraph, Button, ProductImage, NubeskIcons } from "@atoms";
import { Circle } from "@molecules";
import { Container } from "@templates";
import React from "react";

const ProductSection = () => {
  const prefix: string = "o-product-section";
  return (
    <section className={prefix}>
      <Container full>
        {" "}
        <div className={`${prefix}__header`}>
          <div>
            {" "}
            <Paragraph>DESCUBRE EL POTENCIAL</Paragraph>
            <Title>
              Una<span>potente</span> herramienta a tu alcance
            </Title>
            <Button content="Pruebala ahora" />
          </div>
        </div>
      </Container>
      <Circle className={`${prefix}__header-circle`} />
      <div className={`${prefix}__skills`}>
        <Container>
          <div className={`${prefix}__skills-point`}>
            <ProductImage />
            <Paragraph isProductPoint>
              Gracias a nuestro sistema "Image Resize by Nubesk" puedes adaptar
              las imagenes de cualquier producto a cualquier canal de venta que
              necesites.
            </Paragraph>
          </div>
          <div className={`${prefix}__skills-point`}>
            <ProductImage />
            <Paragraph isProductPoint>
              Con nuestra nueva tecnología elimina los fondos de tus imagenes
              con un solo click.
            </Paragraph>
          </div>
          <div className={`${prefix}__skills-point`}>
            <ProductImage />
            <Paragraph isProductPoint>
              Nubesk te permite editar todos los campos necesarios de tu
              producto/articulo desde un unico punto.
            </Paragraph>
          </div>
          <div className={`${prefix}__skills-point`}>
            <ProductImage />
            <Paragraph isProductPoint>
              Todos tus datos e imagenes estan seguros en NubeskCloud y siempre
              disponibles para que puedas compartirlas en cualquier momento.
            </Paragraph>
          </div>
        </Container>
      </div>
      <div className={`${prefix}__banner`}>
        <Container>
          <div className={`${prefix}__banner-content`}>
            <Title isWhite>Ahorra tiempo junto a Nubesk</Title>
            <Button content="Comienza ahora" />
          </div>
        </Container>
      </div>
      <Container>
        <div className={`${prefix}__last-chance`}>
          <Title>
            La herramienta más <span>Eficaz.</span>
          </Title>
          <div className={`${prefix}__last-chance-points`}>
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Import" />
              <h2>Importa</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Upload" />
              <h2>Exporta</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="File" />
              <h2>Categoriza</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Organize" /> <h2>Filtra</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Campos" /> <h2>Crea los campos necesarios</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Edit" /> <h2>Agrega tus canales de venta</h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
