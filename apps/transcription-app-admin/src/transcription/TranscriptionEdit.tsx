import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { PromptResultTitle } from "../promptResult/PromptResultTitle";

export const TranscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <ReferenceArrayInput
          source="promptResults"
          reference="PromptResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromptResultTitle} />
        </ReferenceArrayInput>
        <TextInput label="status" source="status" />
        <TextInput label="transcript" multiline source="transcript" />
      </SimpleForm>
    </Edit>
  );
};
