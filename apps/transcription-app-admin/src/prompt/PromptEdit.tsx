import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PromptResultTitle } from "../promptResult/PromptResultTitle";

export const PromptEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
