import AppText from "atoms/AppText";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Button } from "atoms/index";
import { RecentTransactionsProps } from "./types";
import TransactionItem from "molecules/TransactionItem";

const RecentTransactions = ({ onPress }: RecentTransactionsProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);

  return (
    <View>
      <View style={themedStyles.container}>
        <AppText text="Recent Transactions" fontSize="title3" />
        <Button onPress={onPress} title="See All" />
      </View>
      <TransactionItem
        overrideContainerStyle={{
          marginTop: 10,
        }}
      />
      <TransactionItem
        overrideContainerStyle={{
          marginTop: 10,
        }}
      />
      <TransactionItem
        overrideContainerStyle={{
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default RecentTransactions;
