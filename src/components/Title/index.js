import React from "react";
import Button from "../Button";
import Icon from "material-ui/Icon";

const Title = props => (
  <div className="Title">
    <h1>{props.title}</h1>
    <Button
      id="Закрыть"
      style={{ height: 30, marginTop: 10, borderRadius: 40 }}
      button={<Icon>close</Icon>}
      Close={props.Close}
    />
  </div>
);

export default Title;
