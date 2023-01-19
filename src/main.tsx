import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { store } from "./states/store";
import { Provider } from "react-redux";
import { Sample } from "./views";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
