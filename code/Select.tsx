import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/Select";
import { sizeControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function Select({ ["children"]: _, ...props }) {
  // @ts-ignore
  return <System.Select {...props} style={style} />;
}

Select.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(Select, {
  options: {
    type: ControlType.Array,
    propertyControl: {
      type: ControlType.String
    },
    defaultValue: ["red", "green", "blue"]
  },
  closeOnChange: merge(controls.closeOnChange, { defaultValue: true }),
  multiple: merge(controls.multiple, { defaultValue: false }),
  open: merge(controls.open, { defaultValue: false }),
  plain: merge(controls.plain, {}),
  size: sizeControl,
  value: merge(controls.value, { defaultValue: "green" })
});
