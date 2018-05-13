import React from "react";
import TextField from "material-ui/TextField";

const Input = props => (
  <div className="Input">
    <TextField
      style={{ width: "40%" }}
      type="number"
      value={props.value || 0}
      onChange={props.handleChangeInput}
    />
  </div>
);

export default Input;
