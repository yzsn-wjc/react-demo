import React, { memo } from "react";

import "./index.scss";

const Layout = memo(() => {
  return (
    <div className="app-layout-wrap">
      <div className="app-layout-sidebar"></div>
      <div className="app-layout-content"></div>
    </div>
  );
});

export default Layout;
