import {
  BillIcon,
  FoodIcon,
  SalaryIcon,
  ShoppingIcon,
  TransportationIcon,
} from "assets/images/svg";
import { format } from "date-fns";
import { Transaction, TransactionType } from "models/Transaction";
import { Colors } from "theme/types";

export enum FilterOption {
  HIGHEST = "highest",
  LOWEST = "lowest",
  NEWEST = "newest",
  OLDEST = "oldest",
  INCOME = "income",
  EXPENSES = "expenses",
  SHOPPING = "Shopping",
  SALARY = "Salary",
  SUBSCRIPTION = "Subscription",
  FOOD = "Food",
  TRANSPORTATION = "Transportation",
}

export const getTransactionInfo = (type: TransactionType, colors: Colors) => {
  switch (type) {
    case TransactionType.FOOD:
      return {
        color: colors.RED[20],
        icon: FoodIcon,
        text: "Food",
      };
    case TransactionType.SALARY:
      return {
        color: colors.GREEN[20],
        icon: SalaryIcon,
        text: "Salary",
      };
    case TransactionType.SHOPPING:
      return {
        color: colors.YELLOW[20],
        icon: ShoppingIcon,
        text: "Shopping",
      };
    case TransactionType.SUBSCRIPTION:
      return {
        color: colors.VIOLET[20],
        icon: BillIcon,
        text: "Subscription",
      };
    case TransactionType.TRANSPORTATION:
      return {
        color: colors.BLUE[20],
        icon: TransportationIcon,
        text: "Transportation",
      };
  }
};

const sortByDate = (data: Transaction[], filter: FilterOption) => {
  const newData = [...data];
  if (filter === FilterOption.NEWEST) {
    return newData.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  return newData.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
};

const sortByAmount = (data: Transaction[], filter: FilterOption) => {
  const newData = [...data];
  if (filter === FilterOption.HIGHEST) {
    return newData.sort((a, b) => b.amount - a.amount);
  }
  return newData.sort((a, b) => a.amount - b.amount);
};

const sortByType = (data: Transaction[], filter: FilterOption) => {
  const newData = [...data];
  if (filter === FilterOption.INCOME) {
    return newData.filter((item) => item.type === "income");
  }
  return newData.filter((item) => item.type === "expenses");
};

const sortByCategory = (data: Transaction[], filter: TransactionType) => {
  const newData = [...data];
  return newData.filter((item) => item.category === filter);
};

export const filterTransactions = (
  data: Transaction[],
  filters: FilterOption[]
) => {
  let filteredData = data;
  filters.forEach((filter) => {
    switch (filter) {
      case FilterOption.HIGHEST:
      case FilterOption.LOWEST:
        filteredData = sortByAmount(filteredData, filter);
        break;

      case FilterOption.NEWEST:
      case FilterOption.OLDEST:
        filteredData = sortByDate(filteredData, filter);
        break;

      case FilterOption.EXPENSES:
      case FilterOption.INCOME:
        filteredData = sortByType(filteredData, filter);
        break;

      case FilterOption.FOOD:
      case FilterOption.SALARY:
      case FilterOption.SHOPPING:
      case FilterOption.SUBSCRIPTION:
      case FilterOption.TRANSPORTATION:
        filteredData = sortByCategory(
          filteredData,
          filter as unknown as TransactionType
        );
        break;
      default:
        return;
    }
  });
  return filteredData;
};

export const formatTransactionDate = (date: string) => {
  return format(date, "KK:mm aaa");
};

export const formatTransactionAmount = (amount: number) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const typeFilters = [
  {
    title: "Income",
    filter: FilterOption.INCOME,
  },
  {
    title: "Expenses",
    filter: FilterOption.EXPENSES,
  },
];

export const sortFilters = [
  {
    title: "Highest",
    filter: FilterOption.HIGHEST,
  },
  {
    title: "Lowest",
    filter: FilterOption.LOWEST,
  },
  {
    title: "Newest",
    filter: FilterOption.NEWEST,
  },
  {
    title: "Oldest",
    filter: FilterOption.OLDEST,
  },
];

export const categoryFilters = [
  FilterOption.SHOPPING,
  FilterOption.TRANSPORTATION,
  FilterOption.SALARY,
  FilterOption.SUBSCRIPTION,
  FilterOption.FOOD,
];
