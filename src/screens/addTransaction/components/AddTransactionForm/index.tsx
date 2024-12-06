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
import { Keyboard, TouchableOpacity } from "react-native";
import { CategoryType } from "models/Category";
import styles from "./styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TransactionFormData, transactionSchema } from "./types";

const AddTransactionForm = () => {
  const { currentTheme } = useThemeContext();
  const { handleSubmit, control, formState } = useForm<TransactionFormData>({
    resolver: yupResolver(transactionSchema),
    defaultValues: {
      category: "",
      description: "",
    },
  });

  const errors = formState.errors;

  const themedStyles = styles(currentTheme);

  const onSubmit = (data: TransactionFormData) => console.log(data);

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
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
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Dropdown
              onChangeValue={onChange}
              placeholder="Category"
              items={Object.values(CategoryType).map((item) => ({
                label: item,
                value: item,
              }))}
              errorMessage={errors.category?.message}
            />
          )}
          name="category"
        />

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Description"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.description?.message}
            />
          )}
          name="description"
        />
        <Button
          type="normal"
          title="Continue"
          onPress={handleSubmit(onSubmit)}
          overrideContainerStyle={themedStyles.button}
        />
      </Card>
    </TouchableOpacity>
  );
};

export default AddTransactionForm;
