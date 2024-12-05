import AppText from "atoms/AppText";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button = ({ onPress, title, overrideContainerStyle }: ButtonProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[themedStyles.container, overrideContainerStyle]}
    >
      <AppText text={title} overrideTextStyle={themedStyles.title} />
    </TouchableOpacity>
  );
};

export default Button;
