import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AppText, Button } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import BottomSheet from "molecules/BottomSheet";
import SectionHeader from "molecules/SectionHeader";
import React, { forwardRef, useState } from "react";
import { View } from "react-native";
import { FilterOption, sortFilters, typeFilters } from "utils/transaction";
import styles from "./styles";

const TransactionFilter = forwardRef<BottomSheetModal, {}>(({}, ref) => {
  const { currentTheme } = useThemeContext();
  const [filters, setFilters] = useState<
    { type: "sort" | "type" | "category"; filter: FilterOption }[]
  >([]);

  const themedStyles = styles(currentTheme);

  const onTransactionFilter = (
    filter: FilterOption,
    filterType: "sort" | "type" | "category"
  ) => {
    let newFilters = [...filters];
    const found = newFilters.find((item) => item.type === filterType);

    if (found) {
      newFilters = newFilters.filter((item) => item.type !== filterType);
    }

    newFilters.push({
      type: filterType,
      filter,
    });

    // filterTransactions
    setFilters(newFilters);
  };

  const onResetFilter = () => {
    setFilters([]);
  };

  return (
    <BottomSheet ref={ref}>
      <SectionHeader
        title="Filter Transaction"
        buttonTitle="Reset"
        onPress={onResetFilter}
      />
      <AppText text="Filter By" />
      <View style={themedStyles.filterContainer}>
        {typeFilters.map((item) => (
          <Button
            onPress={() => onTransactionFilter(item.filter, "type")}
            title={item.title}
            type={
              filters.find(
                (element) =>
                  element.type === "type" && element.filter === item.filter
              )
                ? "normal"
                : "border"
            }
          />
        ))}
      </View>
      <AppText text="Sort By" />
      <View style={themedStyles.filterContainer}>
        {sortFilters.map((item) => (
          <Button
            onPress={() => onTransactionFilter(item.filter, "sort")}
            title={item.title}
            type={
              filters.find(
                (element) =>
                  element.type === "sort" && element.filter === item.filter
              )
                ? "normal"
                : "border"
            }
          />
        ))}
      </View>
      <AppText text="Category" />

      <View style={themedStyles.filterContainer}>
        <Button onPress={() => {}} title="Shopping" type="border" />
        <Button onPress={() => {}} title="Transportation" type="border" />
        <Button onPress={() => {}} title="Salary" type="border" />
        <Button onPress={() => {}} title="Food" type="border" />
        <Button onPress={() => {}} title="Subscription" type="border" />
      </View>

      <Button
        title="Apply"
        overrideTextStyle={themedStyles.applyButtonText}
        onPress={() => {}}
        overrideContainerStyle={themedStyles.applyButton}
      />
    </BottomSheet>
  );
});

export default TransactionFilter;
