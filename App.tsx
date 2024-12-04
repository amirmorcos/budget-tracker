/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import ThemeProvider from "contexts/Theme";
import BottomTabs from "navigation/BottomTabsNavigation";
import React from "react";

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
