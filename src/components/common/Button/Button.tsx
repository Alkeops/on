import React from "react";
import { ButtonType } from "@ts";
import classNames from "classnames";

const Button = ({
  content,
  type,
  className,
  onClick,
  ...props
}: ButtonType) => {
  const prefix: string = "c-btn";
  const classForComponent: string = classNames(`${prefix}`, {
    [`${prefix}--error`]: type === "error",
    [className]: className,
  });
  return <button className={classForComponent}>{content}</button>;
};

export default Button;
