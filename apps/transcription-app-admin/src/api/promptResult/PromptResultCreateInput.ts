import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";
import { TranscriptionWhereUniqueInput } from "../transcription/TranscriptionWhereUniqueInput";

export type PromptResultCreateInput = {
  prompt?: PromptWhereUniqueInput | null;
  result?: string | null;
  status?: string | null;
  transcription?: TranscriptionWhereUniqueInput | null;
};
