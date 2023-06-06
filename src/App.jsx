import React, { memo } from "react";

import { Button } from "antd";
import "antd/dist/reset.css";

import Layout from "components/Layout";

const App = memo(() => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
});

export default App;
