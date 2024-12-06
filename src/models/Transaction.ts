import { FilterOption } from "utils/transaction";

export enum TransactionType {
  SHOPPING = "Shopping",
  SALARY = "Salary",
  SUBSCRIPTION = "Subscription",
  FOOD = "Food",
  TRANSPORTATION = "Transportation",
}

export type Transaction = {
  id: string;
  createdAt: string;
  category: TransactionType;
  type: FilterOption.EXPENSES | FilterOption.INCOME;
  description: string;
  amount: number;
};
