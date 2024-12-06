import { ExpensesIcon, IncomeIcon } from "assets/images/svg";
import { AppText, Card } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { useAccount } from "hooks/useAccount";
import { formatTransactionAmount } from "utils/transaction";

const AccountBalance = () => {
  const { currentTheme } = useThemeContext();
  const { accountBalance, expenses, income } = useAccount();
  const themedStyles = styles(currentTheme);

  return (
    <View>
      <AppText
        overrideTextStyle={themedStyles.account}
        text="Account Balance"
        fontSize="regular3"
      />
      <AppText
        fontFamily="semiBold"
        overrideTextStyle={themedStyles.balance}
        text={formatTransactionAmount(accountBalance)}
      />

      <View style={themedStyles.rowContainer}>
        <Card overrideContainerStyle={themedStyles.incomeCard}>
          <View style={themedStyles.gapContainer}>
            <View style={themedStyles.iconContainer}>
              <IncomeIcon />
            </View>
            <View style={themedStyles.amountContainer}>
              <AppText
                fontSize="regular3"
                overrideTextStyle={themedStyles.title}
                text="Income"
              />
              <AppText
                fontFamily="semiBold"
                overrideTextStyle={themedStyles.amount}
                text={formatTransactionAmount(income)}
                numberOfLines={1}
              />
            </View>
          </View>
        </Card>

        <Card overrideContainerStyle={themedStyles.expensesCard}>
          <View style={themedStyles.gapContainer}>
            <View style={themedStyles.iconContainer}>
              <ExpensesIcon />
            </View>
            <View style={themedStyles.amountContainer}>
              <AppText
                fontSize="regular3"
                overrideTextStyle={themedStyles.title}
                text="Expenses"
              />
              <AppText
                overrideTextStyle={themedStyles.amount}
                text={formatTransactionAmount(expenses)}
                numberOfLines={1}
              />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default AccountBalance;
