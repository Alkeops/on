import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const options: Array<string> = [
  "Busqueda por internet",
  "Google",
  "Facebook",
  "Linkedin",
  "Twitter",
  "Busqueda por internet",
];

const FormLead = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField label="Correo Electronico corporativo" fullWidth />
      <TextField label="Nombre " fullWidth />
      <TextField label="Apellidos" fullWidth />
      <TextField label="Compañia" fullWidth />
      <TextField label="Teléfono" fullWidth />
      <TextField label="Como te enteraste de Nubesk" fullWidth select>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

export default FormLead;
