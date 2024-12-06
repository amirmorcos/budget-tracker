import * as yup from "yup";

export type TransactionFormData = {
  description: string;
  category: string;
};

export const transactionSchema = yup.object().shape({
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
});
