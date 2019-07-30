import * as React from "react"
import * as System from "grommet"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { controls, merge } from "./inferredProps/RadioButton"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

export function RadioButton(props) {
    const {
        checked,
        color,
        disabled,
        onChange,
        indeterminate,
        label,
        ["children"]: _,
        ...rest
    } = props

    const [state, setState] = React.useState({ checked })

    React.useEffect(() => {
        setState({ checked })
    }, [checked])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event)
        setState({ ...state, checked: event.target.checked })
    }

    return (
        <System.RadioButton
            {...rest}
            style={style}
            checked={state.checked}
            onChange={handleChange}
            disabled={props.disabled}
            label={props.label}
        />
    )
}

RadioButton.defaultProps = {
    width: 100,
    height: 24,
    disabled: false,
    checked: false,
    label: "Hello World",
}

addPropertyControls(RadioButton, {
    label: merge(controls.label, {}),
    checked: merge(controls.checked, {}),
    disabled: merge(controls.disabled, {}),
    reverse: merge(controls.reverse, {}),
})
