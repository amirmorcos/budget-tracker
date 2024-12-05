import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { CardProps } from "./types";

const Card = ({ children, overrideContainerStyle }: CardProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);
  return (
    <View style={[themedStyles.container, overrideContainerStyle]}>
      {children}
    </View>
  );
};

export default Card;
