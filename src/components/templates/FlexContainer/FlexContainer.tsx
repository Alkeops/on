import React from "react";
import classNames from "classnames";
import { FlexContainerType } from "./FlexContainerTypes";
const FlexContainer = ({
  alignStart,
  children,
  isColumn,
  justifyCenter,
}: FlexContainerType) => {
  const prefix = "t-flex-container";
  const classForComponent: string = classNames(`${prefix}`, {
    [`${prefix}--column`]: isColumn,
    [`${prefix}--justify-center`]: justifyCenter,
    [`${prefix}--align-start`]: alignStart,
  });
  return <div className={classForComponent}>{children}</div>;
};

export default FlexContainer;
