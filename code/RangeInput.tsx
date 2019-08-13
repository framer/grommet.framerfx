import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/RangeInput";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export function RangeInput(props) {
  const { max, min, value, onChange, ["children"]: _, ...rest } = props;

  const [state, setState] = React.useState({ value });

  React.useEffect(() => {
    setState({ value });
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    setState({ ...state, value: event.target.value });
  };
  return (
    <System.RangeInput
      value={state.value}
      onChange={handleChange}
      min={props.min}
      max={props.max}
      step={props.step}
      {...rest}
      style={style}
    />
  );
}

RangeInput.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(RangeInput, {
  value: {
    type: ControlType.Number,
    min: 0,
    max: 100,
    defaultValue: 50,
    title: "Value"
  },
  min: {
    type: ControlType.Number,
    min: 0,
    max: 100,
    defaultValue: 0,
    title: "Min"
  },
  max: {
    type: ControlType.Number,
    min: 0,
    max: 100,
    defaultValue: 100,
    title: "Max"
  },
  step: {
    type: ControlType.Number,
    min: 0.001,
    max: 100,
    step: 0.001,
    defaultValue: 0.01,
    displayStepper: true,
    title: "Step"
  }
});
