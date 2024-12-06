import api from "api/index";
import { queryClient } from "../../App";
import { Transaction } from "models/Transaction";
import { useMutation, useQuery } from "react-query";
import { queryKeys } from "utils/queryKeys";
import { FilterOption } from "utils/transaction";

export const useTransactions = () => {
  const fetchTransactions = async () => {
    const data = await api.get("transactions");
    return data;
  };

  const addTransaction = async (newTransaction: {
    description: string;
    amount: number;
    category: string;
    type: FilterOption.EXPENSES | FilterOption.INCOME;
  }) => {
    const data = await api.post("transactions", newTransaction);
    return data;
  };

  const transactionsQuery = useQuery<{ data: Transaction[] }>({
    queryKey: queryKeys.transactions,
    queryFn: fetchTransactions,
    cacheTime: 3000,
  });

  const { mutateAsync: addNewTransaction, isLoading: newTransactionLoading } =
    useMutation({
      mutationKey: queryKeys.transactions,
      mutationFn: addTransaction,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.transactions] });
      },
    });

  const recentTransactions = [...(transactionsQuery.data?.data ?? [])]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  const transactions = [...(transactionsQuery.data?.data ?? [])].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return {
    isLoading: transactionsQuery.isFetching,
    recentTransactions,
    transactions,
    addNewTransaction,
    newTransactionLoading,
    refetch: transactionsQuery.refetch,
  };
};
