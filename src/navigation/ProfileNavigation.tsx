import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParams } from "./types";
import { ProfileScreen, SettingsScreen, ThemeScreen } from "screens/index";

const Stack = createNativeStackNavigator<ProfileStackParams>();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Theme" component={ThemeScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
