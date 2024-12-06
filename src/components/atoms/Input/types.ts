import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type InputProps = TextInputProps & {
  errorMessage?: string;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
