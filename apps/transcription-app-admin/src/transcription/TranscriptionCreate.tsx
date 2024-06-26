import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { PromptResultTitle } from "../promptResult/PromptResultTitle";

export const TranscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
