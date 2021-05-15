import React from "react";
import classNames from "classnames";

const Circle = ({ className }: { className?: string }) => {
  const prefix: string = "m-circle";
  const classForComponent: string = classNames(prefix, className);
  return (
    <div className={classForComponent} data-aos="zoom-in">
      <div className={`${prefix}__in`}></div>
      <div className={`${prefix}__out`}></div>
    </div>
  );
};

export default Circle;
