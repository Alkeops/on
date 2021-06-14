import React from "react";
import Group from "@assets/illustrations/group.svg";
import { Title } from "@atoms";
import {Circle} from "@molecules";
import { PriceTable } from "@organisms";
const PriceSection = () => {
  const prefix: string = "o-price-section";
  return (
    <section className={prefix}>
      <div className={`${prefix}__header`}>
        <Title>
          ¿Qué esperas para <span>organizar</span> tus productos?
        </Title>
        <Group className={`${prefix}__header-group`} />
      </div>
      <div className={`${prefix}__tables`}>
        <PriceTable title="Starter" isStarter />
        <PriceTable title="Enterprise" />
      </div>
      <Circle className={`${prefix}__circle`} />
    </section>
  );
};

export default PriceSection;
