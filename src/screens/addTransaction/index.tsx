import { useRoute } from "@react-navigation/native";
import { useThemeContext } from "contexts/Theme";
import { AddTransactionRouteProp } from "navigation/types";
import ScreenLayout from "organisms/ScreenLayout";
import React from "react";
import { FilterOption } from "utils/transaction";
import AddTransactionForm from "./components/AddTransactionForm";
import styles from "./styles";

const AddTransaction = () => {
  const { currentTheme } = useThemeContext();
  const { params } = useRoute<AddTransactionRouteProp>();
  const type = params.type;

  const themedStyles = styles(currentTheme);

  return (
    <ScreenLayout
      navigationColor={currentTheme.LIGHT[100]}
      navigationTitle={type === FilterOption.EXPENSES ? "Expense" : "Income"}
      mainContainerStyle={{
        backgroundColor:
          type === FilterOption.EXPENSES
            ? currentTheme.RED[100]
            : currentTheme.GREEN[100],
      }}
      containerStyle={themedStyles.container}
    >
      <AddTransactionForm formType={type} />
    </ScreenLayout>
  );
};

export default AddTransaction;
