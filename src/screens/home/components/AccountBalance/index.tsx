import { ExpensesIcon, IncomeIcon } from "assets/images/svg";
import { AppText, Card } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import styles from "./styles";

const AccountBalance = () => {
  const { currentTheme } = useThemeContext();
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
        text="$9400"
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
                text="$5000"
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
              <AppText overrideTextStyle={themedStyles.amount} text="$5000" />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default AccountBalance;
