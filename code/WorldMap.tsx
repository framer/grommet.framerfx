import * as React from "react";
import * as System from "grommet";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { controls, merge } from "./inferredProps/WorldMap";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

// Expose in V2
function WorldMap(props) {
  return (
    <System.WorldMap
      color="neutral-1"
      style={style}
      continents={[
        {
          name: "Africa",
          color: "light-5",
          onClick: name => {}
        }
      ]}
      places={[
        {
          name: "Sydney",
          location: [props.locationX, props.locationY],
          color: "accent-2",
          onClick: name => {}
        }
      ]}
      selectColor="accent-2"
      {...props}
    />
  );
}

WorldMap.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(WorldMap, {
  hoverColor: merge(controls.hoverColor, {
    defaultValue: "red"
  }),
  locationX: { type: ControlType.Number, defaultValue: -33.8830555556 },
  locationY: { type: ControlType.Number, defaultValue: 151.216666667 }
});
