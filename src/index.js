import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MultiProvider from "./Config/MultiProvider";
import Provider from "./Context";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MultiProvider providers={[<Provider.DataProvider key={1} />]}>
      <App />
    </MultiProvider>
    <CssBaseline />
  </React.StrictMode>
);
