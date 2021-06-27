import { Title, Paragraph, Button, ProductImage, NubeskIcons } from "@atoms";
import { Circle } from "@molecules";
import { Container } from "@templates";
import { useRouter } from "next/router";
import React from "react";

const ProductSection = () => {
  const router = useRouter();
  const prefix: string = "o-product-section";
  const handleRouter = () => router.push("/prueba");
  return (
    <section className={prefix}>
      <Container full>
        {" "}
        <div className={`${prefix}__header`}>
          <div>
            {" "}
            <Paragraph>AUMENTA TU PRODUCTIVIDAD</Paragraph>
            <Title>
              Una<span>potente</span> herramienta a tu alcance
            </Title>
            <Button content="Pruébala ahora" onClick={handleRouter} />
          </div>
        </div>
      </Container>
      <Circle className={`${prefix}__header-circle`} />
      <div className={`${prefix}__skills`}>
        <div className={`${prefix}__skills-point`}>
          <ProductImage video="Adapta" />
          <Paragraph isProductPoint>
            Gracias a nuestro sistema “Image Resize & Renaming” by Nubesk puedes
            adaptar y renombrar imágenes en segundos de acuerdo a las
            especificaciones que cualquier marketplace o canal de venta digital
            te pida.
          </Paragraph>
        </div>
        <div className={`${prefix}__skills-point left`}>
          <ProductImage video="Categoriza"/>
          <Paragraph isProductPoint>
            Elimina los fondos de tus imágenes en un solo click y ponles el
            color que más te sirva.
          </Paragraph>
        </div>
        <div className={`${prefix}__skills-point`}>
          <ProductImage video="Edita"/>
          <Paragraph isProductPoint>
            Edita los campos y atributos de tus productos desde un sólo lugar
          </Paragraph>
        </div>
        <div className={`${prefix}__skills-point left`}>
          <ProductImage video="NubeskCloud"/>
          <Paragraph isProductPoint>
            Todos tus datos e imágenes están seguros y disponibles en cualquier
            momento dentro de NubeskCloud
          </Paragraph>
        </div>
      </div>
      <div className={`${prefix}__banner`}>
        <Container>
          <div className={`${prefix}__banner-content`}>
            <Title isWhite>Recupera tu tiempo junto a Nubesk</Title>
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
              <NubeskIcons icon="Expand" />
              <h2>Adapta</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Rename" />
              <h2>Renombra</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Color" />
              <h2>Cambia el fondo</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Group" />
              <h2>Categoriza</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Campos" />
              <h2>Crea tus campos</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Organize" /> <h2>Filtra</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Share" /> <h2>Comparte</h2>
            </div>{" "}
            <div className={`${prefix}__last-chance-point`}>
              <NubeskIcons icon="Edit" /> <h2>Agrega canales de venta</h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
