import React from "react";
import { Button } from "@atoms";
import classNames from "classnames";
import { PricePoint } from "@molecules";

const PriceTable = ({
  title,
  isStarter,
}: {
  title: string;
  isStarter?: boolean;
}) => {
  const prefix: string = "o-price-table";
  const classForComponent: string = classNames(`${prefix}`, {
    "is-starter": isStarter,
    "is-enterprise": !isStarter,
  });
  return (
    <div className={classForComponent} data-aos="fade-up">
      <div>
        <h3 className={`${prefix}__title`}>{title}</h3>
        {isStarter ? (
          <div>
            <PricePoint isStarter content="15 canales de venta" />
            <PricePoint isStarter content="Hasta 500 SKU's" />
            <PricePoint isStarter content="1 Usuario admin" />
            <PricePoint isStarter content="5 Usuarios consulta" />
            <PricePoint isStarter content="150gb Almacenamiento" />
          </div>
        ) : (
          <div>
            <PricePoint content="25 canales de venta" />
            <PricePoint content="Hasta 1500 SKU's" />
            <PricePoint content="2 Usuarios admin" />
            <PricePoint content="10 Usuarios consulta" />
            <PricePoint content="1 TB Almacenamiento" />
            <PricePoint content="Servidor dedicado" />
            <PricePoint content="Atencion prioritaria" />
          </div>
        )}
      </div>

      {isStarter && (
        <>
          <h3 className={`${prefix}__price`}>
            $599<span>usd</span>
          </h3>
          <h4 className={`${prefix}__mensual`}>Mensual</h4>
        </>
      )}
      <div className={!isStarter && `${prefix}__container`}>
        <Button
          content={isStarter ? "Comienza Ahora" : "Contactanos"}
          className={`${prefix}__button`}
        />
      </div>
    </div>
  );
};

export default PriceTable;
