import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router/routes";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route): any => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.path}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
