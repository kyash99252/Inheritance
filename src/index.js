import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";
import Dashboard from "./Dashboard";

ReactDOM.render(
  <ContextProvider>
    <Dashboard />
  </ContextProvider>,
  document.getElementById("root")
);
