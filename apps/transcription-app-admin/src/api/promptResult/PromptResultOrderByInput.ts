import { SortOrder } from "../../util/SortOrder";

export type PromptResultOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  promptId?: SortOrder;
  result?: SortOrder;
  status?: SortOrder;
  transcriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
