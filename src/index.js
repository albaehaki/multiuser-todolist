import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MultiProvider from "./Config/MultiProvider";
import Provider from "./Context";
import { CssBaseline } from "@mui/material";
//react dnd
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const touch = TouchBackend({
//   enableTouchEvents: true,
//   enableMouseEvents: false,
//   enableKeyboardEvents: false,
// });
const backend = window.ontouchstart === null ? TouchBackend : HTML5Backend;
console.log(window);
root.render(
  <React.StrictMode>
    <DndProvider backend={backend}>
      <MultiProvider providers={[<Provider.DataProvider key={1} />]}>
        <App />
      </MultiProvider>
      <CssBaseline />
    </DndProvider>
  </React.StrictMode>
);
