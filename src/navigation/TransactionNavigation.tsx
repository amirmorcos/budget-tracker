import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransactionsStackParams } from "./types";
import { TransactionsScreen } from "screens/index";
import TransactionDetails from "screens/transactionDetails";

const Stack = createNativeStackNavigator<TransactionsStackParams>();

const TransactionNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetails} />
    </Stack.Navigator>
  );
};

export default TransactionNavigation;
