import React from "react";
import Group from "@assets/illustrations/group.svg";
import { Title, Button } from "@atoms";
import { Circle } from "@molecules";
import { PriceTable } from "@organisms";
import { useRouter } from "next/router";
const PriceSection = () => {
  const router = useRouter();
  const prefix: string = "o-price-section";
  const handleRouter = () => router.push("/prueba");
  return (
    <section className={prefix}>
      <div className={`${prefix}__header`}>
        <div>
          <Title>
            ¿Qué esperas para <span>organizar</span> tus productos?
          </Title>
          <Button content="Empezar ahora" onClick={handleRouter} />
        </div>
        <Group className={`${prefix}__header-group`} />
      </div>
      <div className={`${prefix}__tables`}>
        <div className={`${prefix}__tables-align`}>
          {" "}
          <PriceTable title="Entrepreneur" isEntrepreneur />
        </div>
        <div className={`${prefix}__tables-align`}>
          <PriceTable title="Seller" isStarter />{" "}
        </div>
        <div className={`${prefix}__tables-align`}>
          <PriceTable title="Enterprise" />
        </div>
      </div>
      <Circle className={`${prefix}__circle`} />
    </section>
  );
};

export default PriceSection;
