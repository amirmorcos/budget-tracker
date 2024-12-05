import { StyleProp, ViewStyle } from "react-native";

export type CardProps = {
  children: React.ReactNode;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
