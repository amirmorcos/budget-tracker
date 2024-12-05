import {
  BillIcon,
  FoodIcon,
  SalaryIcon,
  ShoppingIcon,
  TransportationIcon,
} from "assets/images/svg";
import { TransactionType } from "models/Transaction";
import { Colors } from "theme/types";

export const getTransactionIcon = (type: TransactionType, colors: Colors) => {
  switch (type) {
    case TransactionType.FOOD:
      return {
        color: colors.RED[20],
        icon: FoodIcon,
      };
    case TransactionType.SALARY:
      return {
        color: colors.GREEN[20],
        icon: SalaryIcon,
      };
    case TransactionType.SHOPPING:
      return {
        color: colors.YELLOW[20],
        icon: ShoppingIcon,
      };
    case TransactionType.SUBSCRIPTION:
      return {
        color: colors.VIOLET[20],
        icon: BillIcon,
      };
    case TransactionType.TRANSPORTATION:
      return {
        color: colors.BLUE[20],
        icon: TransportationIcon,
      };
  }
};
