import { useThemeContext } from "contexts/Theme";
import NavigationHeader from "molecules/NavigationHeader";
import React from "react";
import { SafeAreaView, View } from "react-native";
import styles from "./styles";
import { ScreenLayoutProps } from "./types";

const ScreenLayout = ({
  children,
  containerStyle,
  navigationTitle,
}: ScreenLayoutProps) => {
  const { currentTheme } = useThemeContext();

  const themedStyles = styles(currentTheme);

  return (
    <SafeAreaView style={themedStyles.container}>
      {navigationTitle && <NavigationHeader title={navigationTitle} />}
      <View style={[themedStyles.content, containerStyle]}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenLayout;
