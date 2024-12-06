import { useThemeContext } from "contexts/Theme";
import React from "react";
import { ActivityIndicator } from "react-native";

const Placeholder = () => {
  const { currentTheme } = useThemeContext();
  return <ActivityIndicator color={currentTheme.DARK[75]} />;
};

export default Placeholder;
