import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from "./states/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
