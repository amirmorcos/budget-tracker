import { StyleProp, ViewStyle } from "react-native";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
