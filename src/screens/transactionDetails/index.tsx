import { useRoute } from "@react-navigation/native";
import AppText from "atoms/AppText";
import Card from "atoms/Card";
import { useThemeContext } from "contexts/Theme";
import { SectionHeader } from "molecules/index";
import { TransactionDetailRouteProp } from "navigation/types";
import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import { View } from "react-native";
import { FilterOption, formatTransactionAmount } from "utils/transaction";
import styles from "./styles";
import { formatDate } from "date-fns";

const TransactionDetails = () => {
  const { currentTheme } = useThemeContext();
  const {
    params: { item },
  } = useRoute<TransactionDetailRouteProp>();
  const themedStyles = styles(currentTheme);

  const isExpenses = item.type === FilterOption.EXPENSES;
  const itemType = isExpenses ? "Expense" : "Income";
  return (
    <ScreenLayout
      mainContainerStyle={{
        backgroundColor: !isExpenses
          ? currentTheme.GREEN[100]
          : currentTheme.RED[100],
      }}
      navigationColor={currentTheme.LIGHT[100]}
      navigationTitle="Detail Transaction"
    >
      <View style={themedStyles.centeredContainer}>
        <AppText
          text={formatTransactionAmount(item.amount)}
          overrideTextStyle={themedStyles.amount}
        />
        <AppText
          text={formatDate(item.createdAt, "EEEE dd LLL yyyy hh:mm aaa")}
          overrideTextStyle={themedStyles.time}
        />
      </View>
      <Card overrideContainerStyle={themedStyles.card}>
        <View style={themedStyles.gap}>
          <AppText text="Type" overrideTextStyle={themedStyles.infoTitle} />
          <AppText text={itemType} />
        </View>
        <View style={themedStyles.gap}>
          <AppText text="Category" overrideTextStyle={themedStyles.infoTitle} />
          <AppText text={item.category} />
        </View>
      </Card>

      <SectionHeader
        overrideContainerStyle={themedStyles.descriptionTitle}
        title="Description"
        overrideTextStyle={themedStyles.description}
      />
      <AppText
        text={item.description}
        overrideTextStyle={themedStyles.descriptionValue}
      />
    </ScreenLayout>
  );
};

export default TransactionDetails;
