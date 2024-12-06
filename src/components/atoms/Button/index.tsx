import AppText from "atoms/AppText";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  onPress,
  title,
  overrideContainerStyle,
  overrideTextStyle,
  type = "rounded",
}: ButtonProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        themedStyles.container,
        overrideContainerStyle,
        type === "border" && themedStyles.borderedButton,
        type === "normal" && themedStyles.normal,
      ]}
    >
      <AppText
        text={title}
        overrideTextStyle={[
          themedStyles.title,
          overrideTextStyle,
          type === "border" && themedStyles.borderedTitle,
          type === "normal" && themedStyles.normalText,
        ]}
      />
    </TouchableOpacity>
  );
};

export default Button;
