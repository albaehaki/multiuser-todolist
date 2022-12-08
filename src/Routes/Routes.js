import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesData } from "./Data";

const ListRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesData.map((item) => (
          <Route key={item.id} path={item.route} element={item.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default ListRoute;
