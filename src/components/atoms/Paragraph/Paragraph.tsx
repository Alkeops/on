import React from "react";
import classNames from "classnames";

const Paragraph = ({
  isProductPoint,
  children,
}: {
  isProductPoint?: boolean;
  children: any;
}) => {
  const prefix: string = "a-paragraph";
  const classForComponent: string = classNames(prefix, {
    "is-product-point": isProductPoint,
  });
  return <p className={classForComponent}>{children}</p>;
};

export default Paragraph;
