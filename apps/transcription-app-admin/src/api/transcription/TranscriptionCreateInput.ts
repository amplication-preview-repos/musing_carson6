import { InputJsonValue } from "../../types";
import { PromptResultCreateNestedManyWithoutTranscriptionsInput } from "./PromptResultCreateNestedManyWithoutTranscriptionsInput";

export type TranscriptionCreateInput = {
  audioFile?: InputJsonValue;
  promptResults?: PromptResultCreateNestedManyWithoutTranscriptionsInput;
  status?: string | null;
  transcript?: string | null;
};
