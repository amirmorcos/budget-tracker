import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, TransactionsIcon, UserIcon } from "assets/images/svg";
import { SelectedTheme, useThemeContext } from "contexts/Theme";
import React from "react";
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import TransactionNavigation from "./TransactionNavigation";
import { MainStackParams } from "./types";
import appFonts from "theme/fonts";
import { vs } from "react-native-size-matters/extend";
import { hasNotch } from "react-native-device-info";

const Tab = createBottomTabNavigator<MainStackParams>();

const BottomTabs = () => {
  const { currentTheme, selectedTheme } = useThemeContext();
  const height = hasNotch() ? vs(70) : vs(60);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: currentTheme.LIGHT[100],
          height,
        },
        tabBarLabelStyle: {
          ...appFonts.small,
        },
        tabBarActiveTintColor:
          selectedTheme === SelectedTheme.DARK
            ? currentTheme.VIOLET[20]
            : currentTheme.VIOLET[100],
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",

          tabBarIcon: ({ color, size }) => (
            <HomeIcon fontSize={size} fill={color} />
          ),
        }}
        name="HomeStack"
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Transactions",
          tabBarIcon: ({ color, size }) => (
            <TransactionsIcon fontSize={size} fill={color} />
          ),
        }}
        name="TransactionStack"
        component={TransactionNavigation}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigation}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <UserIcon fontSize={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
