import React, { memo, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import _ from "lodash";

import SideBar from "components/SideBar";

import routes from "@/routes";

import "./index.scss";

// 格式化路由，把路由打平
const formatRoutes = (data, routesArr = [], parentPath = "") => {
  if (Array.isArray(data)) {
    _.cloneDeep(data).forEach((item) => {
      if (item?.children?.length) {
        const newParentPath = parentPath + item.path;
        formatRoutes(item.children, routesArr, newParentPath);
      } else {
        item.path = parentPath + item.path;
        routesArr.push(item);
      }
    });
  }

  return routesArr;
};

const renderRoute = (item) => {
  const { path, entry, key } = item;
  const Com = React.lazy(() => import(`@/${entry}`));
  return <Route path={path} key={key} element={<Com />} />;
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
            <Routes>
              {formatRoutes(routes).map((item, index) => renderRoute(item))}
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
});

export default Layout;
