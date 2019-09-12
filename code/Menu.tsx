import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { sizeControl, themesControl } from "./utils/customControls"
import { useManagedState } from "./utils/useManagedState"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerMenu: React.SFC<any> = ({ ["children"]: _, value, items, onChange, ...props }) => {
    const [currentValue, setValue] = useManagedState(value, onChange)

    return (
        <System.Menu
            {...props}
            label={currentValue}
            items={items.map(label => ({
                label,
                onClick: () => setValue(label),
            }))}
            style={style}
        />
    )
}

export const Menu = withHOC(InnerMenu)

Menu.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(Menu, {
    disabled: {
        title: "Disabled",
        defaultValue: false,
        type: ControlType.Boolean,
    },
    icon: { type: ControlType.Boolean, defaultValue: true },
    open: { title: "Open", defaultValue: false, type: ControlType.Boolean },
    value: { type: ControlType.String },
    size: sizeControl,
    items: {
        type: ControlType.Array,
        propertyControl: {
            type: ControlType.String,
        },
        defaultValue: ["Item 1", "Item 2", "Item 3"],
    },
    customTheme: themesControl,
})
