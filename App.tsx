import React, { FC, useEffect } from "react";
import { LogBox } from "react-native";
import Route from "./src/routes";

const App: FC = () => {
  // Hiding warning logs - only used in debug mode
  LogBox.ignoreLogs(["Warning: ..."]);
  LogBox.ignoreAllLogs();

  return <Route />;
};

export default App;
