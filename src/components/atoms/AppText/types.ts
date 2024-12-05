import { StyleProp, TextStyle } from "react-native";
import { AppFonts, FontFamily } from "theme/types";

export type AppTextProps = {
  text: string;
  fontSize?: keyof AppFonts;
  fontFamily?: keyof FontFamily;
  overrideTextStyle?: StyleProp<TextStyle>;
};
