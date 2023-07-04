import React, { memo } from "react";

import "./customerComponent";

export default memo(() => {
  return (
    <div>
      <h3>使用插槽的示例</h3>
      <slot-component>
        <div slot="slot-1">啦啦啦</div>
      </slot-component>
    </div>
  );
});
