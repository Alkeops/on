import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from '@material-ui/core/Checkbox';
import {Button }from "@atoms";
const options: Array<string> = [
  "Busqueda por internet",
  "Google",
  "Facebook",
  "Linkedin",
  "Twitter",
  "Busqueda por internet",
];

const FormLead = () => {
  const prefix: string = "o-form-lead";

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
      />
      <TextField
        required
        label="Nombre "
        fullWidth
        className={`${prefix}__input`}
      />
      <TextField label="Apellidos" fullWidth className={`${prefix}__input`} />
      <TextField label="Compañia" fullWidth className={`${prefix}__input`} />
      <TextField label="Teléfono" fullWidth className={`${prefix}__input`} />
      <TextField
        required
        label="Como te enteraste de Nubesk"
        fullWidth
        select
        className={`${prefix}__input`}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <div className={`${prefix}__check`}><Checkbox color="primary" /> <span>Acepto la Política de Privacidad</span></div>
      
      <Button content="Descargar" disabled={true}/>
    </form>
  );
};

export default FormLead;
