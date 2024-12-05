import { BottomSheetModal } from "@gorhom/bottom-sheet";
import FilterIcon from "assets/images/svg/filter";
import { AppText } from "atoms/index";
import { useThemeContext } from "contexts/Theme";
import { TransactionItem } from "molecules/index";
import ScreenLayout from "organisms/ScreenLayout";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import TransactionFilter from "./components/TransactionFilter";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TransactionProps } from "navigation/types";

const TransactionsScreen = () => {
  const { currentTheme } = useThemeContext();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { navigate } = useNavigation<TransactionProps>();
  const themedStyles = styles(currentTheme);

  const onFilterPress = () => {
    bottomSheetRef.current?.present();
  };

  const onNavigate = () => {
    navigate("TransactionDetail");
  };
  return (
    <ScreenLayout>
      <TouchableOpacity style={themedStyles.filter} onPress={onFilterPress}>
        <FilterIcon />
      </TouchableOpacity>
      <AppText text="Today" />
      <TransactionItem
        onPress={onNavigate}
        overrideContainerStyle={{ marginTop: 10 }}
      />
      <TransactionFilter ref={bottomSheetRef} />
    </ScreenLayout>
  );
};

export default TransactionsScreen;
