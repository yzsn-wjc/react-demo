import React from "react";
import { createRoot } from "react-dom/client";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { initGlobalState } from "qiankun";

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

const initState = { a: 111, b: 222 };

// 初始化 state
const actions = initGlobalState(initState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev, "------");
});
actions.setGlobalState(initState);
// actions.offGlobalStateChange();
