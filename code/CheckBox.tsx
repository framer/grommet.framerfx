import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { themesControl } from "./utils/customControls"
import { useManagedState } from "./utils/useManagedState"
import { withHOC } from "./withHOC"

const InnerCheckBox: React.SFC<any> = ({ ["children"]: _, onChange, checked, ...props }) => {
    const [currentlyChecked, setChecked] = useManagedState(checked, onChange)

    return <System.CheckBox {...props} checked={currentlyChecked} onChange={e => setChecked(e.target.checked)} />
}

export const CheckBox = withHOC(InnerCheckBox)

CheckBox.defaultProps = {
    width: 100,
    height: 24,
    disabled: false,
    checked: false,
    label: "Hello World",
}

addPropertyControls(CheckBox, {
    label: { title: "Label", defaultValue: "", type: ControlType.String },
    checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
    disabled: {
        title: "Disabled",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    reverse: { title: "Reverse", defaultValue: false, type: ControlType.Boolean },
    toggle: { title: "Toggle", defaultValue: false, type: ControlType.Boolean },
    customTheme: themesControl,
})
