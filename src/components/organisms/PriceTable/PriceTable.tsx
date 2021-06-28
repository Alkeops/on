import React from "react";
import { Button } from "@atoms";
import classNames from "classnames";
import { PricePoint } from "@molecules";

const PriceTable = ({
  title,
  isStarter,
  isEntrepreneur,
  onClick,
}: {
  title: string;
  isStarter?: boolean;
  isEntrepreneur?: boolean;
  onClick: () => void;
}) => {
  const prefix: string = "o-price-table";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-starter": isStarter || isEntrepreneur,
    "is-enterprise": !isStarter && !isEntrepreneur,
  });
  return (
    <div className={classForComponent} data-aos="fade-up">
      <div>
        <h3 className={`${prefix}__title`}>{title}</h3>
        {isStarter ? (
          <div>
            <PricePoint isStarter content="Hasta 15 canales de venta" />
            <PricePoint isStarter content="Hasta 500 SKU's" />
            <PricePoint isStarter content="1 Usuario admin" />
            <PricePoint isStarter content="5 Usuarios consulta" />
            <PricePoint isStarter content="150gb Almacenamiento" />
          </div>
        ) : isEntrepreneur ? (
          <div>
            <PricePoint isStarter content="Hasta 3 canales de venta" />
            <PricePoint isStarter content="Hasta 100 SKU's" />
            <PricePoint isStarter content="1 Usuario admin" />
            <PricePoint isStarter content="1 Usuarios consulta" />
            <PricePoint isStarter content="50gb Almacenamiento" />
          </div>
        ) : (
          <div>
            <PricePoint content="Hasta 25 canales de venta" />
            <PricePoint content="Hasta 1500 SKU's" />
            <PricePoint content="2 Usuarios admin" />
            <PricePoint content="10 Usuarios consulta" />
            <PricePoint content="1 TB Almacenamiento" />
            <PricePoint content="Servidor dedicado" />
            <PricePoint content="Atención prioritaria" />
          </div>
        )}
      </div>

      {isStarter && (
        <>
          <h3 className={`${prefix}__price`}>
            $799<span>usd</span>
          </h3>
          <h4 className={`${prefix}__mensual`}>Mensual</h4>
        </>
      )}
      {isEntrepreneur && (
        <>
          <h3 className={`${prefix}__price`}>
            $299<span>usd</span>
          </h3>
          <h4 className={`${prefix}__mensual`}>Mensual</h4>
        </>
      )}
      <span className={`${prefix}__foto`}>
        ¡Más de {isStarter ? "25,000" : isEntrepreneur ? "1,500" : "150,000"}{" "}
        Fotografías al mes!
      </span>
      <div className={!isStarter && !isEntrepreneur && `${prefix}__container`}>
        <Button
          content={
            isStarter || isEntrepreneur ? "Comienza Ahora" : "Contactanos"
          }
          className={`${prefix}__button`}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default PriceTable;
