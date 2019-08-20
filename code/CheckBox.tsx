import * as React from "react";
import * as System from "grommet";
import { addPropertyControls } from "framer";
import { controls, merge } from "./generated/CheckBox";
import { withHOC } from "./withHOC";
import { themesControl } from "./colors";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

const InnerCheckBox: React.SFC<any> = props => {
  const {
    checked,
    color,
    disabled,
    onChange,
    indeterminate,
    label,
    ["children"]: _,
    ...rest
  } = props;

  const [state, setState] = React.useState({ checked });

  React.useEffect(() => {
    setState({ checked });
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    setState({ ...state, checked: event.target.checked });
  };
  return (
    <System.CheckBox
      {...rest}
      style={style}
      checked={state.checked}
      onChange={handleChange}
      disabled={props.disabled}
      label={props.label}
    />
  );
};

export const CheckBox = withHOC(InnerCheckBox);

CheckBox.defaultProps = {
  width: 100,
  height: 24,
  disabled: false,
  checked: false,
  label: "Hello World"
};

addPropertyControls(CheckBox, {
  label: merge(controls.label, {}),
  checked: merge(controls.checked, { defaultValue: false }),
  disabled: merge(controls.disabled, { defaultValue: false }),
  reverse: merge(controls.reverse, { defaultValue: false }),
  toggle: merge(controls.toggle, { defaultValue: false }),
  customTheme: themesControl
});
