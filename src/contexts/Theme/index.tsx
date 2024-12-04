import React, { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { Colors, ThemeColors } from "theme/index";

type ThemeContextProps = {
  currentTheme: Colors;
  onChangeTheme: (newTheme: Colors) => void;
};

const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: ThemeColors.light,
  onChangeTheme: (newTheme: Colors) => {},
});

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useColorScheme() === "dark";

  const [theme, setTheme] = useState(
    isDarkMode ? ThemeColors.dark : ThemeColors.light
  );

  const onChangeTheme = (newTheme: Colors) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
