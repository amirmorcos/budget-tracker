import { Transaction } from "models/Transaction";
import { StyleProp, ViewStyle } from "react-native";

export type TransactionItemProps = {
  item: Transaction;
  onPress?: () => void;
  disabled?: boolean;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
