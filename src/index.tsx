import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import GlobalStyle from "./utility/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename="Event-Planer-TS">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
