import React from "react";

const Circle = ({ className }: { className?: string }) => {
  const prefix: string = "m-circle";
  return (
    <div className={prefix}>
      <div className={`${prefix}__in`}></div>
      <div className={`${prefix}__out`}></div>
    </div>
  );
};

export default Circle;
