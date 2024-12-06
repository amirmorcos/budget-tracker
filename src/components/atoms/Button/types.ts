import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideTextStyle?: StyleProp<TextStyle>;
  type?: "border" | "normal" | "rounded";
  disabled?: boolean;
  isLoading?: boolean;
};
