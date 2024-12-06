import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Transaction } from "models/Transaction";
import { FilterOption } from "utils/transaction";

export type MainStackParams = {
  HomeStack: undefined;
  TransactionStack: undefined;
  ProfileStack: undefined;
  Categories: undefined;
};
export type HomeStackParams = {
  Home: undefined;
  AddTransaction: { type: FilterOption.EXPENSES | FilterOption.INCOME };
};

export type ProfileStackParams = {
  Profile: undefined;
  Settings: undefined;
  Theme: undefined;
};

export type TransactionsStackParams = {
  Transactions: undefined;
  TransactionDetail: { item: Transaction };
};

export type ProfileScreenProps = NativeStackNavigationProp<ProfileStackParams>;
export type TransactionProps =
  NativeStackNavigationProp<TransactionsStackParams>;

export type HomeProps = NativeStackNavigationProp<HomeStackParams>;

export type AddTransactionRouteProp = RouteProp<
  HomeStackParams,
  "AddTransaction"
>;

export type CombinedProps = NativeStackNavigationProp<
  HomeStackParams & MainStackParams
>;

export type TransactionDetailRouteProp = RouteProp<
  TransactionsStackParams,
  "TransactionDetail"
>;
