import React, { useState } from "react";
import { Button } from "@atoms";
import Link from "next/link";

const InputSubscribe = () => {
  const prefix = "m-input-subscribe";
  const [email, setEmail] = useState<string>("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendMail = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        subject: "Este usuario quiere subscribirse al newsletter",
      }),
    });
    if (sendMail.status === 200) {
      setEmail("Te subscribiste");
    }
  };
  return (
    <div className={`${prefix}`}>
      <input
        className={`${prefix}__input`}
        placeholder="Tu dirección de email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <Button
        className={`${prefix}__button`}
        content="Subscribirse"
        onClick={handleSubmit}
      />
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
