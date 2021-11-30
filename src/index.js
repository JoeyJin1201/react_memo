import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import RandomUser from './pages/RandomUser';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <RandomUser />
  </React.StrictMode>,
  document.getElementById("root")
);
