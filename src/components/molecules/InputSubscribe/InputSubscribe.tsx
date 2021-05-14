import React from "react";
import { Button } from "@atoms";
import Link from "next/link";

const InputSubscribe = () => {
  const prefix = "m-input-subscribe";
  return (
    <div className={`${prefix}`}>
      <input
        className={`${prefix}__input`}
        placeholder="Tu dirección de email"
      ></input>
      <Button className={`${prefix}__button`} content="Subscribirse" />
      <p className={`${prefix}__p`}>
        Al subscribirte aceptas nuestra{" "}
        <Link href="/privacy">
          <a>Politica de Privacidad</a>
        </Link>
      </p>
    </div>
  );
};

export default InputSubscribe;
