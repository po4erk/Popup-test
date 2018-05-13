import React, { Component } from "react";
import Buttons from "../Button";
import Notation from "../Notation";
import Title from "../Title";

import Paper from "material-ui/Paper";

class Popup extends Component {
  state = {
    notations: this.props.trigger || []
  };

  handleChangeSelect = (e, index) => {
    let notation = this.state.notations.find(x => x.index === index);
    notation.selectValue = e.target.value;
  };
  handleChangeInput = (e, index) => {
    let notation = this.state.notations.find(x => x.index === index);
    notation.inputValue = e.target.value;
  };
  handleDelete = index => {
    let arr = this.state.notations.filter(notation => notation.index !== index);
    this.setState({ notations: arr });
  };
  save = () => {
    this.props.setNotations(this.state.notations);
    this.props.isOpen();
  };
  close = () => {
    this.props.setNotations(this.props.trigger);
    this.props.isOpen();
  };
  add = () => {
    let arr = this.state.notations;
    arr.push({
      index: Date.now(),
      inputValue: this.state.inputValue,
      selectValue: this.state.selectValue
    });
    this.setState({ notations: arr });
  };

  render() {
    const notations = this.state.notations.map(item => {
      return (
        <ol key={item.index}>
          <Notation
            index={item.index}
            inputValue={item.inputValue}
            selectValue={item.selectValue}
            handleChangeInput={this.handleChangeInput}
            handleChangeSelect={this.handleChangeSelect}
            handleDelete={this.handleDelete}
          />
        </ol>
      );
    });
    return (
      <Paper className="Popup">
        <Title title="Структура номеров" Close={this.close} />
        {notations}
        <Buttons
          id="Добавить"
          button="Добавить"
          color="primary"
          Add={this.add}
        />
        <Buttons
          id="Сохранить"
          variant="raised"
          color="primary"
          button="Сохранить"
          Save={this.save}
        />
        <Buttons id="Закрыть" button="Отмена" Close={this.close} />
      </Paper>
    );
  }
}

export default Popup;
