import { StyleProp, ViewStyle } from "react-native";

export type TransactionItemProps = {
  onPress: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
