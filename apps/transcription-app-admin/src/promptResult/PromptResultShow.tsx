import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PROMPT_TITLE_FIELD } from "../prompt/PromptTitle";
import { TRANSCRIPTION_TITLE_FIELD } from "../transcription/TranscriptionTitle";

export const PromptResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Prompt" source="prompt.id" reference="Prompt">
          <TextField source={PROMPT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="result" source="result" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="Transcription"
          source="transcription.id"
          reference="Transcription"
        >
          <TextField source={TRANSCRIPTION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
