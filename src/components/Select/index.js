import React from "react";
import Select from "material-ui/Select";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";

const SelectRoom = props => (
  <FormControl style={{ width: "30%" }} className="Select">
    <InputLabel htmlFor="select">Room</InputLabel>
    <Select
      inputProps={{ name: "room", id: "select" }}
      value={props.value}
      onChange={props.handleChangeSelect}
    >
      <MenuItem value="once" selected>
        Once
      </MenuItem>
      <MenuItem value="twice">Twice</MenuItem>
      <MenuItem value="tripple">Tripple</MenuItem>
      <MenuItem value="quadro">Quadro</MenuItem>
    </Select>
  </FormControl>
);

export default SelectRoom;
