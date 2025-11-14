import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Home />
  </HashRouter>
);
