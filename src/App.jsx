import React, { memo } from "react";
import "antd/dist/reset.css";

import Layout from "components/Layout";

const App = memo((props) => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
});

export default App;
