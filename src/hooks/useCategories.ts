import { TransactionType } from "models/Transaction";
import { useTransactions } from "./useTransaction";

export const useCategories = () => {
  const { transactions, isLoading } = useTransactions();

  const filteredTransportation = transactions.filter(
    (item) => item.category === TransactionType.TRANSPORTATION
  );

  const transportationLength = filteredTransportation.length;

  const transportationExpenses = filteredTransportation.reduce(
    (oldItem, newItem) => {
      return oldItem + newItem.amount;
    },
    0
  );

  const filteredSalary = transactions.filter(
    (item) => item.category === TransactionType.SALARY
  );

  const salaryLength = filteredSalary.length;

  const salaryExpenses = filteredSalary.reduce((oldItem, newItem) => {
    return oldItem + newItem.amount;
  }, 0);

  const filteredFood = transactions.filter(
    (item) => item.category === TransactionType.FOOD
  );

  const foodLength = filteredFood.length;

  const foodExpenses = filteredFood.reduce((oldItem, newItem) => {
    return oldItem + newItem.amount;
  }, 0);

  const filteredSubscription = transactions.filter(
    (item) => item.category === TransactionType.SUBSCRIPTION
  );

  const subscriptionLength = filteredSubscription.length;

  const subscriptionExpenses = filteredSubscription.reduce(
    (oldItem, newItem) => {
      return oldItem + newItem.amount;
    },
    0
  );

  const filteredShopping = transactions.filter(
    (item) => item.category === TransactionType.SHOPPING
  );

  const shoppingLength = filteredSubscription.length;

  const shoppingExpenses = filteredSubscription.reduce((oldItem, newItem) => {
    return oldItem + newItem.amount;
  }, 0);

  return {
    transportationLength,
    salaryLength,
    foodLength,
    subscriptionLength,
    shoppingLength,
    isLoading,
    transportationExpenses,
    foodExpenses,
    salaryExpenses,
    subscriptionExpenses,
    shoppingExpenses,
  };
};
