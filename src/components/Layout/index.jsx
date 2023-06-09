import React, { memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import SideBar from "components/SideBar";

import routes from "@/routes";

import "./index.scss";

const renderRoute = (item) => {
  const { path, entry, key } = item;
  const Com = React.lazy(() => import(`@/${entry}`));
  return (
    <Route path={path} key={key} element={<Com />} /> // lazy={() => import(entry)}
  );
};

const Layout = memo(() => {
  return (
    <div className="app-layout-wrap">
      <div className="app-layout-sidebar">
        <SideBar />
      </div>
      <div className="app-layout-content">
        <div className="app-layout-crumb"></div>
        <div className="app-layout-main">
          <Suspense fallback={<h1>loading.....</h1>}>
            <Routes>{routes.map((item, index) => renderRoute(item))}</Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
});

export default Layout;
