import { PromptResultUpdateManyWithoutPromptsInput } from "./PromptResultUpdateManyWithoutPromptsInput";

export type PromptUpdateInput = {
  content?: string | null;
  description?: string | null;
  promptResults?: PromptResultUpdateManyWithoutPromptsInput;
};
