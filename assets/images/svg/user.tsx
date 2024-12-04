import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const UserIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#000"}
      d="M16 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM19 17.93h-6a7 7 0 0 0-7 7 3 3 0 0 0 3 3h14a3 3 0 0 0 3-3 7 7 0 0 0-7-7Z"
    />
  </Svg>
);
export default UserIcon;
