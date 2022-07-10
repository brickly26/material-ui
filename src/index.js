import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

import { theme } from "./theme";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
