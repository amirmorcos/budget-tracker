import Placeholder from "atoms/Placeholder";
import { useThemeContext } from "contexts/Theme";
import { useTransactions } from "hooks/useTransaction";
import TransactionItem from "molecules/TransactionItem";
import { SectionHeader } from "molecules/index";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { RecentTransactionsProps } from "./types";
import EmptyTransactions from "atoms/EmptyTransactions";

const RecentTransactions = ({ onPress }: RecentTransactionsProps) => {
  const { currentTheme } = useThemeContext();
  const { recentTransactions, isLoading } = useTransactions();

  const themedStyles = styles(currentTheme);

  return (
    <View>
      <SectionHeader
        title="Recent Transactions"
        buttonTitle="See All"
        onPress={onPress}
        overrideContainerStyle={themedStyles.viewAll}
      />
      {isLoading && <Placeholder />}

      {!isLoading &&
        recentTransactions.length > 0 &&
        recentTransactions.map((item) => (
          <TransactionItem
            key={item.id}
            item={item}
            disabled
            overrideContainerStyle={themedStyles.item}
          />
        ))}

      {!isLoading && recentTransactions.length === 0 && <EmptyTransactions />}
    </View>
  );
};

export default RecentTransactions;
