import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Markdown";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Markdown(props) {
  return <System.Markdown {...props} style={style} />;
}

Markdown.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Markdown, {
  placeholder: merge(controls.placeholder, {})
});
