import { SortOrder } from "../../util/SortOrder";

export type TranscriptionOrderByInput = {
  audioFile?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transcript?: SortOrder;
  updatedAt?: SortOrder;
};
