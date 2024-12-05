import { StyleProp, TextProps, TextStyle } from "react-native";
import { AppFonts, FontFamily } from "theme/types";

export type AppTextProps = Omit<TextProps, "fontSize" | "fontFamily"> & {
  text: string;
  fontSize?: keyof AppFonts;
  fontFamily?: keyof FontFamily;
  overrideTextStyle?: StyleProp<TextStyle>;
};
