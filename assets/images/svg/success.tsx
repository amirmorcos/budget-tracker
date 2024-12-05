import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SuccessIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#5233FF"}
      d="M16 4a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.66 9.59L16 19.24a3 3 0 0 1-4.24 0l-1.42-1.41a1.004 1.004 0 0 1 1.42-1.42l1.41 1.42a1.002 1.002 0 0 0 1.42 0l5.65-5.66a1.004 1.004 0 0 1 1.42 1.42Z"
    />
  </Svg>
);
export default SuccessIcon;
