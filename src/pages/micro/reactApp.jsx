import React, { memo, useEffect } from "react";
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "reactApp",
    entry: "//192.168.208.114:3000",
    container: "#subApp",
    activeRule: "/app-react",
  },
]);

export default memo((props) => {
  useEffect(() => {
    start();
  }, []);

  return <div id="subApp"></div>;
});
