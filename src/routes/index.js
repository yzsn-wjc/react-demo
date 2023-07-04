export default [
  {
    key: "welcome",
    path: "/welcome",
    entry: "pages/welcome",
  },
  {
    key: "com-playground",
    path: "/com-playground",
    children: [
      {
        key: "table",
        path: "/table",
        entry: "pages/comPlayground/table",
      },
      {
        key: "flow",
        path: "/flow",
        entry: "pages/comPlayground/flow",
      },
    ],
  },
  {
    key: "micro-react",
    path: "/app-react/*",
    entry: "pages/micro/reactApp",
  },
  {
    key: "web-components",
    path: "/web-components",
    children: [
      {
        key: "popUpInfo",
        path: "/popUpInfo",
        entry: "pages/webComponents/popUpInfo",
      },
      {
        key: "slot",
        path: "/slot",
        entry: "pages/webComponents/slot",
      },
    ],
  },
  {
    key: "home",
    path: "/",
    entry: "pages/welcome",
  },
];
