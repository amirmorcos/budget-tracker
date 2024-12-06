import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import FilterIcon from "assets/images/svg/filter";
import { useThemeContext } from "contexts/Theme";
import { useTransactions } from "hooks/useTransaction";
import { Transaction } from "models/Transaction";
import { TransactionItem } from "molecules/index";
import { TransactionProps } from "navigation/types";
import ScreenLayout from "organisms/ScreenLayout";
import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import TransactionFilter from "./components/TransactionFilter";
import styles from "./styles";
import { FilterOption, filterTransactions } from "utils/transaction";
import NoTransactionsIcon from "assets/images/svg/noTransactions";
import AppText from "atoms/AppText";
import EmptyTransactions from "atoms/EmptyTransactions";

const TransactionsScreen = () => {
  const { currentTheme } = useThemeContext();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { navigate } = useNavigation<TransactionProps>();
  const { transactions, refetch } = useTransactions();
  const [newTransactions, setNewTransactions] =
    useState<Transaction[]>(transactions);
  const [refreshing, setRefreshing] = useState(false);

  const themedStyles = styles(currentTheme);

  const onFilterPress = () => {
    bottomSheetRef.current?.present();
  };

  const onNavigate = (item: Transaction) => {
    navigate("TransactionDetail", {
      item,
    });
  };

  const onFilter = (filters: FilterOption[]) => {
    const transactionFiltered = filterTransactions(transactions, filters);
    setNewTransactions(transactionFiltered ?? []);
    bottomSheetRef.current?.close();
  };

  const onReset = () => {
    setNewTransactions(transactions);
    bottomSheetRef.current?.close();
  };

  const renderItem = ({ item }: ListRenderItemInfo<Transaction>) => {
    return (
      <TransactionItem
        key={item.id}
        item={item}
        onPress={() => onNavigate(item)}
      />
    );
  };

  const renderEmptyComponent = () => <EmptyTransactions />;

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [])
  );

  return (
    <ScreenLayout>
      <TouchableOpacity style={themedStyles.filter} onPress={onFilterPress}>
        <FilterIcon fill={currentTheme.DARK[100]} />
      </TouchableOpacity>
      <FlatList
        data={newTransactions}
        renderItem={renderItem}
        style={themedStyles.list}
        contentContainerStyle={themedStyles.listContent}
        ItemSeparatorComponent={() => <View style={themedStyles.seperator} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={renderEmptyComponent}
      />
      <TransactionFilter
        onReset={onReset}
        ref={bottomSheetRef}
        onFilter={onFilter}
      />
    </ScreenLayout>
  );
};

export default TransactionsScreen;
