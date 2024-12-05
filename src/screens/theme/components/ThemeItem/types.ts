import { StyleProp, ViewStyle } from "react-native";

export type ThemeItemProps = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
