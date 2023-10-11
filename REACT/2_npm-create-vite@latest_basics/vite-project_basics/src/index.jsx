import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Prueba } from "./prueba-tecnica/Prueba-tecnica.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Prueba />
  </React.StrictMode>,
);
