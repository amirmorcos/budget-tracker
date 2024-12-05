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
  type,
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
      ]}
    >
      <AppText
        text={title}
        overrideTextStyle={[
          themedStyles.title,
          overrideTextStyle,
          type === "border" && themedStyles.borderedTitle,
        ]}
      />
    </TouchableOpacity>
  );
};

export default Button;
