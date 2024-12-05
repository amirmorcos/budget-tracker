import { SelectedTheme } from "contexts/Theme";
import { useColorScheme } from "react-native";
import ThemeColors from "theme/colors";

export const useTheme = () => {
  const isDarkMode = useColorScheme() === "dark";

  const newSelectedTheme = isDarkMode
    ? SelectedTheme.DARK
    : SelectedTheme.LIGHT;

  const currentTheme = isDarkMode ? ThemeColors.dark : ThemeColors.light;

  return {
    isDarkMode,
    newSelectedTheme,
    currentTheme,
  };
};
