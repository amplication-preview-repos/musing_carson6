import { SortOrder } from "../../util/SortOrder";

export type PromptOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
