import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./services/routes/Routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
