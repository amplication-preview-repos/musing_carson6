import { Prompt as TPrompt } from "../api/prompt/Prompt";

export const PROMPT_TITLE_FIELD = "description";

export const PromptTitle = (record: TPrompt): string => {
  return record.description?.toString() || String(record.id);
};
