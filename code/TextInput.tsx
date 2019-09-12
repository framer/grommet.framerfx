import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { sizeControl, themesControl } from "./utils/customControls"
import { useManagedState } from "./utils/useManagedState"
import { withHOC } from "./withHOC"

const InnerTextInput = ({ ["children"]: _, value, ...props }) => {
    const [currentValue, setValue] = useManagedState(value)

    return <System.TextInput value={currentValue} onChange={e => setValue(e.target.value)} {...props} />
}

export const TextInput = withHOC(InnerTextInput)

TextInput.defaultProps = {
    width: 200,
    height: 50,
}

addPropertyControls(TextInput, {
    placeholder: {
        title: "Placeholder",
        defaultValue: "placeholder",
        type: ControlType.String,
    },
    plain: { title: "Plain", defaultValue: false, type: ControlType.Boolean },
    value: { title: "Value", defaultValue: "", type: ControlType.String },
    size: sizeControl,
    disabled: {
        title: "Disabled",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    customTheme: themesControl,
})
