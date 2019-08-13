import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/TextInput";
import { sizeControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function TextInput({ ["children"]: _, value, onChange, ...props }) {
  const [valueState, setValue] = React.useState<string>(value);

  return (
    <System.TextInput
      {...props}
      onChange={e => {
        const val = e.target.value;
        onChange && onChange(val);
        setValue(val);
      }}
      value={valueState}
      style={style}
    />
  );
}

TextInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(TextInput, {
  placeholder: merge(controls.placeholder, {}),
  plain: merge(controls.plain, {}),
  size: sizeControl,
  disabled: merge(controls.disabled, {}),
  checked: merge(controls.checked, {}),
  value: { type: ControlType.String, defaultValue: "TextInput" }
});
