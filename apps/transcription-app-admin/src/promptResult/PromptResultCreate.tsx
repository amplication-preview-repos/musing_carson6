import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PromptTitle } from "../prompt/PromptTitle";
import { TranscriptionTitle } from "../transcription/TranscriptionTitle";

export const PromptResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="prompt.id" reference="Prompt" label="Prompt">
          <SelectInput optionText={PromptTitle} />
        </ReferenceInput>
        <TextInput label="result" multiline source="result" />
        <TextInput label="status" source="status" />
        <ReferenceInput
          source="transcription.id"
          reference="Transcription"
          label="Transcription"
        >
          <SelectInput optionText={TranscriptionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
