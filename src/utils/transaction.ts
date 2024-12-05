import {
  BillIcon,
  FoodIcon,
  SalaryIcon,
  ShoppingIcon,
  TransportationIcon,
} from "assets/images/svg";
import { TransactionType } from "models/Transaction";
import { Colors } from "theme/types";

export enum FilterOption {
  HIGHEST = "highest",
  LOWEST = "lowest",
  NEWEST = "newest",
  OLDEST = "oldest",
  INCOME = "income",
  EXPENSES = "expenses",
}

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

const sortByDate = (data: any[], filter: FilterOption) => {
  const newData = [...data];
  if (filter === FilterOption.NEWEST) {
    return newData.sort((a, b) => b - a);
  }
  return newData.sort((a, b) => a - b);
};

const sortByAmount = (data: any[], filter: FilterOption) => {
  const newData = [...data];
  if (filter === FilterOption.HIGHEST) {
    return newData.sort((a, b) => b.amount - a.amount);
  }
  return newData.sort((a, b) => a.amount - b.amount);
};

const sortByType = (data: any[], filter: FilterOption) => {
  const newData = [...data];
  if (filter === FilterOption.INCOME) {
    return newData.filter((item) => item.type === "income");
  }
  return newData.filter((item) => item.type === "expenses");
};

const sortByCategory = (data: any[], filter: FilterOption) => {};

export const filterTransactions = (data: any[], filters: FilterOption[]) => {
  let filteredData = data;
  return filters.map((filter) => {
    switch (filter) {
      case FilterOption.HIGHEST:
      case FilterOption.LOWEST:
        filteredData = sortByDate(filteredData, filter);
        break;

      case FilterOption.NEWEST:
      case FilterOption.OLDEST:
        filteredData = sortByAmount(filteredData, filter);
        break;

      case FilterOption.EXPENSES:
      case FilterOption.INCOME:
        filteredData = sortByType(filteredData, filter);
        break;
      default:
        return;
    }
  });
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
