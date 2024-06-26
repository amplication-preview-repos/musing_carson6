import { PromptResultCreateNestedManyWithoutPromptsInput } from "./PromptResultCreateNestedManyWithoutPromptsInput";

export type PromptCreateInput = {
  content?: string | null;
  description?: string | null;
  promptResults?: PromptResultCreateNestedManyWithoutPromptsInput;
};
