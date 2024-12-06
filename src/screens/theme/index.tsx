import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import ThemeItem from "./components/ThemeItem";
import { SelectedTheme, useThemeContext } from "contexts/Theme";
import ThemeColors from "theme/colors";
import { useTheme } from "hooks/useTheme";
import styles from "./styles";

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
        overrideContainerStyle={styles.margin}
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
        overrideContainerStyle={styles.margin}
      />
    </ScreenLayout>
  );
};

export default ThemeScreen;
