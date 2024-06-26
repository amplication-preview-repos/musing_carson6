import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptResultListRelationFilter } from "../promptResult/PromptResultListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TranscriptionWhereInput = {
  audioFile?: JsonFilter;
  id?: StringFilter;
  promptResults?: PromptResultListRelationFilter;
  status?: StringNullableFilter;
  transcript?: StringNullableFilter;
};
