import React from "react";
import TextField from "@material-ui/core/TextField";

const InputComponent = ({ inputRef, ...other }) => <div {...other} />;
const OutlinedDiv = ({ children, label, style, onClick, onBlur, inputProps }) => {
  return (
    <TextField
      onBlur={onBlur}
      onClick={onClick}
      style={style}
      variant="outlined"
      label={label}
      multiline
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputComponent: InputComponent
      }}
      inputProps={{ children: children, ...inputProps }}
    />
  );
};
export default OutlinedDiv;