import React from "react";
import classNames from "classnames";

const Title = ({ children, isWhite }: { children: any; isWhite?: boolean }) => {
  const prefix: string = "a-title";
  const classForComponent: string = classNames(prefix, { "is-white": isWhite });
  return (
    <h1 data-aos={isWhite ? null : "fade-right"} className={classForComponent}>
      {children}
    </h1>
  );
};

export default Title;
