import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "screens/index";
import { HomeIcon, TransactionsIcon, UserIcon } from "assets/images/svg";
import { useThemeContext } from "contexts/Theme";
import ProfileNavigation from "./ProfileNavigation";
import TransactionNavigation from "./TransactionNavigation";

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
