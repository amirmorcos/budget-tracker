import { StyleProp, TextInputProps, ViewStyle } from "react-native";

export type AmountInputProps = TextInputProps & {
  overrideContainerStyle?: StyleProp<ViewStyle>;
  errorMessage?: string;
};
