import React, { memo, useCallback, useMemo, useState } from "react";
import { Menu } from "antd";

import { customHistory } from "helpers/history";
import menus from "./config";

import "./index.scss";

export default memo((props) => {
  const [selectedKeys, setSelectedKeys] = useState(["welcome"]);
  const handleSelect = useCallback((menuItem) => {
    const {
      item: { props },
      key,
    } = menuItem;
    const { path } = props;
    customHistory.push(path);
    setSelectedKeys([key]);
  }, []);

  return (
    <div className="sider-bar-wrap">
      <div className="sider-bar-logo">reac-demo</div>
      <div className="sider-bar-menu">
        <Menu
          mode="inline"
          theme="dark"
          items={menus}
          selectedKeys={selectedKeys}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
});
