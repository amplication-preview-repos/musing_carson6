import { PromptResult } from "../promptResult/PromptResult";

export type Prompt = {
  content: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  promptResults?: Array<PromptResult>;
  updatedAt: Date;
};
