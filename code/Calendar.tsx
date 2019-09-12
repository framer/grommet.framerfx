import { addPropertyControls, ControlType } from "framer"
import * as System from "grommet"
import * as React from "react"
import { themesControl } from "./utils/customControls"
import { withHOC } from "./withHOC"

const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
}

const InnerCalendar: React.SFC = props => {
    return <System.Calendar {...props} style={style} />
}

export const Calendar = withHOC(InnerCalendar)

Calendar.defaultProps = {
    width: 400,
    height: 430,
}

addPropertyControls(Calendar, {
    animate: { title: "Animate", defaultValue: true, type: ControlType.Boolean },
    daysOfWeek: {
        title: "DaysOfWeek",
        defaultValue: true,
        type: ControlType.Boolean,
    },
    showAdjacentDays: {
        title: "ShowAdjacentDays",
        defaultValue: true,
        type: ControlType.Boolean,
    },
    size: {
        type: ControlType.Enum,
        options: ["small", "medium", "large"],
        defaultValue: "medium",
    },
    customTheme: themesControl,
})
