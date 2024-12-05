import { AppText } from "atoms/index";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";
import { ThemeItemProps } from "./types";

const ThemeItem = ({
  title,
  overrideContainerStyle,
  isSelected,
  onPress,
}: ThemeItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, overrideContainerStyle]}
    >
      <AppText text={title} />
    </TouchableOpacity>
  );
};

export default ThemeItem;
