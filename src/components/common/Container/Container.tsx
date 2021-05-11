import React from "react";
import classNames from "classnames";
import { ContainerType } from "@ts";

const Container = ({ children, full }: ContainerType) => {
  const prefix: string = "o-container";
  const classForComponent: string = classNames(`${prefix}`, {
    [`${prefix}--full`]: full,
  });
  return <div className={classForComponent}>{children}</div>;
};

export default Container;
