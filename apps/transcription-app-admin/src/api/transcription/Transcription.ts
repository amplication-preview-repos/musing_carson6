import { JsonValue } from "type-fest";
import { PromptResult } from "../promptResult/PromptResult";

export type Transcription = {
  audioFile: JsonValue;
  createdAt: Date;
  id: string;
  promptResults?: Array<PromptResult>;
  status: string | null;
  transcript: string | null;
  updatedAt: Date;
};
