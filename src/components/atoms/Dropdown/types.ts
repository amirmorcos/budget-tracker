import { SetStateAction } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ValueType } from "react-native-dropdown-picker";

export type DropdownItem = {
  label: string;
  value: string;
};
export type DropdownProps = {
  items: DropdownItem[];
  onChangeValue: (value: SetStateAction<string>) => void;
  onBlur?: () => void;
  placeholder: string;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  errorMessage?: string;
};
