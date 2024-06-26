import { PromptResult as TPromptResult } from "../api/promptResult/PromptResult";

export const PROMPTRESULT_TITLE_FIELD = "status";

export const PromptResultTitle = (record: TPromptResult): string => {
  return record.status?.toString() || String(record.id);
};
