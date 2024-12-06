import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddTransaction, HomeScreen } from "screens/index";
import { HomeStackParams } from "./types";

const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddTransaction" component={AddTransaction} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
