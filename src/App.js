import { Button } from "@mui/material";
import { Home } from "./Pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListRoute from "./Routes/Routes";

function App() {
  // const com = <Home />;
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={com} />
        </Routes>
      </BrowserRouter> */}
      <ListRoute />
    </>
  );
}

export default App;
