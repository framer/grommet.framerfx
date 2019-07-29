import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Form";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Form(props) {
  return <System.Form {...props} style={style} />;
}

Form.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Form, {
  placeholder: merge(controls.placeholder, {})
});
