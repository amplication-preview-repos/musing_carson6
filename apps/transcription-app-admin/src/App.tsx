import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TranscriptionList } from "./transcription/TranscriptionList";
import { TranscriptionCreate } from "./transcription/TranscriptionCreate";
import { TranscriptionEdit } from "./transcription/TranscriptionEdit";
import { TranscriptionShow } from "./transcription/TranscriptionShow";
import { PromptResultList } from "./promptResult/PromptResultList";
import { PromptResultCreate } from "./promptResult/PromptResultCreate";
import { PromptResultEdit } from "./promptResult/PromptResultEdit";
import { PromptResultShow } from "./promptResult/PromptResultShow";
import { PromptList } from "./prompt/PromptList";
import { PromptCreate } from "./prompt/PromptCreate";
import { PromptEdit } from "./prompt/PromptEdit";
import { PromptShow } from "./prompt/PromptShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TranscriptionApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transcription"
          list={TranscriptionList}
          edit={TranscriptionEdit}
          create={TranscriptionCreate}
          show={TranscriptionShow}
        />
        <Resource
          name="PromptResult"
          list={PromptResultList}
          edit={PromptResultEdit}
          create={PromptResultCreate}
          show={PromptResultShow}
        />
        <Resource
          name="Prompt"
          list={PromptList}
          edit={PromptEdit}
          create={PromptCreate}
          show={PromptShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
