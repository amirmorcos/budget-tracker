import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import { AccountBalance, RecentTransactions } from "./components";
import AddButton from "./components/AddButton";
import { useNavigation } from "@react-navigation/native";
import { HomeProps, TransactionProps } from "navigation/types";
import { FilterOption } from "utils/transaction";

const HomeScreen = () => {
  const { navigate } = useNavigation<HomeProps & TransactionProps>();

  const onViewAll = () => {};

  const onAdd = (type: FilterOption.EXPENSES | FilterOption.INCOME) => {
    navigate("AddTransaction", {
      type,
    });
  };

  return (
    <>
      <ScreenLayout enableScroll>
        <AccountBalance />
        <RecentTransactions onPress={onViewAll} />
      </ScreenLayout>
      <AddButton onPress={onAdd} />
    </>
  );
};

export default HomeScreen;
