import { TransactionType } from "models/Transaction";
import { useTransactions } from "./useTransaction";

export const useCategories = () => {
  const { transactions, isLoading } = useTransactions();

  const transportationLength = transactions.filter(
    (item) => item.category === TransactionType.TRANSPORTATION
  ).length;
  const salaryLength = transactions.filter(
    (item) => item.category === TransactionType.SALARY
  ).length;
  const foodLength = transactions.filter(
    (item) => item.category === TransactionType.FOOD
  ).length;
  const subscriptionLength = transactions.filter(
    (item) => item.category === TransactionType.SUBSCRIPTION
  ).length;
  const shoppingLength = transactions.filter(
    (item) => item.category === TransactionType.SHOPPING
  ).length;

  return {
    transportationLength,
    salaryLength,
    foodLength,
    subscriptionLength,
    shoppingLength,
    isLoading,
  };
};
