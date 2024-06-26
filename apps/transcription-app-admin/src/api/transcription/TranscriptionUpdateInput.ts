import { InputJsonValue } from "../../types";
import { PromptResultUpdateManyWithoutTranscriptionsInput } from "./PromptResultUpdateManyWithoutTranscriptionsInput";

export type TranscriptionUpdateInput = {
  audioFile?: InputJsonValue;
  promptResults?: PromptResultUpdateManyWithoutTranscriptionsInput;
  status?: string | null;
  transcript?: string | null;
};
