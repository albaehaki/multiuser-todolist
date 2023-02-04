import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MultiProvider from "./Config/MultiProvider";
import Provider from "./Context";
import { CssBaseline } from "@mui/material";
//react dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <MultiProvider providers={[<Provider.DataProvider key={1} />]}>
        <App />
      </MultiProvider>
      <CssBaseline />
    </DndProvider>
  </React.StrictMode>
);
