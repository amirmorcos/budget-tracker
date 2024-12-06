import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { CloseIcon } from "assets/images/svg";
import AppText from "atoms/AppText";
import { useThemeContext } from "contexts/Theme";
import { BottomSheet, SectionHeader } from "molecules/index";
import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { FilterOption } from "utils/transaction";
import styles from "./styles";
import { AddButtonProps } from "./types";

const AddButton = ({ onPress, overrideContainerStyle }: AddButtonProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { currentTheme } = useThemeContext();
  const themedStyles = styles(currentTheme);

  const handleBottomSheet = () => {
    bottomSheetRef.current?.present();
  };

  const onAddTransaction = (
    type: FilterOption.INCOME | FilterOption.EXPENSES
  ) => {
    onPress(type);
    bottomSheetRef.current?.close();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleBottomSheet}
        style={[themedStyles.button, overrideContainerStyle]}
      >
        <CloseIcon />
      </TouchableOpacity>
      <BottomSheet ref={bottomSheetRef}>
        <SectionHeader title="Add Transaction" />
        <TouchableOpacity onPress={() => onAddTransaction(FilterOption.INCOME)}>
          <AppText text="Income" overrideTextStyle={themedStyles.income} />
        </TouchableOpacity>

        <View style={themedStyles.divider} />

        <TouchableOpacity
          onPress={() => {
            onAddTransaction(FilterOption.EXPENSES);
          }}
        >
          <AppText text="Expenses" />
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

export default AddButton;
