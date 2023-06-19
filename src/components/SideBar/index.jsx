import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Menu } from "antd";

import { customHistory } from "utils/history";
import menus from "./config";

import "./index.scss";

// 获取展开跟选中的key
const getExpendAndSelect = (
  data = [],
  selectData = { selectedKey: "", openKeys: [] }
) => {
  data.forEach((item) => {
    if (item.children?.length) {
      const newSelectData = getExpendAndSelect(item.children, selectData);
      if (newSelectData?.selectedKey) newSelectData.openKeys.push(item.key);
      return newSelectData;
    } else {
      const { pathname } = location;
      if (pathname.includes(item.path)) selectData.selectedKey = item.key;
    }
  });
  return selectData;
};

export default memo((props) => {
  const [selectedKeys, setSelectedKeys] = useState(["welcome"]);
  const [openKeys, setOpenKeys] = useState([]);

  const handleSelect = useCallback((menuItem) => {
    const {
      item: { props },
      key,
    } = menuItem;
    const { path } = props;
    customHistory.push(path);
    setSelectedKeys([key]);
  }, []);

  const getSelectKey = useCallback(() => {
    const selectData = getExpendAndSelect(menus) || {};
    setSelectedKeys([selectData.selectedKey]);
    setOpenKeys(selectData.openKeys);
  }, []);

  useEffect(() => {
    getSelectKey();
  }, []);

  return (
    <div className="sider-bar-wrap">
      <div className="sider-bar-logo">reac-demo</div>
      <div className="sider-bar-menu">
        <Menu
          mode="inline"
          theme="dark"
          items={menus}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onSelect={handleSelect}
          onOpenChange={setOpenKeys}
        />
      </div>
    </div>
  );
});
