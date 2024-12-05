import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const FilterIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill="#000"
      stroke="#212325"
      d="M27 8.5H5a.5.5 0 0 1 0-1h22a.5.5 0 0 1 0 1Z"
    />
    <Path
      fill="#000"
      d="M23 17H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2ZM19 25h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z"
    />
  </Svg>
);
export default FilterIcon;
