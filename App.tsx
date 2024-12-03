/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "navigation/MainNavigation";
import React from "react";

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
