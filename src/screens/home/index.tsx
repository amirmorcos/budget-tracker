import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import { AccountBalance, RecentTransactions } from "./components";

const HomeScreen = () => {
  const onViewAll = () => {};

  return (
    <ScreenLayout enableScroll>
      <AccountBalance />
      <RecentTransactions onPress={onViewAll} />
    </ScreenLayout>
  );
};

export default HomeScreen;
