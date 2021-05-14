import React, { ReactNode } from "react";

const BlockTitle = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const prefix: string = "m-block-title";
  return (
    <div className={`${prefix}`}>
      <h3 className={`${prefix}__title`}>{title}</h3>
      {children}
    </div>
  );
};

export default BlockTitle;
