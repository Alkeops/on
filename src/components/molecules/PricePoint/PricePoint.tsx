import React from "react";
import { NubeskIcons } from "@atoms";

const PricePoint = ({
  isStarter,
  content,
}: {
  isStarter?: boolean;
  content: string;
}) => {
  return (
    <div className="o-price-point">
      <NubeskIcons icon={isStarter ? "StarterCheck" : "EnterpriseCheck"} />
      <span>{content}</span>
    </div>
  );
};

export default PricePoint;
