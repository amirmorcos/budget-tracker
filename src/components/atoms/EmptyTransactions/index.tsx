import NoTransactionsIcon from "assets/images/svg/noTransactions";
import { AppText } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import styles from "./styles";

const EmptyTransactions = () => {
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);

  return (
    <View style={themedStyles.container}>
      <NoTransactionsIcon />
      <AppText
        text="No Transactions found"
        overrideTextStyle={themedStyles.text}
      />
    </View>
  );
};

export default EmptyTransactions;
