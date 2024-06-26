import { StringFilter } from "../../util/StringFilter";
import { PromptWhereUniqueInput } from "../prompt/PromptWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TranscriptionWhereUniqueInput } from "../transcription/TranscriptionWhereUniqueInput";

export type PromptResultWhereInput = {
  id?: StringFilter;
  prompt?: PromptWhereUniqueInput;
  result?: StringNullableFilter;
  status?: StringNullableFilter;
  transcription?: TranscriptionWhereUniqueInput;
};
