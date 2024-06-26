import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PromptTitle } from "../prompt/PromptTitle";
import { TranscriptionTitle } from "../transcription/TranscriptionTitle";

export const PromptResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
