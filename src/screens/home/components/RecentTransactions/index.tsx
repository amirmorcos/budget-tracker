import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { RecentTransactionsProps } from "./types";
import TransactionItem from "molecules/TransactionItem";
import { SectionHeader } from "molecules/index";

const RecentTransactions = ({ onPress }: RecentTransactionsProps) => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);

  return (
    <View>
      <SectionHeader
        title="Recent Transactions"
        buttonTitle="See All"
        onPress={onPress}
        overrideContainerStyle={themedStyles.viewAll}
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
      <TransactionItem
        overrideContainerStyle={{
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default RecentTransactions;
