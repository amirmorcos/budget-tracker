import { FilterOption } from "utils/transaction";

export type TransactionFilterProps = {
  onFilter: (filters: FilterOption[]) => void;
  onReset: () => void;
};
