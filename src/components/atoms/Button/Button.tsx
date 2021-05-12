import React from "react";
import classNames from "classnames";
import { ButtonType } from "./ButtonType";

const Button = ({
  content,
  type,
  className,
  onClick,
  ...props
}: ButtonType) => {
  const prefix: string = "a-btn";
  const classForComponent: string = classNames(`${prefix}`, {
    [`${prefix}--error`]: type === "error",
    [className]: className,
  });
  return (
    <button {...props} className={classForComponent}>
      {content}
    </button>
  );
};

export default Button;
