import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type SectionHeaderProps = {
  title: string;
  buttonTitle?: string;
  onPress?: () => void;
  overrideTextStyle?: StyleProp<TextStyle>;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
