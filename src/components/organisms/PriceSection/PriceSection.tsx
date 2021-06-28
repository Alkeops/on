import React from "react";
import Group from "@assets/illustrations/group.svg";
import { Title, Button } from "@atoms";
import { Circle } from "@molecules";
import { PriceTable } from "@organisms";
import { useAppContext } from "@contexts/AppContext";
const PriceSection = () => {
  const prefix: string = "o-price-section";
  const { openModal, emailSubject } = useAppContext();
  return (
    <section className={prefix}>
      <div className={`${prefix}__header`}>
        <div>
          <Title>
            ¿Qué esperas para <span>organizar</span> tus productos?
          </Title>
          <Button
            content="Empezar ahora"
            onClick={() => {
              emailSubject("Este usuario quiere organizar sus productos");
              openModal();
            }}
          />
        </div>
        <Group className={`${prefix}__header-group`} />
      </div>
      <div className={`${prefix}__tables`}>
        <div className={`${prefix}__tables-align`}>
          {" "}
          <PriceTable
            title="Entrepreneur"
            isEntrepreneur
            onClick={() => {
              emailSubject(
                "Este usuario esta interesado en el plan Entrepreneur"
              );
              openModal();
            }}
          />
        </div>
        <div className={`${prefix}__tables-align`}>
          <PriceTable
            title="Seller"
            isStarter
            onClick={() => {
              emailSubject("Este usuario esta interesado en el plan Seller");
              openModal();
            }}
          />{" "}
        </div>
        <div className={`${prefix}__tables-align`}>
          <PriceTable
            title="Enterprise"
            onClick={() => {
              emailSubject(
                "Este usuario esta interesado en el plan Enterprise"
              );
              openModal();
            }}
          />
        </div>
      </div>
      <Circle className={`${prefix}__circle`} />
    </section>
  );
};

export default PriceSection;
