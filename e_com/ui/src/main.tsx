import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./store";

import Mainlayout from "./layout/Mainlayout";

import Router from "./Router/Router";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
