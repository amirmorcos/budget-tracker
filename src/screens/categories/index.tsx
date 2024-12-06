import AppText from "atoms/AppText";
import { useCategories } from "hooks/useCategories";
import SectionHeader from "molecules/SectionHeader";
import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import { View } from "react-native";
import { formatTransactionAmount } from "utils/transaction";
import styles from "./styles";

const CategoriesScreen = () => {
  const {
    foodExpenses,
    salaryExpenses,
    shoppingExpenses,
    subscriptionExpenses,
    transportationExpenses,
  } = useCategories();

  const items = [
    {
      title: "Shopping",
      amount: shoppingExpenses,
    },
    {
      title: "Food",
      amount: foodExpenses,
    },
    {
      title: "Transportation",
      amount: transportationExpenses,
    },
    {
      title: "Subscription",
      amount: subscriptionExpenses,
    },
    {
      title: "Salary",
      amount: salaryExpenses,
    },
  ];

  return (
    <ScreenLayout>
      <SectionHeader title="Categories" />
      {items.map((item, index) => (
        <View key={`category-${index}`} style={styles.itemContainer}>
          <AppText text={item.title} />
          <AppText text={formatTransactionAmount(item.amount)} />
        </View>
      ))}
    </ScreenLayout>
  );
};

export default CategoriesScreen;
