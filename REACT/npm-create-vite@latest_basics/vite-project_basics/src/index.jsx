import React from "react";
import { createRoot } from "react-dom/client";
import { Hello, App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <App />
  </div>,
);
