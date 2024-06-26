import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PromptResultListRelationFilter } from "../promptResult/PromptResultListRelationFilter";

export type PromptWhereInput = {
  content?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  promptResults?: PromptResultListRelationFilter;
};
