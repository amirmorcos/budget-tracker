import { AppText } from "atoms/index";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { ThemeItemProps } from "./types";
import { SuccessIcon } from "assets/images/svg";
import { useThemeContext } from "contexts/Theme";

const ThemeItem = ({
  title,
  overrideContainerStyle,
  isSelected,
  onPress,
}: ThemeItemProps) => {
  const { currentTheme } = useThemeContext();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, overrideContainerStyle]}
    >
      <AppText text={title} />
      {isSelected && <SuccessIcon fill={currentTheme.VIOLET[100]} />}
    </TouchableOpacity>
  );
};

export default ThemeItem;
