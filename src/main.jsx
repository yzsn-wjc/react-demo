import React from "react";
import { createRoot } from "react-dom/client";
import { unstable_HistoryRouter as Router } from "react-router-dom";

import { customHistory } from "helpers/history";

import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <Router history={customHistory}>
    <App />
  </Router>
);
