export default [
  {
    key: "welcome",
    label: "首页",
    path: "/welcome",
  },
  {
    key: "mirco-app",
    label: "微前端应用",
    children: [
      {
        key: "mirco-app-1",
        label: "vue微应用",
      },
      {
        key: "mirco-app-2",
        label: "react微应用",
      },
    ],
  },
  {
    key: "com-playground",
    label: "组件示例",
    children: [
      {
        key: "table",
        label: "列表",
        path: "/com-playground/table",
      },
    ],
  },
];
