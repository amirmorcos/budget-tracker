import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FilterOption } from "utils/transaction";

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
  TransactionDetail: undefined;
};

export type ProfileScreenProps = NativeStackNavigationProp<ProfileStackParams>;
export type TransactionProps =
  NativeStackNavigationProp<TransactionsStackParams>;

export type HomeProps = NativeStackNavigationProp<HomeStackParams>;

export type AddTransactionRouteProp = RouteProp<
  HomeStackParams,
  "AddTransaction"
>;
