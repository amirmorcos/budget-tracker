import AppText from "atoms/AppText";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ButtonProps } from "./types";

const Button = ({
  onPress,
  title,
  overrideContainerStyle,
  overrideTextStyle,
  type = "rounded",
  disabled,
  isLoading,
}: ButtonProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPress={onPress}
      style={[
        themedStyles.container,
        overrideContainerStyle,
        type === "border" && themedStyles.borderedButton,
        type === "normal" && themedStyles.normal,
        (disabled || isLoading) && themedStyles.disabled,
      ]}
    >
      {isLoading && <ActivityIndicator color={currentTheme.LIGHT[100]} />}
      {!isLoading && (
        <AppText
          text={title}
          overrideTextStyle={[
            themedStyles.title,
            overrideTextStyle,
            type === "border" && themedStyles.borderedTitle,
            type === "normal" && themedStyles.normalText,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;
