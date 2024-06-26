import { Prompt } from "../prompt/Prompt";
import { Transcription } from "../transcription/Transcription";

export type PromptResult = {
  createdAt: Date;
  id: string;
  prompt?: Prompt | null;
  result: string | null;
  status: string | null;
  transcription?: Transcription | null;
  updatedAt: Date;
};
