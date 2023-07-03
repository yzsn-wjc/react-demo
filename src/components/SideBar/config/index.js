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
        path: "/app-react/111",
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
      {
        key: "flow",
        label: "流程图",
        path: "/com-playground/flow",
      },
    ],
  },
  {
    key: "web-components",
    label: "Web components",
    children: [
      {
        key: "count-component",
        label: "PopUpInfo",
        path: "/web-components/popUpInfo",
      },
    ],
  },
];
