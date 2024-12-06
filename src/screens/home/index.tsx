import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import {
  AccountBalance,
  RecentTransactions,
  SpendFrequency,
} from "./components";
import AddButton from "./components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { CombinedProps } from "navigation/types";
import { FilterOption } from "utils/transaction";
import PieChart from "react-native-pie-chart";
import SectionHeader from "molecules/SectionHeader";

const HomeScreen = () => {
  const { navigate } = useNavigation<CombinedProps>();

  const onViewAll = () => {
    navigate("TransactionStack");
  };

  const onAdd = (type: FilterOption.EXPENSES | FilterOption.INCOME) => {
    navigate("AddTransaction", {
      type,
    });
  };

  return (
    <>
      <ScreenLayout enableScroll containerStyle={{ paddingBottom: 80 }}>
        <AccountBalance />
        <SpendFrequency />
        <RecentTransactions onPress={onViewAll} />
      </ScreenLayout>
      <AddButton onPress={onAdd} />
    </>
  );
};

export default HomeScreen;
