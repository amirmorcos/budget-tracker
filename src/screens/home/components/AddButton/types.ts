import { StyleProp, ViewStyle } from "react-native";
import { FilterOption } from "utils/transaction";

export type AddButtonProps = {
  onPress: (type: FilterOption.EXPENSES | FilterOption.INCOME) => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
