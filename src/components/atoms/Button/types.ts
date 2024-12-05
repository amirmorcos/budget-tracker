import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideTextStyle?: StyleProp<TextStyle>;
  type?: "border" | "normal";
};
