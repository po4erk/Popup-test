import React, { Component } from "react";
import SelectRoom from "../Select";
import Input from "../Input";
import Buttons from "../Button";
import Icon from "material-ui/Icon";

class Notation extends Component {
  state = {
    inputValue: this.props.inputValue || "",
    selectValue: this.props.selectValue || ""
  };

  delete = () => {
    this.props.handleDelete(this.props.index);
  };
  handleChangeSelect = e => {
    this.setState({
      selectValue: e.target.value
    });
    this.props.handleChangeSelect(e, this.props.index);
  };
  handleChangeInput = e => {
    this.setState({
      inputValue: e.target.value
    });
    this.props.handleChangeInput(e, this.props.index);
  };

  render() {
    const {inputValue,selectValue} = this.state;
    return (
      <li className="Notation">
        <SelectRoom
          className="Select"
          value={selectValue}
          handleChangeSelect={this.handleChangeSelect}
        />
        <Input
          className="Input"
          value={inputValue}
          handleChangeInput={this.handleChangeInput}
        />
        <Buttons
          id="Удалить"
          style={{ borderRadius: 50 + "%" }}
          color="secondary"
          button={<Icon>close</Icon>}
          className="Delete"
          Delete={this.delete}
        />
      </li>
    );
  }
}

export default Notation;
