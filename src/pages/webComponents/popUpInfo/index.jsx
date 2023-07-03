import React, { memo } from "react";

import "./customerComponent";

export default memo(() => {
  return (
    <div>
      <h3>popUpinfo</h3>
      <div>
        <popup-info />
      </div>
    </div>
  );
});
