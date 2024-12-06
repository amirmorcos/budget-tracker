import { FilterOption } from "utils/transaction";
import * as yup from "yup";

export type TransactionFormData = {
  amount: string;
  description: string;
  category: string;
};

export const transactionSchema = yup.object().shape({
  amount: yup.string().required("Amount is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
});

export type AddTransactionsFormProps = {
  formType: FilterOption.EXPENSES | FilterOption.INCOME;
};
