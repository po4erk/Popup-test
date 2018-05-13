import React from "react";
import Button from "material-ui/Button";

const Buttons = props => {
  const {style,variant,color,button} = props;
  const btnClick = () => {
    switch (props.id) {
      case "Сохранить":
        return props.Save;
      case "Отмена":
        return props.Close;
      case "Закрыть":
        return props.Close;
      case "Удалить":
        return props.Delete;
      default:
        return props.Add;
    }
  };
  return (
    <Button
      style={style}
      className="Buttons"
      variant={variant}
      color={color}
      onClick={btnClick()}
    >
      {button}
    </Button>
  );
};

export default Buttons;
