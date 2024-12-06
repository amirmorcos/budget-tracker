import { FilterOption } from "utils/transaction";
import { useTransactions } from "./useTransaction";

export const useAccount = () => {
  const { transactions } = useTransactions();

  const filteredIncomeTransactions = transactions.filter(
    (item) => item.type === FilterOption.INCOME
  );

  const income = filteredIncomeTransactions.reduce((oldItem, newItem) => {
    return oldItem + newItem.amount;
  }, 0);

  const filteredExpensesTransactions = transactions.filter(
    (item) => item.type === FilterOption.EXPENSES
  );

  const expenses = filteredExpensesTransactions.reduce((oldItem, newItem) => {
    return oldItem + newItem.amount;
  }, 0);

  const accountBalance = income - expenses;

  return {
    expenses,
    income,
    accountBalance,
  };
};
