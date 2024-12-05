import { useThemeContext } from "contexts/Theme";
import NavigationHeader from "molecules/NavigationHeader";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { ScreenLayoutProps } from "./types";

const ScreenLayout = ({
  children,
  containerStyle,
  navigationTitle,
  enableScroll,
  mainContainerStyle,
  navigationColor,
}: ScreenLayoutProps) => {
  const { currentTheme } = useThemeContext();

  const themedStyles = styles(currentTheme);

  const ContentView = enableScroll ? ScrollView : View;

  return (
    <SafeAreaView style={[themedStyles.container, mainContainerStyle]}>
      {navigationTitle && (
        <NavigationHeader color={navigationColor} title={navigationTitle} />
      )}
      <ContentView
        bounces={false}
        style={[themedStyles.content, containerStyle]}
      >
        {children}
      </ContentView>
    </SafeAreaView>
  );
};

export default ScreenLayout;
