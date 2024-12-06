import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AppText, Button } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import BottomSheet from "molecules/BottomSheet";
import SectionHeader from "molecules/SectionHeader";
import React, { forwardRef, useState } from "react";
import { View } from "react-native";
import {
  categoryFilters,
  FilterOption,
  sortFilters,
  typeFilters,
} from "utils/transaction";
import styles from "./styles";
import { TransactionFilterProps } from "./types";

const TransactionFilter = forwardRef<BottomSheetModal, TransactionFilterProps>(
  ({ onFilter, onReset }, ref) => {
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

      setFilters(newFilters);
    };

    const onResetFilter = () => {
      setFilters([]);
      onReset();
    };

    const onApply = () => {
      onFilter(filters.map((item) => [item.filter]).flat());
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
                  ? "rounded"
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
                  ? "rounded"
                  : "border"
              }
            />
          ))}
        </View>
        <AppText text="Category" />
        <View style={themedStyles.filterContainer}>
          {categoryFilters.map((item) => (
            <Button
              onPress={() => onTransactionFilter(item, "category")}
              title={item}
              type={
                filters.find(
                  (element) =>
                    element.type === "category" && element.filter === item
                )
                  ? "rounded"
                  : "border"
              }
            />
          ))}
        </View>

        <Button
          title="Apply"
          type="normal"
          overrideTextStyle={themedStyles.applyButtonText}
          onPress={onApply}
          overrideContainerStyle={themedStyles.applyButton}
        />
      </BottomSheet>
    );
  }
);

export default TransactionFilter;
