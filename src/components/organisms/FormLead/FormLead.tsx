import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@atoms";
import { useAppContext } from "@contexts/AppContext";
const options: Array<string> = [
  "Busqueda por internet",
  "Google",
  "Facebook",
  "Linkedin",
  "Twitter",
];

const FormLead = () => {
  const prefix: string = "o-form-lead";
  const [form, setForm] = useState<any>({});
  const [terms, setTerms] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);
  const [formComplete, setFormComplete] = useState<boolean>(false);
  const { subject } = useAppContext();
  useEffect(() => {
    setForm({});
    return setFormComplete(false);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendMail = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, subject }),
    });
    if (sendMail.status === 200) {
      setFormComplete(true);
      setForm({});
    }
  };
  const handleForm = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  useEffect(() => {
    setDisable(true);
    if (
      form.email?.length > 0 &&
      form.nombre?.length > 0 &&
      form.deDonde?.length > 0 &&
      terms
    ) {
      setDisable(false);
    }
  }, [form, terms]);
  return (
    <>
      {!formComplete ? (
        <form
          noValidate
          autoComplete="off"
          className={prefix}
          onSubmit={(e) => e.preventDefault()}
        >
          <TextField
            required
            label="Correo Electronico corporativo"
            fullWidth
            type="email"
            className={`${prefix}__input`}
            onChange={handleForm}
            name="email"
          />
          <TextField
            required
            label="Nombre "
            fullWidth
            className={`${prefix}__input`}
            name="nombre"
            onChange={handleForm}
          />
          <TextField
            label="Apellidos"
            fullWidth
            className={`${prefix}__input`}
            name="apellidos"
            onChange={handleForm}
          />
          <TextField
            label="Compa??ia"
            fullWidth
            className={`${prefix}__input`}
            name="compania"
            onChange={handleForm}
          />
          <TextField
            label="Tel??fono"
            fullWidth
            className={`${prefix}__input`}
            name="telefono"
            onChange={handleForm}
          />
          <TextField
            required
            label="Como te enteraste de Nubesk"
            fullWidth
            select
            className={`${prefix}__input`}
            name="deDonde"
            onChange={handleForm}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <div className={`${prefix}__check`}>
            <Checkbox
              color="primary"
              onChange={() => setTerms(!terms)}
              checked={terms}
            />{" "}
            <span>Acepto la Pol??tica de Privacidad</span>
          </div>

          <Button
            content="Cont??ctenme"
            disabled={disable}
            onClick={(e) => handleSubmit(e)}
          />
        </form>
      ) : (
        <span className={`${prefix}__form-complete`}>??Muy pronto nos pondremos en contacto contigo!</span>
      )}
    </>
  );
};

export default FormLead;
