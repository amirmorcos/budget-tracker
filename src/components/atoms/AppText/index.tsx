import React from "react";
import { Text } from "react-native";
import { AppTextProps } from "./types";
import { AppInterFonts, fonts } from "theme/index";
import { useThemeContext } from "contexts/Theme";

const AppText = ({
  fontSize,
  fontFamily,
  text,
  overrideTextStyle,
  ...props
}: AppTextProps) => {
  const { currentTheme } = useThemeContext();
  return (
    <Text
      {...props}
      style={[
        {
          ...AppInterFonts[fontSize ?? "regular1"],
          fontFamily: fonts[fontFamily ?? "medium"],
          color: currentTheme.DARK[75],
        },
        overrideTextStyle,
      ]}
    >
      {text}
    </Text>
  );
};

export default AppText;
