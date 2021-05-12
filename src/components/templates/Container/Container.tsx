import React from "react";
import classNames from "classnames";
import { ContainerType } from "./ContainerType";

const Container = ({ children, className, full, wide }: ContainerType) => {
  const prefix: string = "t-container";
  const classForComponent: string = classNames(`${prefix}`, {
    [`${prefix}--full`]: full,
    [`${prefix}--wide`]: wide,
  }, className);
  return <div className={classForComponent}>{children}</div>;
};

export default Container;
