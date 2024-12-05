import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import ThemeItem from "./components/ThemeItem";
import { SelectedTheme, useThemeContext } from "contexts/Theme";
import ThemeColors from "theme/colors";
import { useTheme } from "hooks/useTheme";

const ThemeScreen = () => {
  const {
    onChangeTheme,
    currentTheme: themeContext,
    selectedTheme,
  } = useThemeContext();
  const { currentTheme, newSelectedTheme } = useTheme();

  return (
    <ScreenLayout navigationTitle="Theme">
      <ThemeItem
        isSelected={selectedTheme == SelectedTheme.LIGHT}
        title="Light"
        overrideContainerStyle={{
          marginBottom: 30,
        }}
        onPress={() => {
          onChangeTheme(ThemeColors.light, SelectedTheme.LIGHT);
        }}
      />
      <ThemeItem
        isSelected={selectedTheme == SelectedTheme.DARK}
        title="Dark"
        onPress={() => {
          onChangeTheme(ThemeColors.dark, SelectedTheme.DARK);
        }}
        overrideContainerStyle={{
          marginBottom: 30,
        }}
      />
      <ThemeItem
        title="Use device theme"
        isSelected={selectedTheme == SelectedTheme.SYSTEM}
        onPress={() => {
          onChangeTheme(currentTheme, SelectedTheme.SYSTEM);
        }}
      />
    </ScreenLayout>
  );
};

export default ThemeScreen;
