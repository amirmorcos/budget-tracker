import React, { createContext, useContext, useState } from "react";
import { Colors, ThemeColors } from "theme/index";

export enum SelectedTheme {
  LIGHT = "Light",
  DARK = "Dark",
}

type ThemeContextProps = {
  currentTheme: Colors;
  onChangeTheme: (newTheme: Colors, newSelectedTheme: SelectedTheme) => void;
  selectedTheme: SelectedTheme;
};

const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: ThemeColors.light,
  onChangeTheme: (newTheme: Colors, newSelectedTheme: SelectedTheme) => {},
  selectedTheme: SelectedTheme.LIGHT,
});

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(ThemeColors.light);
  const [themeSelection, setThemeSelection] = useState(SelectedTheme.LIGHT);

  const onChangeTheme = (newTheme: Colors, newSelectedTheme: SelectedTheme) => {
    setTheme(newTheme);
    setThemeSelection(newSelectedTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        onChangeTheme,
        selectedTheme: themeSelection,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
