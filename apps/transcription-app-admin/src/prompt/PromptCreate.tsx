import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PromptResultTitle } from "../promptResult/PromptResultTitle";

export const PromptCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="description" source="description" />
        <ReferenceArrayInput
          source="promptResults"
          reference="PromptResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PromptResultTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
