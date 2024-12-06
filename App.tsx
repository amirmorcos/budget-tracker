/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import ThemeProvider from "contexts/Theme";
import BottomTabs from "navigation/BottomTabsNavigation";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <BottomTabs />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
