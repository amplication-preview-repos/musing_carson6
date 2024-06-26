import { PromptResultWhereInput } from "./PromptResultWhereInput";
import { PromptResultOrderByInput } from "./PromptResultOrderByInput";

export type PromptResultFindManyArgs = {
  where?: PromptResultWhereInput;
  orderBy?: Array<PromptResultOrderByInput>;
  skip?: number;
  take?: number;
};
