import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROMPT_TITLE_FIELD } from "../prompt/PromptTitle";
import { TRANSCRIPTION_TITLE_FIELD } from "./TranscriptionTitle";

export const TranscriptionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="audioFile" source="audioFile" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="transcript" source="transcript" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PromptResult"
          target="transcriptionId"
          label="PromptResults"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Prompt"
              source="prompt.id"
              reference="Prompt"
            >
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
