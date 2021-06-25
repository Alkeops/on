import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@atoms";
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
  const [terms, setTerms] = useState(false);
  const [disable, setDisable] = useState(true);

  const handleForm = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
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
        label="Compañia"
        fullWidth
        className={`${prefix}__input`}
        name="compania"
        onChange={handleForm}
      />
      <TextField
        label="Teléfono"
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
        <span>Acepto la Política de Privacidad</span>
      </div>

      <Button content="Descargar" disabled={disable} />
    </form>
  );
};

export default FormLead;
