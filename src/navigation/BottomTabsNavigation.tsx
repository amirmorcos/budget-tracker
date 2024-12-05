import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "screens/index";
import { HomeIcon, UserIcon } from "assets/images/svg";
import { useThemeContext } from "contexts/Theme";
import ProfileNavigation from "./ProfileNavigation";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { currentTheme } = useThemeContext();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: currentTheme.VIOLET[100],
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon fontSize={size} fill={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <UserIcon fontSize={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
