import {
  AmountInput,
  AppText,
  Button,
  Card,
  Dropdown,
  Input,
} from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import React from "react";
import { View } from "react-native";
import { CategoryType } from "models/Category";
import styles from "./styles";

const AddTransactionForm = () => {
  const { currentTheme } = useThemeContext();

  const themedStyles = styles(currentTheme);

  return (
    <View>
      <AppText
        text="How Much"
        fontSize="title3"
        fontFamily="semiBold"
        overrideTextStyle={{
          color: currentTheme.LIGHT[80],
        }}
      />
      <AmountInput />
      <Card overrideContainerStyle={themedStyles.card}>
        <Dropdown
          placeholder="Category"
          items={Object.values(CategoryType).map((item) => ({
            label: item,
            value: item,
          }))}
        />
        <Input />
        <Button type="normal" title="Continue" onPress={() => {}} />
      </Card>
    </View>
  );
};

export default AddTransactionForm;
