import React, { MouseEventHandler } from "react";

const Modal = ({
  children,
  onClick,
}: {
  onClick: MouseEventHandler;
  children: any;
}) => {
  const prefix: string = "t-modal";
  return (
    <div className={prefix}>
      <div className={`${prefix}__content`}>
        <button onClick={onClick} className={`${prefix}__close`}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
