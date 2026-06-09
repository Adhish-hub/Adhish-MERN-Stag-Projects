import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { MenuProvider } from "./context/MenuContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MenuProvider>
      <App />
    </MenuProvider>
  </BrowserRouter>,
);
