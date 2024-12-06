import { StyleProp, ViewStyle } from "react-native";

export type DropdownItem = {
  label: string;
  value: string;
};
export type DropdownProps = {
  items: DropdownItem[];
  placeholder: string;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
