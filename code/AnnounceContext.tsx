import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/AnnounceContext";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function AnnounceContext(props) {
  return <System.AnnounceContext {...props} style={style} />;
}

AnnounceContext.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(AnnounceContext, {});
