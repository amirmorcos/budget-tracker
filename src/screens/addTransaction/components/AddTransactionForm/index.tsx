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
import {
  AddTransactionsFormProps,
  TransactionFormData,
  transactionSchema,
} from "./types";
import { useTransactions } from "hooks/useTransaction";
import { useNavigation } from "@react-navigation/native";
import { FilterOption } from "utils/transaction";

const AddTransactionForm = ({ formType }: AddTransactionsFormProps) => {
  const navigation = useNavigation();
  const { currentTheme } = useThemeContext();
  const { handleSubmit, control, formState } = useForm<TransactionFormData>({
    resolver: yupResolver(transactionSchema),
    defaultValues: {
      category: "",
      description: "",
    },
  });
  const { addNewTransaction, newTransactionLoading } = useTransactions();

  const errors = formState.errors;

  const themedStyles = styles(currentTheme);

  const onSubmit = async (data: TransactionFormData) => {
    Keyboard.dismiss();
    const response = await addNewTransaction({
      category: data.category,
      amount: parseInt(data.amount),
      description: data.description,
      type: formType,
    });
    if (response.status === 201) {
      navigation.goBack();
    }
  };

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
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <AmountInput
            value={value}
            onChangeText={onChange}
            placeholder="0"
            errorMessage={errors.amount?.message}
          />
        )}
        name="amount"
      />
      <Card overrideContainerStyle={themedStyles.card}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              value={value}
              onChangeValue={onChange}
              placeholder="Category"
              items={
                formType === FilterOption.INCOME
                  ? [{ label: CategoryType.SALARY, value: CategoryType.SALARY }]
                  : Object.values(CategoryType).map((value) => ({
                      label: value,
                      value: value,
                    }))
              }
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
          isLoading={newTransactionLoading}
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
