import React from "react";
import { createRoot } from "react-dom/client";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";

import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";

import { customHistory } from "utils/history";

import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <Router history={customHistory} basename="/">
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Router>
);
